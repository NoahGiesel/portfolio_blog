import React from 'react';  
import Nav from "./Nav";
import About from "./About";
import Blog from "./Blog";
import ItemDetail from "./ItemDetail";
import "./App.css";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (
    <Router >    
      <div >
        <Nav /> 
        <Switch>
          <Route path="/" exact component={Blog} />  
          <Route path="/about" exact component={About} />  
          <Route path="/blog/:id" component={ItemDetail}  />  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
