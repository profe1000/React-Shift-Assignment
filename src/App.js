import './App.css';
import './assets/css/w3.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Location from './components/Location/Location';
import TestComp from './components/TestComp/TestComp';

function App() {
  return (
    <div className='w3-light-grey'>
      <Navbar></Navbar>

      <div className='w3-content contentmargin w3-round'>

        <div className='w3-margin-top w3-hide'>
          <TestComp myname="Emmanuel" myage="12"></TestComp>
        </div>

        <div className='w3-margin-top'>
          <Profile></Profile>
        </div>

        <div className='w3-margin-top'>
          <Location></Location>
        </div>

      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
