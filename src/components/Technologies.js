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
                                {/*<p className="card-title">Level - PRO</p>*/}
                                {/*<div className="card-body bg-secondary">*/}
                                {/*    <p className="card-text text-white ">*/}

                                {/*        <ul>*/}
                                {/*            <li>Fragments</li>*/}
                                {/*            <li>Room Database</li>*/}
                                {/*            <li>Broadcast Receivers</li>*/}
                                {/*            <li>Sqlite Database</li>*/}
                                {/*            <li>Shared Preferences</li>*/}
                                {/*        </ul>*/}

                                {/*    </p>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Java}/>
                                {/*<p className="card-title">Level - PRO</p>*/}
                                {/*<div className="card-body bg-secondary">*/}
                                {/*    <p className="card-text text-white ">*/}

                                {/*        <ul>*/}
                                {/*            <li>OOP Concepts</li>*/}
                                {/*            <li>Threads</li>*/}
                                {/*            <li>Exceptions</li>*/}
                                {/*            <li>Collections</li>*/}
                                {/*            <li>Generics</li>*/}
                                {/*        </ul>*/}
                                {/*    </p>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Kotlin}/>
                                {/*<p className="card-title">Level - Beginner</p>*/}
                                {/*<div className="card-body bg-secondary">*/}
                                {/*    <p className="card-text text-white ">*/}

                                {/*        <ul>*/}
                                {/*            <li>If Conditions</li>*/}
                                {/*            <li>Loops</li>*/}
                                {/*            <li>Switch</li>*/}
                                {/*            <li>Some more</li>*/}
                                {/*            <li>Some more</li>*/}
                                {/*        </ul>*/}
                                {/*    </p>*/}
                                {/*</div>*/}

                            </div>
                        </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Flutter}/>
                                {/*<p className="card-title">Level - Beginner</p>*/}
                                {/*<div className="card-body bg-secondary">*/}
                                {/*    <p className="card-text text-white ">*/}

                                {/*        <ul>*/}
                                {/*            <li>Responsive UI's</li>*/}
                                {/*            <li>Dart Language</li>*/}
                                {/*            <li>Async Functions</li>*/}
                                {/*            <li>HTTP Requests</li>*/}
                                {/*            <li>Image Pickers</li>*/}
                                {/*        </ul>*/}
                                {/*    </p>*/}
                                </div>
                            </div>
                        <div className="col-sm zoomImage mb-3">
                            <div className="card">
                                <img className="tech_icon" src={Firebase}/>
                                {/*<p className="card-title">Level - Advanced</p>*/}
                                {/*<div className="card-body bg-secondary">*/}
                                {/*    <p className="card-text text-white ">*/}

                                {/*        <ul>*/}
                                {/*            <li>Realtime Database</li>*/}
                                {/*            <li>Firebase Storage</li>*/}
                                {/*            <li>Phone Auth</li>*/}
                                {/*            <li>Email Auth</li>*/}
                                {/*            <li>Push Notifications</li>*/}
                                {/*        </ul>*/}
                                {/*    </p>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        </div>


                    </div>
                </div>



        )
    }
}
export default Tech;