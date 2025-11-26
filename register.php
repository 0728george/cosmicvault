<?php session_start(); require_once 'db.php'; require_once 'config.php';
if($_POST){
    $u=trim($_POST['username']); $p=password_hash($_POST['password'],PASSWORD_BCRYPT);
    try{
        $s=$db->prepare("INSERT INTO users(username,password)VALUES(?,?)");
        $s->execute([$u,$p]); $_SESSION['user_id']=$db->lastInsertId();
        header('Location: dashboard.php'); exit;
    }catch(Exception $e){ $e="Username taken"; }
}
?>
<!DOCTYPE html><html><head><title>Register – <?=SITE_NAME?></title><link rel="stylesheet" href="assets/cosmic.css"></head>
<body class="flex items-center justify-center min-h-screen relative"><div class="stars"></div>
<div class="card p-10 relative z-10 w-96"><h2 class="text-4xl font-bold mb-8 text-center">Create Vault</h2>
<?php if(isset($e))echo"<p class='text-red-400 text-center mb-4'>$e</p>";?>
<form method="post" class="space-y-6"><input type="text" name="username" required placeholder="Username" class="w-full px-4 py-3 bg-white/10 rounded-lg">
<input type="password" name="password" required placeholder="Password" class="w-full px-4 py-3 bg-white/10 rounded-lg">
<button type="submit" class="w-full py-4 btn-cosmic text-xl font-bold rounded-lg">Enter the Cosmos</button></form>
<p class="text-center mt-6"><a href="index.php" class="text-purple-400 hover:underline">Back</a></p></div></body></html>
