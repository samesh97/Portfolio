import React from "react";
import '../css/Footer.css';
import {FaGithubSquare,FaLinkedin,FaFacebook} from "react-icons/fa";

class Footer extends React.Component
{
    render() {

        return(

            <div className="container-fluid container___" id="contact">

                <div className="container____">
                   
                      
                        <div className="">
                            <a href="https://www.linkedin.com/in/samesh-buddhika-alahakoon-23065919b/" target="_blank">
                                <FaLinkedin className="icon" color="#495057"/>
                        
                            </a>
                        </div>
                        <div className="">
                            <a href="https://github.com/samesh97" target="_blank">
                                <FaGithubSquare className="icon" color="#495057"/>
                            
                            </a>
                        </div>
                        <div className="">
                            <a href="https://www.facebook.com/samesh.buddhika/" target="_blank">
                                <FaFacebook className="icon" color="#495057"/>
                                
                            </a>
                        </div>
                   
                </div>
            


                {/* <div className="row pb-4">

                    <span className="all_right_reserved_text">Copyright © 2021 Samesh Buddhika.</span>

                </div> */}

            </div>
        )
    }
}

export default Footer;