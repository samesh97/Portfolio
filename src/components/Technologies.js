import React from "react";
import '../css/Technologies.css';

import Android from '../images/android.png';
import Java from '../images/java.png';
import Kotlin from '../images/kotlin.png';
import Flutter from '../images/flutter.png';
import Firebase from '../images/firebase.png';

class Tech extends React.Component
{

    



    render() {

        const TechImageList =[
            Android,
            Java,
            Kotlin,
            Flutter,
            Firebase
        ];

        const TechListView = TechImageList.map((image,pos) => {

            return <div class="tech-item">
                <img src={image} class="card-image-tech"></img>
            </div>

        });

        return(
            
            <div class="tech-container-main">
                <div class="tech-item-container">
                     {TechListView}
                </div>
                
            </div>
        )
    }
}
export default Tech;