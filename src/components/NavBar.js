import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/NavBar.css';
import { Link } from 'react-scroll';

class NavBar extends React.Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-light nv">
                <a className="navbar-brand text-white  pr-5" href="/">PORTFOLIO</a>
                <button className="navbar-toggler " type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon buttonSpan"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto pt-3 pb-3">
                        <li className="nav-item active pr-2">
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000} offset={-210}>
                                <a className="nav-link text-white">Home<span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item active pr-2">
                           <Link activeClass="active" to="experiences" spy={true} smooth={true} duration={1000} offset={-90}>
                               <a className="nav-link text-white">Portfolio<span className="sr-only">(current)</span></a>
                           </Link>
                        </li>
                        <li className="nav-item active pr-2">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                                <a className="nav-link text-white">Contact<span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item active pr-2">
                            <Link activeClass="active" to="About" spy={true} smooth={true} duration={1000} offset={-90}>
                                <a className="nav-link text-white">About<span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;