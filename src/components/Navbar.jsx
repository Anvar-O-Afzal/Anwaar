import React,{Component} from 'react';
import Data from'./Data';
import {Link} from 'react-router-dom';


 const Navbar = (props)=> {
    var response =props.khucb.map((obj,index)=>{
      return(
        <div>
       <div className="navbar">
       <img src="./images/logo.jpg" style={{height:"80px", width:"100px"}} className="logo"></img>
       <ul className="home">
         <li><a>{obj.navC[0]}</a></li>
         <li><a>{obj.navC[1]}</a></li>
         <li><a>{obj.navC[2]}</a></li>
         <li><a>{obj.navC[3]}</a></li>
         <li><a>{obj.navC[4]}</a></li>
         </ul>
       {/* <div className="img">
       </div> */}
       </div>

          </div>  
          
        
        )
    }) 
        return (
          <div>{response}</div>
        )
    }
  
export default Navbar;