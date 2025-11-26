<?php
session_start(); require_once 'db.php';
if(!isset($_SESSION['user_id']) || !isset($_GET['id'])) header('Location: index.php');
$s=$db->prepare("SELECT stored_name FROM files WHERE id=? AND user_id=?");
$s->execute([$_GET['id'],$_SESSION['user_id']]); $f=$s->fetch();
if($f){
    @unlink(__DIR__."/vault/{$_SESSION['user_id']}/{$f['stored_name']}");
    $db->prepare("DELETE FROM files WHERE id=?")->execute([$_GET['id']]);
}
header('Location: dashboard.php'); exit;
