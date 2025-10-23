import { Link, Outlet, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-links-right">
                    {!token ? (
                        <>
                            <Link to="/signup" className="navbar-link">
                                Sign Up
                            </Link>
                            <Link to="/login" className="navbar-link" style={{ marginLeft: '16px' }}>
                                Log In
                            </Link>
                        </>
                    ) : (
                        <button className="navbar-link" onClick={handleLogout}>
                            Log Out
                        </button>
                    )}
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export { Navbar };