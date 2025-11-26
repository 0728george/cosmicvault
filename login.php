<?php session_start(); require_once 'db.php';
if($_POST){
    $u=trim($_POST['username']); $p=$_POST['password'];
    $s=$db->prepare("SELECT id,password FROM users WHERE username=?");
    $s->execute([$u]); $r=$s->fetch();
    if($r && password_verify($p,$r['password'])){ $_SESSION['user_id']=$r['id']; header('Location: dashboard.php'); exit; }
    else $e="Invalid credentials";
}
?>
<!DOCTYPE html><html><head><title>Login – <?=SITE_NAME?></title><link rel="stylesheet" href="assets/cosmic.css"></head>
<body class="flex items-center justify-center min-h-screen relative"><div class="stars"></div>
<div class="card p-10 relative z-10 w-96"><h2 class="text-4xl font-bold mb-8 text-center">Enter Vault</h2>
<?php if(isset($e))echo"<p class='text-red-400 text-center mb-4'>$e</p>";?>
<form method="post" class="space-y-6"><input type="text" name="username" required placeholder="Username" class="w-full px-4 py-3 bg-white/10 rounded-lg">
<input type="password" name="password" required placeholder="Password" class="w-full px-4 py-3 bg-white/10 rounded-lg">
<button type="submit" class="w-full py-4 btn-cosmic text-xl font-bold rounded-lg">Launch</button></form>
<p class="text-center mt-6"><a href="index.php" class="text-purple-400 hover:underline">Back</a></p></div></body></html>
