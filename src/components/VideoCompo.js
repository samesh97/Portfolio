import React from "react";
import '../css/VideoCompo.css';
import MyImage from '../images/my.png';
import { MdEmail,MdContactPhone } from "react-icons/md";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";


import { ImWhatsapp } from "react-icons/im";



import Background from '../images/background.jpg';

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
                <img src={Background} className="large_video"/>

                <div className="container _container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="d-flex justify-content-center">
                                <img src={MyImage} className="MyImage mt-5 mb-1" alt="..."  id="home"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div className="d-flex justify-content-center">
                            <p className="text-center text-white txt mb-3 mt-3">Hi, I'm Samesh.<br/> I design & build
                                Mobile Applications</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <div className="d-flex justify-content-center">
                            <MdContactPhone className="mb-5 mt-3 icon__" onClick={ () => this.copyToClip("0787339335","Copied the Mobile Number")}/>
                            <div className="whatsapp_container"><ImWhatsapp className="mb-5 mt-3 icon____" onClick={ () => this.copyToClip("0787339335","Copied the Whatsapp Number")}/></div>
                            <MdEmail className="mb-5 mt-3 icon___" onClick={ () => this.copyToClip("buddiksamesh1@gmail.com","Copied the Email Address")}/>
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