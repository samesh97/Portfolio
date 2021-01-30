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
            <div className="__container pt-5">
                <div className="container">
                    <p className="mb-5 exText" >Technologies</p>
                    <div className="row">
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Android}/>
                                <p className="card-title">Level - PRO</p>
                                <div className="card-body bg-secondary">
                                    <p className="card-text text-white ">
                                        - Fragments <br/>
                                        - Room Database <br/>
                                        - Broadcast Receivers<br/>
                                        - Sqlite Database<br/>
                                        - Shared Preferences <br/>


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Java}/>
                                <p className="card-title">Level - PRO</p>
                                <div className="card-body bg-secondary">
                                    <p className="card-text text-white ">
                                        - OOP Concepts <br/>
                                        - Threads<br/>
                                        - Exceptions <br/>
                                        - Collections <br/>
                                        - Generics <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Kotlin}/>
                                <p className="card-title">Level - Beginner</p>
                                <div className="card-body bg-secondary">
                                    <p className="card-text text-white ">
                                        - If Conditions<br/>
                                        - Loops <br/>
                                        - Switch <br/>
                                        - Some more <br/>
                                        - Some more <br/>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Flutter}/>
                                <p className="card-title">Level - Beginner</p>
                                <div className="card-body bg-secondary">
                                    <p className="card-text text-white ">
                                        - Responsive UI's <br/>
                                        - Dart Language <br/>
                                        - Async Functions <br/>
                                        - HTTP Requests <br/>
                                        - Image Pickers <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Firebase}/>
                                <p className="card-title">Level - Advanced</p>
                                <div className="card-body bg-secondary">
                                    <p className="card-text text-white ">
                                        - Realtime Database <br/>
                                        - Firebase Storage <br/>
                                        - Phone Auth <br/>
                                        - Email Auth <br/>
                                        - Push Notifications <br/>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        )
    }
}
export default Tech;