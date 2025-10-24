 import { AuthForm } from "../components/authform.js";
 import axios from "axios";
 import { jwtDecode } from "jwt-decode";
 import { useNavigate } from "react-router-dom";

 function Login() {
    const navigate = useNavigate();
    const loginFields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' }
    ];
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3001/auth/login', {
                email: data.email,
                password: data.password
            });

            const token = response.data.token;
            console.log(token);
            const userid = jwtDecode(token).id;
            localStorage.setItem('token', token);

            navigate(`/home/${userid}`);

        } catch (error) {
            console.error('Login failed:', error);
        }
    }

   return (
     <div className="auth-container">
       <AuthForm fields={loginFields} onSubmit={handleSubmit} buttonLabel="Log In" formTitle="Log In" />
     </div>
   );
 }
 
 export { Login };