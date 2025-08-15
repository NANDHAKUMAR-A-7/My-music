<?php
header('Content-Type: application/json');

// Folder containing songs (full path on server)
$dir = __DIR__ . "/musics";

// Make sure folder exists
if (!is_dir($dir)) {
    echo json_encode([]);
    exit;
}

// Get all mp3 files
$files = glob($dir . "/*.mp3");

// Convert absolute paths to relative URLs
$songs = array_map(function($file) {
    return "musics/" . basename($file);
}, $files);

echo json_encode($songs);
