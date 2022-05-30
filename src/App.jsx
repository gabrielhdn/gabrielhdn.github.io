import React from 'react';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main-content"></main>
      </>
    );
  }
}

export default App;
