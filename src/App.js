import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fungsi login
  async function login(username, password) {
    const response = await fetch(
      "http://localhost/uas-pemweb/src/api/login.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    const result = await response.json();
    if (result.success) {
      localStorage.setItem("auth", JSON.stringify({ username }));
      setIsLoggedIn(true);
      alert(result.message);
    } else {
      alert(result.message);
    }
  }

  // Fungsi logout
  async function logout() {
    const response = await fetch(
      "http://localhost/uas-pemweb/src/api/logout.php",
      {
        method: "POST",
      }
    );

    const result = await response.json();
    if (result.success) {
      localStorage.removeItem("auth");
      setIsLoggedIn(false);
      alert(result.message);
    }
  }

  // Fungsi untuk memeriksa login
  function checkLogin() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  // Periksa login saat pertama kali komponen dimuat
  React.useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      <h1>Login App</h1>
      {!isLoggedIn ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => login(username, password)}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {JSON.parse(localStorage.getItem("auth")).username}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
