# 📋 **UAS Pemrograman Web 2024/2025**

Selamat datang di repositori proyek Ujian Akhir Semester (UAS) untuk mata kuliah Pemrograman Web 2024/2025. Proyek ini mencakup berbagai aspek pengembangan web, termasuk pemrograman sisi klien, pemrograman sisi server, manajemen basis data, dan manajemen state.

## 🌐 **Link Hasil Hosting**
[Klik di sini untuk melihat hasil aplikasi](#)

---

## 🚀 **Cara Menjalankan Proyek**

1. **Kloning Repositori**  
   ```bash
   git clone https://github.com/username/nama-repositori.git
   ```
   Gantilah `username` dan `nama-repositori` dengan informasi GitHub Anda.

2. **Masuk ke Direktori Proyek**  
   ```bash
   cd nama-repositori
   ```

3. **Konfigurasi Server Lokal (Opsional)**
   - Jika Anda ingin menjalankan aplikasi di server lokal, pastikan Anda memiliki server lokal seperti XAMPP atau WAMP yang terinstal.
   - Salin semua file proyek ke direktori root server lokal Anda (misalnya, `htdocs` untuk XAMPP).

4. **Impor Basis Data**
   - Buka phpMyAdmin atau alat manajemen basis data lainnya.
   - Buat basis data baru, misalnya `uas_pemweb`.
   - Impor file `database.sql` yang terdapat dalam repositori ke basis data tersebut.

5. **Konfigurasi Koneksi Basis Data**
   - Buka file `config.php` atau file konfigurasi serupa.
   - Sesuaikan parameter koneksi basis data sesuai dengan pengaturan lokal Anda:
     ```php
     define('DB_HOST', 'localhost');
     define('DB_USER', 'root');
     define('DB_PASS', '');
     define('DB_NAME', 'uas_pemweb');
     ```

6. **Menjalankan Aplikasi secara Lokal**
   - Buka browser dan akses `http://localhost/nama-repositori`.

---

## 📝 **Kriteria Penilaian**

### 1. 🎨 Client-side Programming (30%)

#### 1.1 🖌️ Manipulasi DOM dengan JavaScript (15%)
- **Form Input dengan Minimal 4 Elemen**
  - Telah dibuat form dengan elemen:
    - Teks
    - Checkbox
    - Radio button
    - Dropdown
- **Menampilkan Data dari Server ke Tabel HTML**
  - Data yang diambil dari server ditampilkan dalam tabel menggunakan JavaScript untuk manipulasi DOM.

#### 1.2 🎯 Event Handling (15%)
- **Implementasi 3 Event Berbeda**
  - Event `onClick` untuk tombol submit.
  - Event `onChange` untuk input teks.
  - Event `onSubmit` untuk validasi form.
- **Validasi Input dengan JavaScript**
  - Setiap input divalidasi di sisi klien sebelum dikirim ke server untuk memastikan integritas data.

### 2. 🖥️ Server-side Programming (30%)

#### 2.1 🗄️ Pengelolaan Data dengan PHP (20%)
- **Metode POST pada Formulir**
  - Formulir menggunakan metode POST untuk mengirim data ke server.
- **Parsing dan Validasi Data di Server**
  - Data yang diterima diparsing dan divalidasi menggunakan PHP untuk mencegah injeksi dan kesalahan data.
- **Penyimpanan Data ke Basis Data**
  - Data disimpan ke dalam basis data bersama dengan informasi jenis browser dan alamat IP pengguna.

#### 2.2 🧩 Objek PHP Berbasis OOP (10%)
- **Pembuatan Objek PHP dengan Dua Metode**
  - Dibuat kelas `User` dengan metode `createUser()` dan `getUser()` untuk mengelola data pengguna.

### 3. 🗃️ Database Management (20%)

#### 3.1 🏗️ Pembuatan Tabel Database (5%)
- **Tabel `users`**
  - Tabel dibuat dengan struktur yang sesuai untuk menyimpan data pengguna.

#### 3.2 🔌 Konfigurasi Koneksi Database (5%)
- **File Konfigurasi**
  - Koneksi ke basis data dikonfigurasi dalam file `config.php` dengan parameter yang tepat.

#### 3.3 ✏️ Manipulasi Data pada Database (10%)
- **Operasi CRUD**
  - Implementasi operasi Create, Read, Update, dan Delete pada tabel `users` menggunakan PHP.

### 4. 🔄 State Management (20%)

#### 4.1 🔑 State Management dengan Session (10%)
- **Inisialisasi Session**
  - Menggunakan `session_start()` untuk memulai sesi pengguna.
- **Penyimpanan Informasi Pengguna dalam Session**
  - Informasi seperti username disimpan dalam variabel sesi untuk keperluan autentikasi.

#### 4.2 🍪 Pengelolaan State dengan Cookie dan Browser Storage (10%)
- **Fungsi untuk Menetapkan, Mendapatkan, dan Menghapus Cookie**
  - Dibuat fungsi JavaScript untuk mengelola cookie pengguna.
- **Penggunaan Browser Storage**
  - Informasi tertentu disimpan secara lokal menggunakan `localStorage` untuk meningkatkan pengalaman pengguna.

---

## 🌐 **Hosting Aplikasi dengan Netlify**

### 1. **Deploy ke Netlify**
   - Buka Netlify dan buat akun jika belum memiliki.
   - Pilih opsi `New Site from Git`.
   - Hubungkan repositori GitHub Anda dengan Netlify.
   - Tunggu hingga proses deploy selesai.

### 2. **Konfigurasi Build**
   - Pada bagian Build Settings, atur command dan directory build:
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`

### 3. **Tambahkan Environment Variables (Jika Diperlukan)**
   - Buka `Site Settings > Environment Variables`.
   - Tambahkan variabel yang diperlukan seperti URL API atau kunci rahasia.

### 4. **Dapatkan URL Hosting**
   - Setelah deploy selesai, Anda akan mendapatkan URL seperti `https://namasite.netlify.app`.
