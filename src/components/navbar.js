import { Outlet, useNavigate } from 'react-router-dom';

// Define the Navbar component
function Navbar() {
    const navigate = useNavigate();

    // Handle user logout deleting token and redirecting to landing page
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-links-right">
                    <button className="navbar-link" onClick={handleLogout}>
                        Log Out
                    </button>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export { Navbar };