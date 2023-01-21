import logo from '../images/fifa_store_logo.jpg'
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="FIFA LOGO" height="50" className="rounded border"/>    
                    </a>
                    <CartWidget />
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item border-bottom ms-3">
                                <a className="nav-link active" aria-current="page" href="/">World Cup Winners</a>
                            </li>
                            <li className="nav-item border-bottom ms-3">
                                <a className="nav-link active" aria-current="page" href="/">FIFA World Cup 2022</a>
                            </li>
                            <li className="nav-item border-bottom ms-3">
                                <a className="nav-link active" aria-current="page" href="/">Football Shirts</a>
                            </li>
                            <li className="nav-item border-bottom ms-3">
                                <a className="nav-link active" aria-current="page" href="/">Balls</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;