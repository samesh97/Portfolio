import React,{ useRef } from 'react';
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

    myInput;
    NavBar;

    constructor(props) {
        super(props);

         this.myInput = React.createRef();
         this.NavBar = React.createRef();
       

        const HOME_PAGE = 0;
        const EXPERIENCE_PAGE = 1;
        const TECHNOLOGY_PAGE = 2;
        const CONTACT_PAGE = 3;
        
 


        this.state = {
            selectedTab : HOME_PAGE,
            HOME_PAGE : HOME_PAGE,
            EXPERIENCE_PAGE : EXPERIENCE_PAGE,
            TECHNOLOGY_PAGE : TECHNOLOGY_PAGE,
            CONTACT_PAGE : CONTACT_PAGE,
            
        };

    }

    render()
    {
        
       
        return(
            <div className="root_container">
                <NavBar onNavItemClick={(value) => this.itemChanged(value)} ref={this.NavBar}/>
                <div className="main-container">








                <div id="home" class="carousel slide" data-interval="false">
                
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <VideoCompo onNavItemClick={(value) => this.itemChanged(value)}/>
                        </div>
                        <div class="carousel-item">
                            <CardsCompo/>
                        </div>
                        <div class="carousel-item">
                            <Technologies/>
                        </div>
                </div>
                    <a class="carousel-control-next" href="#home" role="button" data-slide-to={this.state.selectedTab} ref={this.myInput} >
                       
                    </a>
                
                </div>

                </div>

            </div>

        )
    }
    
    itemChanged = (value) =>
    {

        this.setState
        (
            { selectedTab : value },
            () => {
                this.myInput.current.click();
                this.NavBar.current.onFromParent(value);
            }
          );
    }
}

export default Home;