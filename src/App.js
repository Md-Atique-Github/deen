import { Com1 } from './Com1';
import './App.css';
import { NavBar } from './NavBar';
// import YourConpmponent from './Com2';
import Com3 from './Com3';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <NavBar/>
    {/* <YourComponent/> */}
    <div className='container my-3'>
    {/* <Switch>
          <Route path="/">
            <Com1 heading="ConverteR"/>
          </Route>
          <Route path="/scroll"> 
          <Com3/>
          </Route>
          
        </Switch> */}
        
      <Routes>
        <Route path="/" element={<Com1 heading="Converter" />} />
        <Route path="/scrool" element={<Com3 />} />
      </Routes>
    
    </div>
    </Router>
    </>
  );
}

export default App;
