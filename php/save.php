<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  $method = $_SERVER['REQUEST_METHOD'];

  if($method == "OPTIONS") {
    die();
  }

  require_once( __DIR__ . '/vendor/autoload.php' );
  require_once( __DIR__ . '/functions.php' );
  
  $dotenv = Dotenv\Dotenv::createImmutable( __DIR__ . '/../' );
  $dotenv->safeLoad();

  $response_array = [
    'success' => false,
    'msg' => 'Error desconocido'
  ];

  try {
    $require = json_decode(file_get_contents('php://input'));

    $recaptcha = verifyRecaptcha($require->recaptchaToken);

    if ($recaptcha['success']) {
      $conexion = new PDO( $_ENV['VITE_DSN'], $_ENV['VITE_DB_USER'], $_ENV['VITE_DB_PASS'] );
    } else {
      $response_array = [
        'msg' => 'Error Recaptcha, volvé a intentar el envio por favor.'
      ];
    }
  
  } catch (Exception $e) {
    $response_array = [
      'msg' => 'Error en la conexion a la base de datos'
    ];
    echo json_encode($response_array);exit;
  }

  try {

    switch ($require->table) {
      case 'budgets_product':
        $sql = "INSERT INTO budgets_product values(default, :name, :email, :phone, :comments, :category, :sub_category, :product, :url, :origin, :created_at)";
        $stmt = $conexion->prepare($sql);
        $stmt->bindValue(":name", $require->name, PDO::PARAM_STR);
        $stmt->bindValue(":email", $require->email, PDO::PARAM_STR);
        $stmt->bindValue(":phone", $require->phone, PDO::PARAM_STR);
        $stmt->bindValue(":comments", $require->comments, PDO::PARAM_STR);
        $stmt->bindValue(":category", $require->category, PDO::PARAM_STR);
        $stmt->bindValue(":sub_category", $require->sub_category, PDO::PARAM_STR);
        $stmt->bindValue(":product", $require->product, PDO::PARAM_STR);
        $stmt->bindValue(":url", $require->url, PDO::PARAM_STR);
        $stmt->bindValue(":origin", $require->origin, PDO::PARAM_STR);
        $stmt->bindValue(":created_at", date("Y-m-d H:i:s"), PDO::PARAM_STR);
        break;
      
      case 'contacts':
        $sql = "INSERT INTO contacts values(default, :name, :email, :phone, :comments, :url, :origin, :created_at)";
        $stmt = $conexion->prepare($sql);
        $stmt->bindValue(":name", $require->name, PDO::PARAM_STR);
        $stmt->bindValue(":email", $require->email, PDO::PARAM_STR);
        $stmt->bindValue(":phone", $require->phone, PDO::PARAM_STR);
        $stmt->bindValue(":comments", $require->comments, PDO::PARAM_STR);
        $stmt->bindValue(":url", $require->url, PDO::PARAM_STR);
        $stmt->bindValue(":origin", $require->origin, PDO::PARAM_STR);
        $stmt->bindValue(":created_at", date("Y-m-d H:i:s"), PDO::PARAM_STR);
        break;
      
      case 'newsletters':
        $sql = "INSERT INTO newsletters values(default, :email, :url, :origin, :created_at)";
        $stmt = $conexion->prepare($sql);
        $stmt->bindValue(":email", $require->email, PDO::PARAM_STR);
        $stmt->bindValue(":url", $require->url, PDO::PARAM_STR);
        $stmt->bindValue(":origin", $require->origin, PDO::PARAM_STR);
        $stmt->bindValue(":created_at", date("Y-m-d H:i:s"), PDO::PARAM_STR);
        break;
    }

    $save = $stmt->execute();

    if ($save) {
      $response_array = [
        'success' => true,
        'msg' => 'Consulta Enviada Exitosamente'
      ];
    }

    echo json_encode($response_array);

  } catch (Exception $e) {
    $response_array = [
      'msg' => 'No se pudo grabar la consulta, intente nuevamente'
    ];
    echo json_encode($response_array);exit;
  }

?>