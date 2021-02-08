import React from 'react';
import NavBar from "../components/NavBar";
import VideoCompo from '../components/VideoCompo';
import CardsCompo from "../components/CardsCompo";
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import Technologies from '../components/Technologies';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min";

import '../css/Home.css';


class Home extends React.Component
{
    render()
    {
        return(
            <div className="root_container">
                <NavBar/>
                <div className="row">
                    <VideoCompo/>
                    <CardsCompo/>
                    <Technologies/>
                    <Footer/>
                </div>

            </div>

        )
    }
}

export default Home;