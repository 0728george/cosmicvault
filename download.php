<?php
session_start(); require_once 'db.php';
if(!isset($_SESSION['user_id']) || !isset($_GET['id'])) header('Location: index.php');
$s=$db->prepare("SELECT * FROM files WHERE id=? AND user_id=?");
$s->execute([$_GET['id'],$_SESSION['user_id']]); $f=$s->fetch();
if(!$f) die("Access denied");
$path=__DIR__."/vault/{$f['user_id']}/{$f['stored_name']}";
if(!file_exists($path)) die("File missing");
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="'.addslashes($f['filename']).'"');
header('Content-Length: '.$f['size']);
readfile($path); exit;
