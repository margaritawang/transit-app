import React, { Component } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Maparea from './components/maparea.jsx'
import Footer from './components/footer.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Maparea />
        <Footer />
      </div>
    );
  }
}

export default App;
