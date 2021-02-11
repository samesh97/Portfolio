import React from "react";
import '../css/Footer.css';
import {FaGithubSquare,FaLinkedin,FaFacebook} from "react-icons/fa";

class Footer extends React.Component
{
    render() {

        return(

            <div className="container-fluid container___" id="contact">

                <div className="container____ pt-5">
                    <div className="d-flex justify-content-center">
                        <div className="text-white iconDiv">
                            <a href="https://github.com/samesh97" target="_blank">
                                <FaGithubSquare className="icon"/>
                                {/*<span className="footer_span">Github</span>*/}
                            </a>
                        </div>
                        <div className="text-white iconDiv">
                            <a href="https://www.linkedin.com/in/samesh-buddhika-alahakoon-23065919b/" target="_blank">
                                <FaLinkedin className="icon"/>
                                {/*<span className="footer_span">LinkedIn</span>*/}
                            </a>
                        </div>
                        <div className="text-white iconDiv">
                            <a href="https://www.facebook.com/samesh.buddhika/" target="_blank">
                                <FaFacebook className="icon"/>
                                {/*<span className="footer_span">Facebook</span>*/}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <span className="email_text">buddikasamesh1@gmail.com</span>

                </div>
                <div className="row">

                    <span className="phone_number_text">+94 78 733 9335</span>

                </div>


                <div className="row pb-4">

                    <span className="all_right_reserved_text">Copyright © 2021 Samesh Buddhika, All rights reserved.</span>

                </div>

            </div>
        )
    }
}

export default Footer;