import React from "react";
import '../css/CardsCompo.css';

import Image11 from '../images/11.png';
import Image22 from '../images/22.png';
import Image5 from '../images/5.png';
import Image6 from '../images/6.png';
import Image7 from '../images/7.png'
import Image33 from '../images/33.png';
import Image4 from '../images/4.png';
import video from '../videos/video-5.mp4';

import fullScreenImage from '../images/full_screen.png';

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

            source : Image11,
            type : '',
            clickedPosition : 0

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

        const ImageList = [
            Image11,
            Image22,
            Image5,
            Image6,
            Image7,
            Image33,
            Image4

        ];

        const ViewList = ImageList.map((image,pos) => {

                if(this.state.clickedPosition === pos)
                {
                    return <div class="grid-item selectedItem" onClick={() => this.onCardClicked(image,"IMAGE",pos)}>
                                <img className="card-image" src={image}/>   
                           </div>
                }
                else
                {
                    return <div class="grid-item" onClick={() => this.onCardClicked(image,"IMAGE",pos)}>
                                <img className="card-image" src={image}/>   
                           </div>
                }

        });



        return(

           

            <div class="cards-container">


                <div class="grid-view" id="style-1">
                    
                    {ViewList}
                    
                </div>
                <div class="div-full-tech-image">
                    <img src={this.state.source} class="large-preview-image"></img>
                </div>

            </div>
        )
    }
    onCardClicked = (source,type,pos) => {

        this.setState({
            source : source,
            type : type,
            clickedPosition : pos
        });
    }
   
}
export default CardsCompo;