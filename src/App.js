import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigate from './components/Nav';
import  Contacto  from './views/Contacto';
import  Home  from './views/Home';


function App() {
  return (
    
      <BrowserRouter>
       <Navigate/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>

      </BrowserRouter>
      
    
  );
}

export default App;
