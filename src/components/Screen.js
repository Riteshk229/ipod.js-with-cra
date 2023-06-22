import React from "react";
import '../assets/CSS/screen.css'
function Screen (props){
    const {list, activeItem} = props;
    console.log(activeItem);
    if(Object.keys(activeItem)===0){
        return(
            <>
            </>
        )
    }
    else{
        const {listItem,src} = activeItem;
        console.log(listItem,src);
        return(
            <>
                <div id="screen">
                        <div id="left" >
                        {list.map((item)=> (
                            <li key={item.id} className={item.state ? "active" : ""}>
                                {item.listItem}
                                <i className="fa-solid fa-greater-than fa-2xs"></i>
                            </li>
                        ))}
                        </div>
                    {/* ): ( */}
                        <div id ="right">
                            {}
                        </div>
                </div>
            </>     
            );
    }     
    }
    
    export default Screen;