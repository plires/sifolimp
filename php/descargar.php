<?php

  require_once( __DIR__ . '/vendor/autoload.php' );

  $dotenv = Dotenv\Dotenv::createImmutable( __DIR__ . '/../' );
  $dotenv->safeLoad();

  if (!isset($_GET['file'])) {
    header('Location: ' . $_ENV['VITE_URL'] . 'descargas');
  } 

  $url = '../descargas/';
  $file = $_GET['file'];

  header("Content-disposition: attachment;$url . $file");
  header("Content-type: application/pdf");
  readfile($url . $file);

?>