import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../assets/firebaseConfig";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formKey, setFormKey] = useState(Date.now()); 

  
  useEffect(() => {
    if (location.state?.reset) {
      setEmail("");
      setPassword("");
      setFormKey(Date.now()); 
    }
  }, [location]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/meditation"); 
    } catch (err) {
      console.error("Errore di login:", err.code, err.message);
      setError("Credenziali non valide");
    }
  };

  return (
    <div className="login-container">
      <form
        key={formKey}
        className="login-form"
        onSubmit={handleLogin}
        autoComplete="off"
      >
        <h2>Login</h2>
        {error && <p className="error-msg">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />

        <button type="submit">Accedi</button>

        <p style={{ textAlign: "center" }}>
          Non hai un account? <Link to="/register" class="register-link">Registrati</Link>
        
        </p>
      </form>
    </div>
  );
};

export default Login;
