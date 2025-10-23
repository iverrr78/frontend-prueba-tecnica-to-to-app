 import { AuthForm } from "../components/authform.js";
 import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
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
            console.log(response);
            navigate('/');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    }
  return (
    <div>
       <h1>Signup Page</h1>
       <AuthForm fields={signupFields} onSubmit={handleSubmit} buttonLabel="Log In" />
    </div>
  );
}

export { Register };