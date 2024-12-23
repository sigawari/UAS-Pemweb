# 📋 **UAS Pemrograman Web 2024/2025**

Proyek Ujian Akhir Semester (UAS) untuk mata kuliah Pemrograman Web 2024/2025. Proyek ini mencakup berbagai aspek pengembangan web, termasuk pemrograman sisi klien, pemrograman sisi server, manajemen basis data, dan pengelolaan state Website.

Nama: Sikah Nubuahtul Ilmi

NIM: 122140208

Kelas: Pemrograman Web - RB

---

## 🌐 **Hosting Website**
Website ini telah dihosting menggunakan **Netlify**, layanan hosting yang cepat dan sederhana untuk Website berbasis frontend. Akses Website melalui tautan berikut:

[**Klik di sini untuk membuka Website**](https://pendaftaran-sempro-uaspemweb.netlify.app/)

> **Catatan:**
> - Username: "admin"
> - Password: "password"
> - Jika kamu menemukan pesan "Page Not Found" saat mengakses rute seperti `/app`, silakan kembali ke URL utama: `https://pendaftaran-sempro-uaspemweb.netlify.app`.

### **Langkah-langkah Hosting Website Web**

#### **1. Langkah-langkah yang Dilakukan untuk Hosting**
1. **Membangun Proyek:**
   - Menjalankan perintah `npm run build` untuk menghasilkan folder `dist` yang berisi file build statis dari Website.
2. **Deploy ke Netlify:**
   - Menghubungkan repositori GitHub ke Netlify melalui opsi "New Site from Git".
   - Menentukan `npm run build` sebagai perintah build dan `dist` sebagai direktori publik untuk hosting.

#### **2. Memilih Penyedia Hosting**
Saya memilih **Netlify** karena alasan berikut:
- **Kemudahan Penggunaan:** Proses deploy sederhana dengan integrasi GitHub langsung.
- **Performa Tinggi:** Netlify menggunakan CDN global yang memastikan Website diakses dengan cepat di seluruh dunia.
- **Fitur Tambahan:** Dukungan untuk file `_redirects` yang sangat penting untuk Website berbasis client-side routing seperti React.
- **Gratis untuk Proyek Kecil:** Cukup untuk mendukung kebutuhan pengembangan saya.

#### **3. Memastikan Keamanan Website Web**
Beberapa langkah yang dilakukan untuk meningkatkan keamanan Website:
- **HTTPS Otomatis:** Netlify menyediakan sertifikat SSL gratis sehingga Website berjalan di HTTPS.
- **Validasi Input:** Semua input pengguna divalidasi di sisi klien (JavaScript) dan sisi server (PHP) untuk mencegah injeksi SQL dan XSS.
- **Restriksi Akses API:** Endpoint API hanya menerima permintaan dari domain tertentu dengan validasi token.
- **Pengelolaan Cookie yang Aman:** Cookie disetel dengan atribut `Secure` dan `HttpOnly` (jika memungkinkan).

#### **4. Konfigurasi Server**
Konfigurasi yang diterapkan untuk mendukung Website:
- **Routing Rute Website:**
  - Menggunakan file `_redirects` untuk menangani semua permintaan rute ke `index.html`.
- **Konfigurasi Backend di XAMPP:**
  - Folder `api` diletakkan di direktori `htdocs` untuk mendukung endpoint PHP.
  - Database MySQL diatur di phpMyAdmin untuk menyimpan data pengguna.
- **Build Optimasi:**
  - Website React dioptimalkan dengan perintah build (`npm run build`) untuk menghasilkan file statis yang cepat diakses.

---

## 🚀 **Cara Menjalankan Proyek Secara Lokal**

### **1. Kloning Repositori**
```bash
git clone https://github.com/username/nama-repositori.git
```
> Gantilah `username` dan `nama-repositori` dengan informasi GitHub kamu.

### **2. Masuk ke Direktori Proyek**
```bash
cd nama-repositori
```

### **3. Instal Dependensi**
```bash
npm install
```

### **4. Jalankan Website**
Untuk menjalankan Website di server pengembangan lokal:
```bash
npm run dev
```
Akses Website di browser melalui URL: `http://localhost:5173`.

### **5. Konfigurasi Server Lokal untuk Backend**
1. Pastikan kamu memiliki server seperti XAMPP atau WAMP.
2. Salin folder `api` ke direktori server lokal kamu, misalnya: `htdocs` (untuk XAMPP).
3. Impor file `database.sql` ke basis data baru bernama `uas_pemweb`.

---

## 📝 **Komponen Penilaian**

### **1. 🎨 Client-side Programming**

#### **1.1 Manipulasi DOM dengan JavaScript**
- **Form Input dengan Minimal 4 Elemen:**
  - Formulir pada Website memiliki elemen teks, checkbox, radio button, dan dropdown.
- **Menampilkan Data dari Server ke Tabel HTML:**
  - Data yang diambil dari server ditampilkan dalam tabel menggunakan manipulasi DOM.

#### **1.2 Event Handling**
- **Implementasi Event Berbeda:**
   - **`onChange` Event Handling**
   - **`onSubmit` Event Handling**
   - **`onClick` Event Handling**
   - **Custom Event Handling untuk Validasi**
   - **Event Handling untuk Dropdown dan Checkbox**  \**Dynamic Validation via Event Handling**  
- **Validasi Input di Client-side:**
  - Validasi dilakukan menggunakan JavaScript sebelum data dikirim ke server.

### **2. 🖥️ Server-side Programming**

#### **2.1 Pengelolaan Data dengan PHP**
- **Metode POST pada Formulir:**
  - Data dikirim ke server menggunakan metode POST.
- **Parsing dan Validasi Data di Server:**
  - Data yang diterima diparsing dan divalidasi untuk mencegah injeksi.
- **Penyimpanan Data ke Basis Data:**
  - Data disimpan ke basis data bersama informasi tambahan seperti jenis browser dan alamat IP pengguna.

#### **2.2 Objek PHP Berbasis OOP**
- **Kelas PHP dengan Dua Metode:**
  - Kelas `User` digunakan untuk mengelola data pengguna, dengan metode seperti `createUser()` dan `getUser()`.

### **3. 🗃️ Database Management**

#### **3.1 Pembuatan Tabel Database**
- Tabel `users` dibuat dengan struktur untuk menyimpan data pengguna.

#### **3.2 Konfigurasi Koneksi Database**
- Koneksi ke database dilakukan melalui file konfigurasi `config.php`.

#### **3.3 Manipulasi Data pada Database**
- Operasi CRUD (Create, Read, Update, Delete) diterapkan pada tabel `users`.

### **4. 🔄 State Management**

#### **4.1 State Management dengan Session**
- Informasi pengguna disimpan dalam session untuk autentikasi.
- Session diinisialisasi menggunakan `session_start()`.

#### **4.2 Pengelolaan State dengan Cookie dan Browser Storage**
![Screenshot (4734)](https://github.com/user-attachments/assets/86bd1fc8-730f-4c0e-9509-d859775e31dc)
![Screenshot (4733)](https://github.com/user-attachments/assets/3c6f64c2-99d9-42c0-aa84-7b4007a60f3a)
![image](https://github.com/user-attachments/assets/9fe2e3dd-fddd-4f29-a77e-6625f1ca17b8)
- **Pengelolaan Cookie:**
  - Fungsi JavaScript dibuat untuk menetapkan, mendapatkan, dan menghapus cookie pengguna.
- **Browser Storage:**
  - Informasi tertentu disimpan di `localStorage` untuk meningkatkan pengalaman pengguna.

---

## 📷 **Gambar-gambar Website**

### **Tampilan Login**
![image](https://github.com/user-attachments/assets/898dd86f-6cc8-4cdb-bb0e-76b24bf5d686)

### **Tampilan Form Pendaftaran**
![image](https://github.com/user-attachments/assets/52a0a0ef-5211-4111-80d3-7f2ce466ff40)

### **Tabel Data Pendaftaran**
![image](https://github.com/user-attachments/assets/04c1a307-e9f9-4997-b452-7c82a8330c8d)
