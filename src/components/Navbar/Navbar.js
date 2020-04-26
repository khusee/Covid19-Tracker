import React from 'react'
import './Navbar.css'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="top">
            <div className="nav">
                <div className="row">
                    <div className="col-m-12">
                        <nav className="navbar navbar-expand-lg" role="navigation">
                            <a className="navbar-brand" href="#"><span>Cov</span>id-19</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/symptom">Symptoms</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/prevention">Prevention</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/search">Search</NavLink>
                                    </li>
                                </ul>
                                <div className="login">
                                    <a href="login.html">Login</a>
                                    <span>/</span>
                                    <a href="register.html">Register</a>
                                </div>
                                <div className="nav-button">
                                    <NavLink to=""><button>Emergency contact</button></NavLink>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar