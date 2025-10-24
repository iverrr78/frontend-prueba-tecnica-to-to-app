import { Outlet, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    //const token = localStorage.getItem('token');

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