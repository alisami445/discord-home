import React from "react"
import './App.css';
import "./component/Navbar"
import Tete from "./component/Navbar"
import "./component/Title"
import Title from "./component/Title";
import"./component/DecriHeader"
import DecriHeader from "./component/DecriHeader";
import {Route ,BrowserRouter as Router , Switch} from "react-router-dom";
import "./component/About";
import About from "./component/About";
import"./component/Contact";
import Contact from "./component/Contact";
import "./component/Signin"
import Signin from "./component/Signin"
import "./component/Contenu"
function App() {
  return (
   <>
   <Router>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/Signin" component={Signin}/>
    </Router>
   </>
  );
}
const Home = () =>(
  <div>
     <div className="headerr">
    <Tete/>
    <Title/>
    <DecriHeader/>
    </div>
    <div className="header-opacity">
     </div>
  </div>
);

export default App;
