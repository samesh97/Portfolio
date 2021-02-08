import React from "react";
import '../css/VideoCompo.css';
import MyImage from '../images/my.png';
import { MdEmail,MdContactPhone } from "react-icons/md";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";


import { ImWhatsapp } from "react-icons/im";

import AboutMe from "./AboutMe";




import Background from '../images/background.jpg';
import {Link} from "react-scroll";

class Video extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            snackBarOpen: false,
            snackBarMessage : '',
        };
    }

    snackBarClose = (event) => {
        this.setState({
           snackBarOpen : false
        });
    }


    render() {

        return(
            <div className="container_">
                {/*<video src={cideo} autoPlay loop muted className="large_video"/>*/}
                {/*<img src={Background} className="large_video"/>*/}
                <div className="large_video"/>


                <div className="container">
                    <div className="row flex-row-reverse">

                        <div className="col image_con d-flex justify-content-center align-items-center">

                           <img src={MyImage} className="MyImage mb-5 mt-3" alt="..."  id="home"/>

                        </div>

                        <div className="col-sm">

                            <div className="row ml-5 mr-5">

                                <p className="what_im_doing_text">Hi, I'm Samesh. I design & build
                                    Mobile Applications</p>
                            </div>

                            <div className="row ml-5 mr-5">
                            <AboutMe/>
                            </div>
                            <div className="row mt-5 ml-5 mr-5 learn_more_row">
                                <Link activeClass="active" to="experiences" spy={true} smooth={true} duration={1000} offset={-90}>
                                    <button type="button" className="btn btn-light learn_more">Learn More</button>
                                </Link>
                            </div>


                        </div>
                    </div>


                </div>





                <Snackbar anchorOrigin={{vertical : 'bottom',horizontal : 'left'}}
                open={this.state.snackBarOpen}
                autoHideDuration={3000}
                onClose={() => this.snackBarClose()}
                message={<span id="message-id">{this.state.snackBarMessage}</span>}
                action={[
                    <IconButton key="close" arial-label="Close" color="inherit" onClick={() => this.snackBarClose()}>x</IconButton>
                ]}/>



            </div>

        )
    }
    copyToClip =(textToCopy,message) => {

        navigator.clipboard.writeText(textToCopy);

        this.setState({
            snackBarOpen : true,
            snackBarMessage : message
        })
    }
}

export default Video;