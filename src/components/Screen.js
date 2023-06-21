import React from "react";
import '../assets/CSS/screen.css'
class Screen extends React.Component{
    render(){
        return(
            <>
                <div id="screen">
                    <div id="left">
                        This is left Screen
                    </div>
                    <div id ="right">
                        This is Right screen
                    </div>
                </div>
            </>     
            )
        }
    }
    
    export default Screen;