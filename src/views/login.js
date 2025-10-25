 import { AuthForm } from "../components/authform.js";
 import axios from "axios";
 import { jwtDecode } from "jwt-decode";
 import { useNavigate } from "react-router-dom";

 // Define the Login page
 function Login() {
    const navigate = useNavigate();
    // Define the fields for the login form
    const loginFields = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' }
    ];

    // Handle login form submission
    const handleSubmit = async (data) => {
        try {
            const response = await axios.post('https://prueba-tecnica-to-do-app-0f94617e0f2f.herokuapp.com/auth/login', {
                email: data.email,
                password: data.password
            });

            // Store user token and navigate to home
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