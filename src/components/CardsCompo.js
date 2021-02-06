import React from "react";
import '../css/CardsCompo.css';

import Image11 from '../images/11.png';
import Image22 from '../images/22.png';
import Image5 from '../images/5.png';
import Image6 from '../images/6.png';
import Image7 from '../images/7.png'
import video from '../videos/video-5.mp4';

import FullScreenDialog from "./FullScreenDialog";
import Tag from '../components/Tag';

import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BsArrowsFullscreen} from "react-icons/bs";



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


        const singlishAppList = [
            "Android",
            "Java",
            "XML",
            "String Matching"
        ];

        const foodAppList = [
            "Android",
            "Java",
            "XML",
            "Sqlite Database",
            "Shared Preferences"
        ];

        const sinhalaAppList = [
            "Android",
            "Java",
            "XML",
            "Sqlite Database",
            "Shared Preferences",
            "Firebase Realtime Database",
            "Firebase Storage",
            "Firebase Push Notification",
            "Firebase Phone Auth"

        ];

        const quoteMakerAppList = [
            "Android",
            "Java",
            "XML",
            "Room Database",
            "Shared Preferences"

        ];

        const fitnessAppList = [
            "Flutter",
            "UI",
            "Dart"
        ];

        const hotelAppList = [
            "Flutter",
            "UI",
            "Dart"
        ];



        return(

            <div className="container__ pt-5 pb-5" id="experiences">
                <div className="container">
                    <p className="mb-5 exText" >Recent work</p>
                    <div className="row">


                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"/>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"/>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"/>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">

                                    <div className="col zoomImage mb-3">
                                        <div className="card card__">


                                            <video src={video} autoPlay loop muted className="card_imge"/>

                                            <p className="card-title">Android Singlish Translator</p>

                                            <div className="card-body">
                                                <p className="card-text">
                                                    <Tag list={singlishAppList}/>
                                                    <BsArrowsFullscreen className="full_screen_icon"  onClick={() => this.onCardClicked(video,"VIDEO")}/>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">

                                            <div className="col-sm zoomImage mb-3">
                                                <div className="card card__">


                                                    <img className="card-img-top card_imge" src={Image11} alt="Card image cap"/>


                                                    <p className="card-title">Android Food App</p>
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                           <Tag list={foodAppList}/>
                                                            <BsArrowsFullscreen className="full_screen_icon"  onClick={() => this.onCardClicked(Image11,"IMAGE")}/>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                </div>

                                <div className="carousel-item">

                                            <div className="col-sm zoomImage mb-3">
                                                <div className="card card__">


                                                    <img className="card-img-top card_imge" src={Image22} alt="Card image cap"/>


                                                    <p className="card-title">Android Photo Editor</p>
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                          <Tag list={sinhalaAppList}/>
                                                            <BsArrowsFullscreen className="full_screen_icon"
                                                                                onClick={() => this.onCardClicked(Image22,"IMAGE")}/>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>


                                </div>

                                <div className="carousel-item">

                                    <div className="col-sm zoomImage mb-3">
                                                    <div className="card card__">

                                                        <img className="card-img-top card_imge" src={Image5} alt="Card image cap"/>




                                                        <p className="card-title">Android Quote Maker</p>
                                                        <div className="card-body">
                                                            <p className="card-text">
                                                                <Tag list={quoteMakerAppList}/>
                                                                <BsArrowsFullscreen className="full_screen_icon"
                                                                                    onClick={() => this.onCardClicked(Image5,"IMAGE")}/>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                </div>

                                <div className="carousel-item">

                                            <div className="col-sm zoomImage mb-3">
                                                <div className="card card__">


                                                    <img className="card-img-top card_imge" src={Image6} alt="Card image cap"/>



                                                    <p className="card-title">Flutter Fitness App UI</p>
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            <Tag list={fitnessAppList}/>
                                                            <BsArrowsFullscreen className="full_screen_icon"
                                                                                onClick={() => this.onCardClicked(Image6,"IMAGE")}/>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                </div>


                                <div className="carousel-item">

                                            <div className="col-sm zoomImage">
                                                <div className="card card__">


                                                    <img className="card-img-top card_imge" src={Image7} alt="Card image cap"/>



                                                    <p className="card-title">Flutter Hotel Reservation UI</p>
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            <Tag list={hotelAppList}/>
                                                            <BsArrowsFullscreen className="full_screen_icon"
                                                                                onClick={() => this.onCardClicked(Image7,"IMAGE")}/>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                </div>


                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"/>
                                <span className="sr-only">Next</span>
                            </a>
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