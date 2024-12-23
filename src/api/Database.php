<?php

class Database {
    private $host = "localhost";
    private $username = "root";
    private $password = "";
    private $database = "uas_pemweb";
    private $conn;

    // Constructor untuk membuat koneksi database
    public function __construct() {
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->database);

        if ($this->conn->connect_error) {
            die("Koneksi gagal: " . $this->conn->connect_error);
        }
    }

    // Method untuk mendapatkan koneksi
    public function getConnection() {
        return $this->conn;
    }

    // Destructor untuk menutup koneksi
    public function __destruct() {
        $this->conn->close();
    }
}
?>
