import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import MainContent from './MainContent'

class App extends Component{
  render(){
  return (
    <div className="App">
      <Header/>
      <MainContent/>
    </div>
  );
 }
}
export default App;
