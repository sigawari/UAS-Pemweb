<?php
require_once "sessionHandler.php";
use App\SessionHandler;

session_start();

if (class_exists('SessionHandler')) {
    SessionHandler::logout();
    echo json_encode(["success" => true, "message" => "Logout berhasil!"]);
} else {
    echo json_encode(["success" => false, "message" => "Kelas SessionHandler tidak ditemukan."]);
}
?>
