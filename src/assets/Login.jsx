import { useState, useEffect } from "react";
import { setCookie, getCookie } from "../handleCookies"; // Import fungsi cookie

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Periksa status login saat pertama kali halaman dimuat
  useEffect(() => {
    const auth = getCookie("auth"); // Gunakan cookie untuk memeriksa login
    if (auth) {
      window.location.href = "/app"; // Arahkan ke App.jsx jika sudah login
    }
  }, []);

  // Fungsi login
  const login = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Username dan Password wajib diisi!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost/uas-pemweb/src/api/login.php?username=${encodeURIComponent(
          username
        )}&password=${encodeURIComponent(password)}`,
        { method: "GET" }
      );

      const result = await response.json();

      if (result.success) {
        setCookie("auth", JSON.stringify({ username }), 1); // Simpan auth dalam cookie (1 hari)
        localStorage.setItem("auth", JSON.stringify({ username })); // Simpan juga di localStorage jika diperlukan
        window.location.href = "/app"; // Arahkan ke App.jsx setelah login berhasil
      } else {
        setError(result.message); // Menampilkan pesan error dari server
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Terjadi kesalahan pada login.");
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/img/bg.jpg')`,
      }}
    >
      <form
        onSubmit={login}
        className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
      >
        <h1 className="text-2xl font-heading text-if-navy font-extrabold mb-2 text-center">
          Pendaftaran Seminar Proposal IF ITERA
        </h1>
        <h2 className="text-xl font-heading text-if-navy font-semibold mb-6 mt-1 text-center">
          LOGIN
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-if-navy"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-if-navy"
        />
        <button
          type="submit"
          className="w-full bg-if-navy text-white py-2 rounded-md hover:bg-blue-800 transition"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
