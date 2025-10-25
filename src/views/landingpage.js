import { Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Define the Landingpage component
function Landingpage() {
  const navigate = useNavigate();
  // Check if user is logged in
  const token = localStorage.getItem('token');
  
  // If logged in, redirect to home page
  if (token) {
    try {
      const userId = jwtDecode(token).id;
      return <Navigate to={`/home/${userId}`} replace />;
    } catch (error) {
      // If token is invalid, remove it and stay on landing page
      localStorage.removeItem('token');
    }
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