import React from "react";
import '../css/CardsCompo.css';

import Image11 from '../images/11.png';
import Image22 from '../images/22.png';
import Image5 from '../images/5.png';
import Image6 from '../images/6.png';
import Image7 from '../images/7.png'
import video from '../videos/video-5.mp4';

import FullScreenDialog from "./FullScreenDialog";



class CardsCompo extends React.Component
{



    constructor(props) {
        super(props);

        this.state = {

            isFullScreen : false,
            source : '',
            type : ''

        };
    }



    render() {

        return(

            <div className="container__ pt-5 pb-5" id="experiences">
                <div className="container">
                    <p className="mb-5 exText" >Recent work</p>
                    <div className="row">
                        <div className="col-sm zoomImage mb-3" onClick={() => this.onCardClicked(video,"VIDEO")}>
                            <div className="card">

                                <video src={video} autoPlay loop muted className="card_video"/>

                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and
                                            make up the bulk of the card's content.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3" onClick={() => this.onCardClicked(Image11,"IMAGE")}>
                            <div className="card">
                                <img className="card-img-top" src={Image11} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3" onClick={() => this.onCardClicked(Image22,"IMAGE")}>
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
                        <div className="col-sm zoomImage mb-3" onClick={() => this.onCardClicked(Image5,"IMAGE")}>
                            <div className="card">
                                <img className="card-img-top" src={Image5} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3" onClick={() => this.onCardClicked(Image6,"IMAGE")}>
                            <div className="card">
                                <img className="card-img-top" src={Image6} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and
                                        make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage" onClick={() => this.onCardClicked(Image7,"IMAGE")}>
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
                {
                    this.state.isFullScreen && <FullScreenDialog cancelled={() => this.onCancel()} source={this.state.source} type={this.state.type}/>
                }


            </div>
        )
    }
    onCardClicked = (source,type) => {

        this.setState({
            isFullScreen : true,
            source : source,
            type : type
        });
    }
    onCancel = () => {

        this.setState({
            isFullScreen : false,
            source : '',
            type : ''
        });
    }
}
export default CardsCompo;