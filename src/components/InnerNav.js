import React from "react";
import Button from "./Button";
import './css/innerNav.css';
const InnerNav = ({group,onclick}) => {
    const changeColor = {
        color:"#8A8A8A"
    }
  return (
   <div className="border-bottom inner-nav  sticky-top" style={{backgroundColor:"#fff",paddingTop:"1.5rem"}}>
     <div className="d-flex justify-content-between  mb-4" >
      <ul className="nav nav-underline ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            All Posts(32)
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={changeColor} href="#">
            Article
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={changeColor} href="#">
            Event
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={changeColor} href="#">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={changeColor} href="#">
            Job
          </a>
        </li>
      </ul>

      <div>
        <Button text="Write a Post" color="#EDEEF0" icon="fa-solid fa-caret-down"/>
        
        { 
          group ? <div className="btn" onClick={onclick} style={{ backgroundColor: "#fff",color:"#989899",fontWeight:"600",border:"2px solid #989899" }}><i class="fa-solid fa-right-from-bracket mx-2" style={{color:"#6A6A6B"}}></i>
          <span>Leave Group</span></div> : <div className="btn" onClick={onclick} style={{ backgroundColor: "blue",color:"#fff",fontWeight:"600" }}><i class="fa-solid fa-user-group mx-2" style={{color:"#fff"}}></i>
          <span>Join Group</span></div>
        }
       
      </div>
    </div>
   </div>
  );
};

export default InnerNav;
