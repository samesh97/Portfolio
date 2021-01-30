import React from "react";
import '../css/Footer.css';
import {FaGithubSquare,FaLinkedin,FaFacebook} from "react-icons/fa";

class Footer extends React.Component
{
    render() {

        return(

            <div className="container-fluid container___" id="contact">

                <div className="container____ pb-5 pt-5">
                    <div className="d-flex justify-content-center">
                        <div className="text-white iconDiv">
                            <a href="https://github.com/samesh97" target="_blank">
                                <FaGithubSquare className="icon"/>
                                <span className="footer_span">Github</span>
                            </a>
                        </div>
                        <div className="text-white iconDiv">
                            <a href="https://www.linkedin.com/in/samesh-buddhika-alahakoon-23065919b/" target="_blank">
                                <FaLinkedin className="icon"/>
                                <span className="footer_span">LinkedIn</span>
                            </a>
                        </div>
                        <div className="text-white iconDiv">
                            <a href="https://www.facebook.com/samesh.buddhika/" target="_blank">
                                <FaFacebook className="icon"/>
                                <span className="footer_span">Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;