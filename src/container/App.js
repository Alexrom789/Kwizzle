import React, { Component } from 'react';
import './App.css';
import SideNavbar from '../components/SideNavbar'
import MainContainer from './MainContainer';
import {
  HashRouter
} from "react-router-dom";
//

//

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <SideNavbar/>
          <MainContainer/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
