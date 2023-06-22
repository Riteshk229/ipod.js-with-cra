import '../assets/CSS/body.css'


function Body ({handleMenu,handleSelect}){
        return(
            <div id="outer-circle">
                <button id='menu'  onClick={handleMenu}>
                    Menu
                </button>
                <button id='forward'>
                    <i className="fa-solid fa-forward-fast" ></i>
                </button>
                <button id='back'>
                <i class="fa-solid fa-forward-fast fa-rotate-180"></i>
                </button>
                <button id='play-pause'>
                    <i className="fa-solid fa-play"></i>
                    <i className="fa-solid fa-pause"></i>
                </button>
                <div id = "inner-circle" onClick={handleSelect}>
                </div>
            </div>
        )
}

export default Body;