import React ,{useState,useEffect}from 'react'
import './Nav.css'


function Nav() {
    const[show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        return()=>{
            window.removeEventListener("scroll");
        };
             

    },[]);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div class="brand">
          <h1><span>L</span>earn  <span>To</span>  <span>C</span>ook</h1>
          </div>
          </div>
          
            
    );
}


export default Nav;
