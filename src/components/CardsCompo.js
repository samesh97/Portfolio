import React from "react";
import '../css/CardsCompo.css';


import Image11 from '../images/11.png';
import Image22 from '../images/22.png';
import Image4 from '../images/4.png';
import Image5 from '../images/5.png';
import Image6 from '../images/6.png';
import Image7 from '../images/7.png';
import cideo2 from "../videos/video-5.mp4";
import cideo from "../videos/video-1.mp4";

class CardsCompo extends React.Component
{
    render() {

        return(

            <div className="container__ pt-5 pb-5" id="experiences">
                <div className="container">
                    <p className="mb-5 exText" >Recent work</p>
                    <div className="row">
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">

                                <video src={cideo2} autoPlay loop muted className="card_video"/>

                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and
                                            make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="card-img-top" src={Image11} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="card-img-top" src={Image22} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="card-img-top" src={Image5} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="card-img-top" src={Image6} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage">
                            <div className="card">
                                <img className="card-img-top" src={Image7} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardsCompo;