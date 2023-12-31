import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="header navbar navbar-expand-lg bg-blur text-light">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu bg-blur p-0">
                                    <li><Link className="dropdown-item py-2 text-light" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item py-2 text-light" to="/">Another action</Link></li>
                                    <li><Link className="dropdown-item py-2 text-light" to="/">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/auth/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/auth/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;