import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Navbar';
import Slider from './Slider';
import Data from './Data';
import Perfume from './Perfume';
import Footer from './Footer';
class App extends React.Component{
    render(){
        return (
        <div className="app">
        <Navbar khucb={Data}/>
        <Slider />
        <Perfume/>
        <Footer />
            
        </div>
        );
        
    }
}
export default App;