import "./App.css";
import Confetti from "./Confetti";
import { useEffect, useState } from "react";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  // 🔌 Llamada al microservicio
  useEffect(() => {
    fetch("http://localhost:3001/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="App">
      <Confetti />

      <header className="App-header">
        <h1>Usuarios 🚀</h1>

        {/* 📋 Lista de usuarios */}
        <div style={{ marginTop: "20px" }}>
          {usuarios.length === 0 ? (
            <p>Cargando usuarios...</p>
          ) : (
            usuarios.map((user) => (
              <div key={user.id} style={{ marginBottom: "10px" }}>
                <strong>{user.nombre}</strong> - {user.email}
              </div>
            ))
          )}
        </div>
      </header>
    </div>
  );
};

export default App;