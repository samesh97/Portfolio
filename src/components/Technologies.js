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

        return(
            <div className="__container pt-5 pb-5">
                <div className="container">
                    <p className="mb-5 exText" >Technologies</p>
                    <div className="row">
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Android}/>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Java}/>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Kotlin}/>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Flutter}/>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Firebase}/>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}
export default Tech;