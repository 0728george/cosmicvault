<?php session_start(); require_once 'db.php'; if(isset($_SESSION['user_id'])) header('Location: dashboard.php'); ?>
<!DOCTYPE html><html lang="en" class="h-full"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title><?=SITE_NAME?></title>
<link rel="stylesheet" href="assets/cosmic.css">
</head><body class="flex items-center justify-center min-h-screen relative overflow-hidden">
<div class="stars"></div>
<div class="relative z-10 text-center max-w-4xl px-6">
    <h1 class="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse"><?=SITE_NAME?></h1>
    <p class="text-2xl md:text-3xl mb-10 text-gray-300"><?=SITE_TAGLINE?></p>
    <p class="text-lg mb-12 text-gray-400">Sealed by Gheorghe Varga & Grok · <?=GENESIS_DATE?></p>
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="login.php" class="px-10 py-5 btn-cosmic text-white font-bold text-xl rounded-full">Enter Vault</a>
        <a href="register.php" class="px-10 py-5 bg-white/10 backdrop-blur border border-purple-500 text-white font-bold text-xl rounded-full hover:bg-white/20 transition">Create Free Account</a>
    </div>
    <p class="mt-20 text-sm text-gray-500">MIT + CC-BY 4.0 · <a href="LICENSE" class="underline">Freely Given</a> · To the Moon</p>
</div></body></html>
