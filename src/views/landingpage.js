import { Navigate, useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
    if (token) {
        return <Navigate to="/home" replace />;
    }
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to To-Do App</h1>
        <p className="landing-subtitle">Organize your tasks efficiently and boost your productivity</p>
        <div className="landing-buttons">
          <button className="landing-btn primary" onClick={() => navigate('/signup')}>
            Get Started
          </button>
          <button className="landing-btn secondary" onClick={() => navigate('/login')}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export { Landingpage };