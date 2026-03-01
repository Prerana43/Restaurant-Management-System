import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await API.post("/auth/login", form);

    console.log("FULL RESPONSE:", response);
    console.log("DATA:", response.data);

    const data = response.data;

    login(data);

    if (data?.user?.role === "admin") navigate("/admin");
    else if (data?.user?.role === "staff") navigate("/staff");
    else navigate("/dashboard");

  } catch (error) {
    console.log("LOGIN ERROR:", error.response?.data || error.message);
  }
};

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Create Account</Link>
    </div>
  );
};

export default Login;