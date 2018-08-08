import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import LeftMenu from './LeftMenu';

// import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <Header />
            <LeftMenu menuItemCount='33'/>
            <Intro />
          </div>
        );
    }
}

export default App;
