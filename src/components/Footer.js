import React from "react";
import '../css/Footer.css';
import {FaGithubSquare,FaLinkedin,FaFacebook,FaPhoneSquare,FaRegEnvelope} from "react-icons/fa";

class Footer extends React.Component
{
    render() {

        return(

            <div className="container-fluid container___" id="contact">

                <div className="container____ pb-5 pt-5">
                    <div className="d-flex justify-content-center">
                        <div className="text-white iconDiv">
                            <a href="https://github.com/samesh97">
                                <FaGithubSquare className="icon"/>
                                <span className="footer_span">Github</span>
                            </a>
                        </div>
                        <div className="text-white iconDiv">
                            <a href="https://www.linkedin.com/in/samesh-buddhika-alahakoon-23065919b/">
                                <FaLinkedin className="icon"/>
                                <span className="footer_span">LinkedIn</span>
                            </a>
                        </div>
                        <div className="text-white iconDiv">
                            <a href="https://www.facebook.com/samesh.buddhika/">
                                <FaFacebook className="icon"/>
                                <span className="footer_span">Facebook</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/*<div className="w-100 pb-5 text-white">*/}
                {/*    <div className="d-flex justify-content-center">*/}
                {/*        <FaPhoneSquare className="icon"/>*/}
                {/*        <span className="text-white footer_span"> 0787339335</span>*/}
                {/*        <FaRegEnvelope className="icon ml-4"/>*/}
                {/*        <span className="text-white footer_span"> buddiksamesh1@gmail.com</span>*/}
                {/*    </div>*/}

                {/*</div>*/}

            </div>
        )
    }
}

export default Footer;