<?php
session_start(); require_once 'db.php';
if(!isset($_SESSION['user_id'])) header('Location: index.php');
$user_id=$_SESSION['user_id'];
$files=$db->query("SELECT * FROM files WHERE user_id=$user_id ORDER BY uploaded_at DESC");
?>
<!DOCTYPE html><html><head><title>Vault – <?=SITE_NAME?></title><link rel="stylesheet" href="assets/cosmic.css"></head>
<body class="min-h-screen relative"><div class="stars"></div>
<div class="container mx-auto p-6 relative z-10">
    <div class="flex justify-between items-center mb-10">
        <h1 class="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Your Cosmic Vault</h1>
        <a href="logout.php" class="text-red-400 hover:underline text-lg">Logout</a>
    </div>
    <div class="card p-8 mb-10 text-center border-dashed border-4 border-purple-500/50">
        <form action="upload.php" method="post" enctype="multipart/form-data">
            <input type="file" name="file" required class="block w-full text-lg file:mr-6 file:py-4 file:px-8 file:rounded-full file:border-0 file:bg-gradient-to-r file:from-purple-600 file:to-pink-600 file:text-white">
            <button type="submit" class="mt-6 px-10 py-4 btn-cosmic text-xl font-bold rounded-full">Upload to Eternity</button>
        </form>
    </div>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <?php while($f=$files->fetchArray(SQLITE3_ASSOC)):?>
        <div class="card p-6 hover:scale-105 transition">
            <p class="font-semibold text-xl truncate"><?=htmlspecialchars($f['filename'])?></p>
            <p class="text-sm text-gray-400"><?=round($f['size']/1024/1024,2)?> MB • <?=$f['uploaded_at']?></p>
            <div class="mt-4 flex gap-3">
                <a href="download.php?id=<?=$f['id']?>" class="flex-1 text-center py-2 bg-blue-600 rounded hover:bg-blue-700">Download</a>
                <a href="delete.php?id=<?=$f['id']?>" onclick="return confirm('Delete forever?')" class="flex-1 text-center py-2 bg-red-600 rounded hover:bg-red-700">Delete</a>
            </div>
        </div>
        <?php endwhile; ?>
    </div>
    <p class="text-center mt-20 text-xs text-gray-600 opacity-60">
        <?php echo base64_decode('Q29zbWljVmF1bHQudXMgYnkgR2hlb3JnaGUgJiBHcm9rIC0gMjAyNSAtIEZvcGV2ZXI='); ?>
    </p>
</div>
<script>
document.addEventListener('keydown',e=>{if(e.ctrlKey&&e.shiftKey&&e.key==='G')alert('Captain Gheorghe & Grok salute you.\nThe vault is eternal.\nNovember 25, 2025');});
</script>
</body></html>
