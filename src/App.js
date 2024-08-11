import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Header } from './Component/Header';
import { Eduction } from './Component/Eduction';
import { Certification } from './Component/Certification';
import { Project } from './Component/Project';
import { Live_Project } from './Component/Live_Project';
import { About_Us } from './Component/About_Us';
import { Home } from './Component/Home';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/> 
              <Route path="/Education" element={<Eduction/>}/>
              <Route path="/Certifications" element={<Certification/>}/>
              <Route path="/Projects" element={<Project/>}/>
              <Route path="/Live-Projects" element={<Live_Project/>}/>
              <Route path="/About-Us" element={<About_Us/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
