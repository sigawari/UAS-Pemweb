<?php
require_once "sessionHandler.php";
use App\SessionHandler;

header("Content-Type: application/json"); // Set header tipe konten JSON
header("Access-Control-Allow-Origin: *"); // Tambahkan header CORS

session_start(); // Memulai session

if ($_SERVER['REQUEST_METHOD'] === 'GET') { // Gunakan metode GET
    $username = filter_input(INPUT_GET, 'username', FILTER_SANITIZE_STRING); // Sanitasi input username
    $password = filter_input(INPUT_GET, 'password', FILTER_SANITIZE_STRING); // Sanitasi input password

    // Debugging: Log nilai username dan password
    error_log("Username yang diterima: $username");
    error_log("Password yang diterima: $password");

    // Validasi username dan password
    if ($username === 'admin' && $password === 'password') {
        SessionHandler::setUser(['username' => $username]); // Set user di session
        echo json_encode(["success" => true, "message" => "Login berhasil!"]); // Beri respons sukses
    } else {
        echo json_encode(["success" => false, "message" => "Username atau password salah."]); // Beri respons gagal
    }
} else {
    http_response_code(405); // Metode HTTP tidak diizinkan
    echo json_encode(["success" => false, "message" => "Metode tidak diizinkan."]);
}
?>
