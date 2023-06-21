import React from "react";
import '../assets/CSS/body.css'


class Body extends React.Component{
    render(){
        return(
            <div id="outer-circle">
                <button id='menu'>
                    Menu
                </button>
                <button id='forward'>
                    <i className="fa-solid fa-forward-fast"></i>
                </button>
                <button id='back'>
                <i class="fa-solid fa-forward-fast fa-rotate-180"></i>
                </button>
                <button id='play-pause'>
                    <i className="fa-solid fa-play"></i>
                    <i className="fa-solid fa-pause"></i>
                </button>
                <div id = "inner-circle">
                </div>
            </div>
        )
    }
}

export default Body;