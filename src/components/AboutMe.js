import React from "react";
import '../css/AboutMe.css';

class AboutMe extends React.Component
{
    render() {

        return(

            <div id="About" className="container_____ pb-5">
                <div className="row about_row">

                    <p className="mb-4 exText aboutText mt-5" >About Me</p>
                </div>
                <div className="row about_row">
                      <span className="span_about">I am currently following my degree at Sri Lanka Institute of Information Technology (SLIIT)
                            in computing faculty.<br/>I am in 3rd year 2nd semester. I’m following my degree
                            specialized in Software Engineering.<br/>I have developed many apps for Google playstore for
                            almost 3 years and gained lots of experiences by doing an internship at Bhasha Lanka Pvt Ltd (Helakuru) for 6 months.
                            <br/>I have developed professional apps like photo editors, location trackers and many more.
                      </span>
                </div>
                </div>

        )
    }
}
export default AboutMe;