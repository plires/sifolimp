<?php

  require_once( __DIR__ . '/vendor/autoload.php' );

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  function emailValid($email)
  { 
    $mail_correcto = 0; 
    //compruebo unas cosas primeras 
    if ((strlen($email) >= 6) && (substr_count($email,"@") == 1) && (substr($email,0,1) != "@") && (substr($email,strlen($email)-1,1) != "@")){ 
          if ((!strstr($email,"'")) && (!strstr($email,"\"")) && (!strstr($email,"\\")) && (!strstr($email,"\$")) && (!strstr($email," "))) { 
            //miro si tiene caracter . 
            if (substr_count($email,".")>= 1){ 
                //obtengo la terminacion del dominio 
                $term_dom = substr(strrchr ($email, '.'),1); 
                //compruebo que la terminaci&oacute;n del dominio sea correcta 
                if (strlen($term_dom)>1 && strlen($term_dom)<5 && (!strstr($term_dom,"@")) ){ 
                  //compruebo que lo de antes del dominio sea correcto 
                  $antes_dom = substr($email,0,strlen($email) - strlen($term_dom) - 1); 
                  $caracter_ult = substr($antes_dom,strlen($antes_dom)-1,1); 
                  if ($caracter_ult != "@" && $caracter_ult != "."){ 
                      $mail_correcto = 1; 
                  } 
                } 
            } 
          } 
    } 
    if ($mail_correcto) 
      return 1; 
    else 
      return 0; 
  }

  function emptyInput($dato)
  {
    return $dato=='';
    
  }

  function verifyRecaptcha($token)
  {

    $cu = curl_init();
    curl_setopt($cu, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
    curl_setopt($cu, CURLOPT_POST, 1);
    curl_setopt($cu, CURLOPT_POSTFIELDS, http_build_query(array('secret' => $_ENV['VITE_RECAPTCHA_SECRET_KEY'], 'response' => $token)));
    curl_setopt($cu, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($cu);
    curl_close($cu);

    return $data = json_decode($response, true);

  } 

  function sendEmail($destinatario, $template, $post)
  {

    $mail = new PHPMailer();
    
    try {
      
      switch ($destinatario) {
      
        case 'Cliente':
  
          //ENVIOS
          $mail->setFrom($post['email'], $post['name']);
          $mail->addAddress($_ENV['VITE_EMAIL_CLIENT'], $_ENV['VITE_NAME_CLIENT']); //Add a recipient
          $mail->addReplyTo($post['email'], $post['name']);

          if ( $_ENV['VITE_EMAIL_CC'] != '' ) {
            
            $emails_to_add = explode(",", $_ENV['VITE_EMAIL_CC']);
            
            foreach ($emails_to_add as $email) {
              $mail->addCC($email);
            }
            
          }

          break;
        
        case 'Usuario':
  
          //ENVIOS
          $mail->setFrom($_ENV['VITE_EMAIL_CLIENT'], $_ENV['VITE_NAME_CLIENT']);
          $mail->addAddress($post['email'], $post['name']);     //Add a recipient
          $mail->addReplyTo($_ENV['VITE_EMAIL_CLIENT'], $_ENV['VITE_NAME_CLIENT']);
          break;
  
      }
  
      switch ($template) {
  
        case 'Consulta Producto Cliente':
          $template_email = selectEmailTemplate($post, 'to_client_product');
          $subject = 'Nueva consulta desde el ' . $post['origin'];
          break;
        
        case 'Consulta Producto Usuario':
          $template_email = selectEmailTemplate($post, 'to_user_product');
          $subject = 'Gracias por tu contacto.';
          break;
        
        case 'Contacto Cliente':
          $template_email = selectEmailTemplate($post, 'to_client_contact');
          $subject = 'Nueva consulta desde el ' . $post['origin'];
          break;
        
        case 'Contacto Usuario':
          $template_email = selectEmailTemplate($post, 'to_user_contact');
          $subject = 'Gracias por tu contacto.';
          break;

          case 'Newsletter Cliente':
            $template_email = selectEmailTemplate($post, 'to_client_newsletter');
            $subject = 'Nueva consulta desde el ' . $post['origin'];
            break;
          
          case 'Newsletter Usuario':
            $template_email = selectEmailTemplate($post, 'to_user_newsletter');
            $subject = 'Gracias por tu suscripción.';
            break;
        
      }
  
      if ($_ENV['VITE_ENVIRONMENT'] === 'local') {
        $mail->isSendmail();
      } else {
        $mail->isSMTP();
      }
  
      //SERVER SETTINGS
      // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
      $mail->Host       = $_ENV['VITE_SMTP'];
      $mail->SMTPAuth   = true;
      $mail->Username   = $_ENV['VITE_EMAIL_CLIENT'];
      $mail->Password   = $_ENV['VITE_PASSWORD'];
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
      $mail->CharSet = $_ENV['VITE_EMAIL_CHARSET'];
      $mail->Port       = $_ENV['VITE_EMAIL_PORT'];

      $mail->SMTPOptions = array(
        'ssl' => array(
          'verify_peer' => false,
          'verify_peer_name' => false,
          'allow_self_signed' => true
        )
      );

      //CONTENIDO
      $mail->isHTML(true);                                  
      $mail->Subject = $subject;
      $mail->Body    = $template_email;

      //send the message, check for errors
      $mail->send();

      $response_array = [
        'success' => true,
        'msg' => 'Correo Enviado Exitosamente'
      ];

      return $response_array;
      
    } catch (\Throwable $th) {
      $response_array = [
        'success' => false,
        'msg' => 'Ocurrió un error al enviar el correo, por favor intente nuevamente'
      ];

      return $response_array;
      
    }

  }

  function selectEmailTemplate($post, $to) 
  {

    if ($_ENV['VITE_ENVIRONMENT'] === 'local') {
      $base = $_ENV['VITE_ROOT'] . 'src/';
    } else {
      $base = $_ENV['VITE_ROOT'];
    }

    if ($post['table'] === 'contacts') {
      $post['category'] = null;
      $post['sub_category'] = null;
      $post['product'] = null;
    }

    if ($post['table'] === 'newsletters') {
      $post['category'] = null;
      $post['sub_category'] = null;
      $post['product'] = null;
      $post['name'] = null;
      $post['phone'] = null;
      $post['comments'] = null;
    }

    //configuro las variables a remplazar en el template
    $vars = array(
      '{name_client}',
      '{email_client}',
      '{phone_client}',
      '{phone_show_client}',
      '{whatsapp_show_client}',
      '{origin}',
      '{url}',
      '{category}',
      '{sub_category}',
      '{product}',
      '{name_user}',
      '{email_user}',
      '{phone_user}',
      '{comments_user}',
      '{date}',
      '{base}'
    );

    $values = array( 
      $_ENV['VITE_NAME_CLIENT'],
      $_ENV['VITE_EMAIL_CLIENT'],
      $_ENV['VITE_PHONE_CLIENT'],
      $_ENV['VITE_PHONE_SHOW_CLIENT'],
      $_ENV['VITE_PHONE_SHOW_CLIENT'],
      $post['origin'],
      $post['url'],
      $post['category'],
      $post['sub_category'],
      $post['product'],
      $post['name'],
      $post['email'],
      $post['phone'],
      $post['comments'],
      date('d-m-Y'),
      $base
    );

    switch ($to) {

      case 'to_client_product':
        $template = file_get_contents( __DIR__ . '/emails/products/products-to-client.php');
        break;

      case 'to_user_product':
        $template = file_get_contents( __DIR__ . '/emails/products/products-to-user.php');
        break;
      
      case 'to_client_contact':
        $template = file_get_contents( __DIR__ . '/emails/contacts/contacts-to-client.php');
        break;

      case 'to_user_contact':
        $template = file_get_contents( __DIR__ . '/emails/contacts/contacts-to-user.php');
        break;
      
      case 'to_client_newsletter':
        $template = file_get_contents( __DIR__ . '/emails/newsletter/newsletter-to-client.php');
        break;

      case 'to_user_newsletter':
        $template = file_get_contents( __DIR__ . '/emails/newsletter/newsletter-to-user.php');
        break;

    }

    //Remplazamos las variables por las marcas en los templates
    $template_final = str_replace($vars, $values, $template);

    return $template_final;

  }

?>