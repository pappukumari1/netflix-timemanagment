//import logo from './logo.svg';
import './App.css';
// import Demo from './components';
// import DemoCarousel from './components/netFlixe/Carousel';
// import Navbar from './components/netFlixe/navbar/navbar';
// import Slide from './components/netFlixe/Slide/slide';
// import TimeManagment from './components/Timemangment';
// import Weather from './components/weather/weather';
// import toprated from 'D:/react/crud-demo/src/components/netFlixe/jsonFile/toprated.json';
// import popular from 'D:/react/crud-demo/src/components/netFlixe/jsonFile/popular.json';
// import highest from 'D:/react/crud-demo/src/components/netFlixe/jsonFile/HIGHEST.json';
// import reales from 'D:/react/crud-demo/src/components/netFlixe/jsonFile/reales.json';
// import trending from 'D:/react/crud-demo/src/components/netFlixe/jsonFile/TRENDING .json';
// import Footer from './components/netFlixe/Footer';
import BootDemo from './components/bootstrapDemo';
import TimeManagment from './components/Timemangment';
function App() {
  return (
    <div className="App">
      {/* <div style={{backgroundColor:"black"}}> */}

        {/* **************************                       ************************* */}
    {/* <Demo/> */}
    <TimeManagment/>
    {/* <Weather/> */}
    {/* **************************                      **************************** */}
    {/* <Slide/>
    < DemoCarousel name="POPULAR" list={popular} />
    < DemoCarousel name="TOP RATED"  list={toprated}/>
    < DemoCarousel name="HIGHEST GROSSING"  list={highest}/>
    < DemoCarousel name="NEW RELEASES"  list={reales}/>
    < DemoCarousel name="TRENDING NOW"  list={trending}/>
    <Footer/> */}
    {/* </div> */}
    {/* <BootDemo/> */}
    </div>
  );
}

export default App;
