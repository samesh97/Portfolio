import React from "react";
import '../css/VideoCompo.css';
import cideo from '../videos/video-1.mp4';
import MyImage from '../images/my.png';

class Video extends React.Component
{
    render() {

        return(
            <div className="container_">
                <video src={cideo} autoPlay loop muted className="large_video"/>

                <div className="container _container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="d-flex justify-content-center">
                                <img src={MyImage} className="MyImage mt-5 mb-3" alt="..."  id="home"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div className="d-flex justify-content-center">
                            <p className="text-center text-white font-weight-bold txt mb-3">Hi, I'm Samesh.<br/> I design & build
                                Mobile Applications</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-dark btnDownloadCv mb-5 mt-3">Download My CV</button>
                        </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
export default Video;