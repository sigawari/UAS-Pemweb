<?php
namespace App;
class SessionHandler {
    public static function setUser($user) {
        $_SESSION['user'] = $user;
    }

    public static function getUser() {
        return isset($_SESSION['user']) ? $_SESSION['user'] : null;
    }

    public static function isLoggedIn() {
        return isset($_SESSION['user']);
    }

    public static function logout() {
        // Hapus semua data session
        session_unset();
        session_destroy();
    }
}
?>
