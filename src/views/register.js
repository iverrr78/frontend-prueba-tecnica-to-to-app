 import { AuthForm } from "../components/authform.js";
 import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const signupFields = [
    { name: 'username', label: 'Username', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' }
    ];

    const handleSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3001/auth/register', {
                username: data.username,
                email: data.email,
                password: data.password
            });
            setError('');
            navigate('/');
        } catch (error) {
            setError(error.response?.data?.message ||'Registration failed. Please try again.');
        }
    }
  return (
    <div className="auth-container">
       <div>
         <AuthForm fields={signupFields} onSubmit={handleSubmit} buttonLabel="Sign Up" formTitle="Sign Up" />
         {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
       </div>
    </div>
  );
}

export { Register };