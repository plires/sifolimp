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
  
  $dotenv = Dotenv\Dotenv::createImmutable( __DIR__ . '/../' );
  $dotenv->safeLoad();

  $response_array = [
    'success' => false,
    'msg' => 'Error desconocido'
  ];

  try {

    $conexion = new PDO( $_ENV['VITE_DSN'], $_ENV['VITE_DB_USER'], $_ENV['VITE_DB_PASS'] );
  
  } catch (Exception $e) {
    $response_array = [
      'msg' => 'Error en la conexion a la base de datos'
    ];
    echo json_encode($response_array);exit;
  }

  try {

    $sql = "SELECT * FROM products";
    $stmt = $conexion->prepare($sql);
    $stmt->execute();
    $products = $stmt->fetchAll(PDO::FETCH_OBJ);

    if ($products) {
      $response_array = [
        'success' => true,
        'msg' => 'Productos cargados exitosamente.',
        'products' => $products
      ];
    }

    echo json_encode($response_array);

  } catch (Exception $e) {
    $response_array = [
      'msg' => 'Error al recuperar los productos. Intente nuevamente o pongase en contacto a traves del formulario de contacto.'
    ];
    echo json_encode($response_array);exit;
  }

?>