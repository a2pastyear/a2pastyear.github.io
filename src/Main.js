import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Physics";

import Chemistry from "./Chemistry";
import Maths from "./Maths";



class Main extends Component {
 render() {
   return (
     <HashRouter>
       <div>
         <h1>CIE A2 Past Year</h1>
         <ul className="header">
           <li id="home"><NavLink exact to="/">Physics</NavLink></li>
           
           <li><NavLink to="/chemistry">Chemistry</NavLink></li>
           <li><NavLink to="/maths">Maths</NavLink></li>
         </ul>
         <div className="content">
            <Route exact path="/" component={Home}/>
            
            <Route path="/chemistry" component={Chemistry}/>
            <Route path="/maths" component={Maths}/>
         </div>
       </div>
    </HashRouter>
   );
 }
}

export default Main;