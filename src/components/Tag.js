import React from "react";

import '../css/Tag.css';

class Tag extends React.Component
{
    constructor(props) {
        super(props);

        this.state ={
            list : props.list
        }

    }



    render() {

        const list = this.state.list.map(item => {

            return <div className="tag_container">
                    <p className="tag_text">{item}</p>
                    </div>

        });

        return(
            <div className="container">
                <div className="row">
                        {list}
                </div>
            </div>
        )
    }
}
export default Tag;