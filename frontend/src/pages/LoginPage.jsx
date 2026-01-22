import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authService";
import { CircleAlert } from 'lucide-react';
import InputBox from "../components/inputBox/InputBox";  // ✅ import
import Alert from "../components/alert/Alert";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await loginUser({ email, password });
      localStorage.setItem("token", data.access_token);
      navigate("/dashboard");
    } catch (err) {
      setError(err); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login_outter_div">
      <div className="login_body">
        <div className="text-center">
          <h1 className="login_heading">Sign In</h1>
          <p className="login_sub_heading">Welcome back! Log in with your credentials.</p>
        </div>

        {!error && (
          <div className="login_alert">
            <CircleAlert size={23} className="circleAlert"/>
            <p>Use <span>admin@gulf.com</span> username and <span>Admin@123</span> password for demo access.</p>
          </div>
        )}

        {error && (<Alert message={error} type='error' />)}

        <form onSubmit={handleLogin} className="space-y-5">
          <InputBox
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@gulf.com"
          />
          <InputBox
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          <button
            disabled={loading}
            className="w-full bg-blue-700 text-white p-3 rounded-lg font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-[0.98] disabled:bg-blue-300"
          >
            {loading ? "Verifying..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
