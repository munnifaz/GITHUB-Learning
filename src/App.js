
import './App.css';
import Navbar from './components/Navbar';
// import Page1 from './components/Page1';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Registration from './components/Registration';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
import Fullpage from './components/Fullpage';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Fullpage/>} />
      <Route path="/Registration" element={<Registration/>} />
      {/* <Route path="/page2" element={<Page2/>} />
      <Route path="/page3" element={<Page3/>} />
      <Route path="/" element={<Page1/>} /> */}

       </Routes>
       </Router>
     </div>
  );
}

export default App;
