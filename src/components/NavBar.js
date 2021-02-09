import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/NavBar.css';
import { Link } from 'react-scroll';
import Home from "../pages/Home";

class NavBar extends React.Component
{


    constructor(props) {
        super(props);

        const HOME_PAGE = 1;
        const EXPERIENCE_PAGE = 2;
        const CONTACT_PAGE = 3;
        const ABOUT_PAGE = 4;


        this.state = {
            selectedTab : HOME_PAGE,
            HOME_PAGE : 1,
            EXPERIENCE_PAGE : 2,
            CONTACT_PAGE : 3,
            ABOUT_PAGE : 4,
        };

    }


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
                                {
                                    this.state.selectedTab === this.state.HOME_PAGE
                                    && <a className="nav-link text-white nav-link_underlined">Home<span className="sr-only">(current)</span></a>
                                }
                                {
                                    this.state.selectedTab !== this.state.HOME_PAGE
                                    && <a className="nav-link text-white" onClick={() => this.changeSelectedTab(this.state.HOME_PAGE)}>Home<span className="sr-only">(current)</span></a>
                                }

                            </Link>
                        </li>
                        <li className="nav-item active pr-2">
                           <Link activeClass="active" to="experiences" spy={true} smooth={true} duration={1000} offset={-90}>
                               {
                                   this.state.selectedTab === this.state.EXPERIENCE_PAGE
                                   && <a className="nav-link text-white nav-link_underlined">Experience<span className="sr-only">(current)</span></a>
                               }
                               {
                                   this.state.selectedTab !== this.state.EXPERIENCE_PAGE
                                   && <a className="nav-link text-white" onClick={() => this.changeSelectedTab(this.state.EXPERIENCE_PAGE)}>Experience<span className="sr-only">(current)</span></a>
                               }



                           </Link>
                        </li>
                        <li className="nav-item active pr-2">
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
                                {
                                    this.state.selectedTab === this.state.CONTACT_PAGE
                                    &&  <a className="nav-link text-white nav-link_underlined">Contact<span className="sr-only">(current)</span></a>
                                }
                                {
                                    this.state.selectedTab !== this.state.CONTACT_PAGE
                                    &&  <a className="nav-link text-white" onClick={() => this.changeSelectedTab(this.state.CONTACT_PAGE)}>Contact<span className="sr-only">(current)</span></a>
                                }


                            </Link>
                        </li>
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

        this.setState({
           selectedTab : value
        });
    }
}

export default NavBar;