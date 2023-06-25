import {Accordion} from "./Accordion"
import { Dropdown } from "./Dropdown"
import { Offcanvas } from "./Offcanvas";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css' 


function App() {
  return (
    <div >
    <nav>
    <Offcanvas />
    <Dropdown />
    </nav>
    <Accordion />

  
    </div>

  )
}

export default App
