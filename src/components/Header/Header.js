import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand fs-2 fw-bold" href="/">BOI GHOR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav fs-5 fw-bold">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About us</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;