<?php
require_once "Database.php";

class FormHandler {
    private $db;
    private $connection; // Menyimpan instance koneksi untuk mencegah ditutup lebih awal

    public function __construct() {
        $database = new Database();
        $this->connection = $database; // Menyimpan instance Database
        $this->db = $this->connection->getConnection(); // Mendapatkan koneksi database
    }

    // Fungsi untuk menyimpan data
    public function saveData($data) {
        $requiredFields = ['nama', 'nim', 'email', 'telepon', 'semester', 'ipk', 'judul', 'kelompokKeahlian', 'pembimbing1', 'pembimbing2', 'proposal', 'transkrip', 'ppt'];
        foreach ($requiredFields as $field) {
            if (empty($data[$field])) {
                return ["success" => false, "message" => "Field '$field' wajib diisi."];
            }
        }

        $stmt = $this->db->prepare(
            "INSERT INTO submissions (nama, nim, email, telepon, semester, ipk, judul, kelompok_keahlian, pembimbing1, pembimbing2, proposal, transkrip, ppt, browser, ip_address) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        );

        if (!$stmt) {
            error_log("SQL Prepare Error: " . $this->db->error);
            return ["success" => false, "message" => "Gagal menyiapkan statement: " . $this->db->error];
        }

        $browser = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown Browser';
        $ip_address = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';

        $stmt->bind_param(
            "sssssssssssssss",
            $data['nama'], $data['nim'], $data['email'], $data['telepon'], $data['semester'], $data['ipk'], 
            $data['judul'], $data['kelompokKeahlian'], $data['pembimbing1'], $data['pembimbing2'], 
            $data['proposal'], $data['transkrip'], $data['ppt'], $browser, $ip_address
        );

        if ($stmt->execute()) {
            return ["success" => true, "message" => "Data berhasil disimpan!"];
        } else {
            error_log("SQL Execute Error: " . $stmt->error);
            return ["success" => false, "message" => "Gagal menyimpan data!"];
        }
    }

    // Fungsi untuk membaca data dari database
    public function getData() {
        $result = $this->db->query("SELECT * FROM submissions");

        if ($result) {
            return $result->fetch_all(MYSQLI_ASSOC); // Mengembalikan semua data dalam bentuk array
        } else {
            error_log("SQL Query Error: " . $this->db->error);
            return ["success" => false, "message" => "Gagal membaca data."];
        }
    }

    public function __destruct() {
        // Tidak perlu menutup koneksi karena sudah dikelola oleh Database
    }
}
?>
