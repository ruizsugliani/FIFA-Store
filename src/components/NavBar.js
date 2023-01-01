import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid d-flex">
                <a className="navbar-brand" href="#">
                    <img src="https://www.newscaststudio.com/wp-content/uploads/2022/04/fifa-plus-logo.png" alt="FIFA LOGO" height="50" />    
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catalogue
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Official Match Ball</a></li>
                                <li><a className="dropdown-item" href="#">FWC Merch</a></li>
                                <li><a className="dropdown-item" href="#">Nations</a></li>
                                <li><a className="dropdown-item" href="#">Kits</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;