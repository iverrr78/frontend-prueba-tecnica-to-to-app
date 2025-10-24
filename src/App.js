import { Navbar } from './components/navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landingpage } from './views/landingpage.js';
import { Login } from './views/login.js';
import { Register } from './views/register.js';
import { Home } from './views/home.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>

        <Route path="signup" element={<Register/>}/>
        
        <Route path="login" element={<Login/>}/>
        
        <Route path="/home/:userId" element ={<Navbar/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
