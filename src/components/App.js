import '../assets/CSS/App.css';
import Screen from './Screen';
import Body from './Body';

function App() {
  return (
    <>
    <div className='App'>
      <div className='display'>
      <Screen />
      </div>
      <div className='ipod-actions'>
        <Body/>
      </div>
    </div>
    </>
  );
}

export default App;
