import '../assets/CSS/App.css';
import '../assets/CSS/screen.css';
import Body from './Body';
import { useEffect,useState } from 'react';
import ZingTouch from 'zingtouch';

let index= 0,
currentAngle = 0,
selectItem,
visibility = true;

function App() {
  const [list,setList] = useState([
    {
      listItem: "Songs",
      state: true,
      id:0,
    },
    {
      listItem: "Games",
      state: false,
      id:1
    },{
      listItem: "Settings",
      state: false,
      id:2
    },
    {
      listItem: "Playlists",
      state: false,
      id:3
    },
    {
      listItem: "Coverflow",
      state: false,
      id:4
    },
  ]);

  let [activeItem, setActiveItem] = useState([]);

  useEffect(() => {
    let buttonWheel = document.getElementById("outer-circle");
    let active = new ZingTouch.Region(buttonWheel);
    // console.log(active);
    active.bind(buttonWheel,'rotate',function(e){
       currentAngle += Math.floor(e.detail.distanceFromLast);
       console.log(currentAngle);
      if (currentAngle > 3) {
        setList((prevList) => {
          return prevList.map((item) => {
            console.log(currentAngle, index);
            if (item.id === index) {
              return { ...item, state : true };
            } else {
              return { ...item, state : false };
            }
          });
        });
        index++;
        currentAngle = 0;

        if(index === list.length){
          index = 0;
        }
      } else if (currentAngle < -5){
        index--;
        if(index < 0){
          index = list.length;
        }
        setList((prevList) => {
          return prevList.map((item) => {
            if (item.id === index) {
              return { ...item, state: true };
            } else {
              return { ...item, state : false };
            }
          });
        });
        currentAngle = 0;
      }

    },false);
  }, []);

  const handleSelect = () => {
    selectItem = list.filter((item) => item.state === true);
    console.log("state ",selectItem);
    const title = selectItem[0].listItem;
    if (title === "Songs") {
      setActiveItem({
        ...selectItem,
        src: 'https://i.pinimg.com/236x/14/b1/a7/14b1a7356a1e7e84e96e36eebe417597.jpg',
      });
    } else if (title === "Settings") {
      setActiveItem({
        ...selectItem,
        src: "https://i.pinimg.com/564x/94/e3/33/94e333d76c900410d73cd329e863f72b.jpg",
      });
    } else if (title === "Coverflow") {
      setActiveItem({
        ...selectItem,
        src: "https://i.pinimg.com/564x/fd/80/40/fd8040ffbf2c03ad6d459bd1a0d16610.jpg",
      });
    } else if (title === "Games") {
      setActiveItem({
        ...selectItem,
        src: "https://i.pinimg.com/564x/a5/a2/87/a5a2872bd75b42fe1cf6cdba41a32743.jpg",
      });
    } else if (title === "Playlists") {
      setActiveItem({
        ...selectItem,
        src: "https://i.pinimg.com/564x/a1/a9/d7/a1a9d7616491cbf5c60d8c556b7d3514.jpg",
      });
    }
    visibility = false;
  };

  const handleMenu = () => {
    visibility = true;
    setActiveItem([]);
  };


  return (
    <>
    <div className='App'>
    <div className="screen">
        {/* side-menu section */}
        <div
          style={!visibility ? { display: "none" } : {}}
          className="side-menu"
        >
          {list.map((item) => (
            <li key={item.id} className={item.state ? "active" : ""}>
              {item.listItem}
            </li>
          ))}
        </div>

        {/* display section */}
        <div className="display">
          <h2>{visibility ? "" : activeItem[0].listItem}</h2>
          {activeItem.src && <img src={visibility ? "" : activeItem.src} />}
        </div>
      </div>

      <div className='ipod-actions'>
        <Body handleSelect={handleSelect} handleMenu={handleMenu}/>
      </div>
    </div>
    </>
  );
}

export default App;
