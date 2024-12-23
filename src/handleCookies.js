import Swal from "sweetalert2";

// Fungsi untuk menyimpan cookie
export const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;

  // Tampilkan konfirmasi perubahan cookie
  console.log(`Cookie "${name}" berhasil disimpan dengan nilai: "${value}"`);
  Swal.fire(
    "Success",
    `Cookie "${name}" berhasil ditambahkan dengan nilai "${value}"!`,
    "success"
  );
};

// Fungsi untuk mendapatkan cookie
export const getCookie = (name) => {
  return document.cookie.split("; ").reduce((result, current) => {
    const [key, val] = current.split("=");
    return key === name ? decodeURIComponent(val) : result;
  }, "");
};

// Fungsi untuk menghapus cookie
export const deleteCookie = (name) => {
  setCookie(name, "", -1); // Mengatur cookie dengan nilai kosong dan waktu kadaluarsa negatif
  Swal.fire("Deleted", `Cookie "${name}" berhasil dihapus!`, "info");
};

// Fungsi untuk menyimpan ke localStorage
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  Swal.fire(
    "Success",
    `Data "${key}" berhasil disimpan ke localStorage!`,
    "success"
  );
};

// Fungsi untuk mendapatkan data dari localStorage
export const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  if (value) {
    Swal.fire(
      "Found",
      `Data "${key}" berhasil ditemukan di localStorage!`,
      "success"
    );
    return JSON.parse(value);
  } else {
    Swal.fire(
      "Not Found",
      `Data "${key}" tidak ditemukan di localStorage!`,
      "error"
    );
    return null;
  }
};

// Fungsi untuk menghapus data dari localStorage
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
  Swal.fire(
    "Deleted",
    `Data "${key}" berhasil dihapus dari localStorage!`,
    "info"
  );
};

// Fungsi untuk menyimpan ke sessionStorage
export const setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
  Swal.fire(
    "Success",
    `Data "${key}" berhasil disimpan ke sessionStorage!`,
    "success"
  );
};

// Fungsi untuk mendapatkan data dari sessionStorage
export const getSessionStorage = (key) => {
  const value = sessionStorage.getItem(key);
  if (value) {
    Swal.fire(
      "Found",
      `Data "${key}" berhasil ditemukan di sessionStorage!`,
      "success"
    );
    return JSON.parse(value);
  } else {
    Swal.fire(
      "Not Found",
      `Data "${key}" tidak ditemukan di sessionStorage!`,
      "error"
    );
    return null;
  }
};

// Fungsi untuk menghapus data dari sessionStorage
export const removeSessionStorage = (key) => {
  sessionStorage.removeItem(key);
  Swal.fire(
    "Deleted",
    `Data "${key}" berhasil dihapus dari sessionStorage!`,
    "info"
  );
};
