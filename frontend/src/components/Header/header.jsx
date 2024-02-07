import React from 'react'
import "./header.css"
import  homebgimage  from "../../assets/bgimage.jpg"
const Header = () => {
  return (
    <div className="header">
        <div className="h-titles">
            <span className="titlesm">Discover, Engage, and Share the Extraordinary</span>
            <span className="titlebg">BLOG SPHERE</span>
        </div>
        <div className="background">
        <img  classname="header-img" src={homebgimage} alt="" />
        </div>
        
    </div>
  )
}

export default Header