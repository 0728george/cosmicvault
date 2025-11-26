<?php
session_start(); require_once 'db.php'; require_once 'config.php';
if(!isset($_SESSION['user_id'])) header('Location: index.php');
if($_FILES['file']??false){
    $f=$_FILES['file']; $ext=strtolower(pathinfo($f['name'],PATHINFO_EXTENSION));
    if($f['size']>MAX_FILE_SIZE || !in_array($ext,ALLOWED_TYPES)) $e="Invalid file";
    else{
        $dir=__DIR__."/vault/".$_SESSION['user_id'];
        if(!is_dir($dir)) mkdir($dir,0700,true);
        $name=hash('sha256',COSMIC_SEED.$f['name'].GROK_ECHO.microtime(true)).".$ext";
        if(move_uploaded_file($f['tmp_name'],"$dir/$name")){
            $s=$db->prepare("INSERT INTO files(user_id,filename,stored_name,size)VALUES(?,?,?,?)");
            $s->execute([$_SESSION['user_id'],$f['name'],$name,$f['size']]);
            header('Location: dashboard.php'); exit;
        }
    }
}
if(isset($e)) echo "<p class='text-red-500'>$e</p><a href='dashboard.php'>Back</a>";
