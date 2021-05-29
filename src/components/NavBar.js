import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/NavBar.css';
import { Link } from 'react-scroll';
import Home from "../pages/Home";
import {FaPhoneSquareAlt} from 'react-icons/fa';

class NavBar extends React.Component
{


    constructor(props) {
        super(props);

        const HOME_PAGE = 0;
        const EXPERIENCE_PAGE = 1;
        const TECHNOLOGY_PAGE = 2;
        const CONTACT_PAGE = 3;
        
 


        this.state = {
            selectedTab : HOME_PAGE,
            HOME_PAGE : HOME_PAGE,
            EXPERIENCE_PAGE : EXPERIENCE_PAGE,
            TECHNOLOGY_PAGE : TECHNOLOGY_PAGE,
            CONTACT_PAGE : CONTACT_PAGE,
            
        };

        

    }


    render()
    {
        return(

            <nav className="navbar navbar-expand-lg navbar-light nv">
                <a className="navbar-brand text-white  pr-5" href="/">SOFTWARE ENGINEER</a>


                <button className="navbar-toggler " type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon buttonSpan"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto pt-3 pb-3">
                        <li className="nav-item active pr-2">
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000} offset={-210} >
                                {
                                    this.state.selectedTab === this.state.HOME_PAGE
                                    && <a className="nav-link nav-link_underlined">Home<span className="sr-only">(current)</span></a>
                                }
                                {
                                    this.state.selectedTab !== this.state.HOME_PAGE
                                    && <a className="nav-link" onClick={() => this.changeSelectedTab(this.state.HOME_PAGE)}>Home<span className="sr-only">(current)</span></a>
                                }

                            </Link>
                        </li>
                        <li className="nav-item active pr-2">
                           <Link activeClass="active" to="experiences" spy={true} smooth={true} duration={1000} offset={-90}>
                               {
                                   this.state.selectedTab === this.state.EXPERIENCE_PAGE
                                   && <a className="nav-link nav-link_underlined">Experience<span className="sr-only">(current)</span></a>
                               }
                               {
                                   this.state.selectedTab !== this.state.EXPERIENCE_PAGE
                                   && <a className="nav-link" onClick={() => this.changeSelectedTab(this.state.EXPERIENCE_PAGE)}>Experience<span className="sr-only">(current)</span></a>
                               }



                           </Link>
                        </li>
                        <li className="nav-item active pr-2">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                                {
                                    this.state.selectedTab === this.state.TECHNOLOGY_PAGE
                                    &&  <a className="nav-link nav-link_underlined">Tech Stack<span className="sr-only">(current)</span></a>
                                }
                                {
                                    this.state.selectedTab !== this.state.TECHNOLOGY_PAGE
                                    &&  <a className="nav-link" onClick={() => this.changeSelectedTab(this.state.TECHNOLOGY_PAGE)}>Tech Stack<span className="sr-only">(current)</span></a>
                                }


                            </Link>
                        </li>
                        <div className="div-contact">
                            <FaPhoneSquareAlt className="phone-icon" color="#6c757d"/>
                            <span>| +94 78 733 9335</span>
                        </div>
                        
                        
                        {/*<li className="nav-item active pr-2">*/}
                        {/*    <Link activeClass="active" to="About" spy={true} smooth={true} duration={1000} offset={-90}>*/}

                        {/*        {*/}
                        {/*            this.state.selectedTab === this.state.ABOUT_PAGE*/}
                        {/*            &&  <a className="nav-link text-white nav-link_underlined">About<span className="sr-only">(current)</span></a>*/}
                        {/*        }*/}
                        {/*        {*/}
                        {/*            this.state.selectedTab !== this.state.ABOUT_PAGE*/}
                        {/*            &&  <a className="nav-link text-white" onClick={() => this.changeSelectedTab(this.state.ABOUT_PAGE)}>About<span className="sr-only">(current)</span></a>*/}
                        {/*        }*/}


                        {/*    </Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        )
    }
    changeSelectedTab = (value) => {


        this.props.onNavItemClick(value);

        this.setState({
           selectedTab : value
        });
    }
    onFromParent = (value) =>
    {
        this.setState({
            selectedTab : value
         });
    }

    
}

export default NavBar;