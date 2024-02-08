import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Siddiq from "../../assets/Siddiq.jpg"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const Sidebar = () => {
  const [cats,setcats]=useState([]);
  // useEffect(()=>{
  //   const getcats=async()=>{
  //     const res=await axios.get("/categories")
  //     setcats(res.data);
  //   }
  //   getcats();
  // },[])
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img src={Siddiq} alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas omnis autem laboriosam maiores non architecto ipsa dolore tempora nemo inventore.
        </p>
      </div>
      {/* <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
        {cats.map((c)=>(
          <Link to={`/?cat=${c.name}`} className="link">
          <li className="sidebarlistitem">{c.name}</li>
          </Link>
          
        ))}
          
          
        </ul>
      </div> */}
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <FaFacebookSquare className="sidebar-icon" />
          <FaTwitterSquare className="sidebar-icon" />
          <FaInstagramSquare className="sidebar-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
