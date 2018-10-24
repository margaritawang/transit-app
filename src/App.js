import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import Dashboard from './components/maparea.jsx'
import Footer from './components/footer.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}

export default App;
