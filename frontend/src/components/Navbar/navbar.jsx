// import React, { useContext, useEffect} from 'react'
// import { FaFacebookSquare,FaTwitterSquare,FaPinterestSquare,FaInstagramSquare,FaSearch } from "react-icons/fa";
// import "./navbar.css"
// import {Link} from "react-router-dom"
// import Home from '../../pages/home/home';
// import { Context } from '../../Context/Context';

// const Navbar = () => {
//   const {user,dispatch}=useContext(Context);
//   const PF = "http://localhost:5000/images/"
//   const handleLogout= ()=>{
//       dispatch({type:"LOGOUT"});
//       window.location.replace("/login");
//   }
//   return (
//     <div className='navbar'>
//         <div className="navleft">
//         <FaFacebookSquare className='nav-icon'/>
//         <FaTwitterSquare className='nav-icon'/>
//         {/* <FaPinterestSquare className='nav-icon'/> */}
//         <FaInstagramSquare className='nav-icon'/>
//         </div>
//         <div className="navcenter">
//             <ul className="navlist">
//                 <li className="navlist-item"><Link className='link' to="/">HOME</Link></li>
//                 <li className="navlist-item"><Link className='link' to="/">ALL BLOGS</Link></li>
//                 <li className="navlist-item"><Link className='link' to={user?(`/?user=${user.username}`):("/login")}>MY POSTS</Link></li>
//                 <li className="navlist-item"><Link className='link' to="/write">WRITE</Link></li>
//                 <li className="navlist-item" onClick={handleLogout}>{user && "LOGOUT"}</li>
//             </ul>
//         </div>
//         <div className="navright">
//         {
          
//           user?(
//             <Link to="/settings">
//             <img className='nav-img' src={PF+user.profilePic} alt="" />
//           </Link>
//             ):
//           (
//             <ul className='navlist'>
//             <li className="navlist-item"><Link className='link' to="/login">LOGIN</Link></li>
//             <li className="navlist-item"><Link className='link' to="/register">SIGNUP</Link></li>
//             </ul>
//           )
//         }
            
//             {/* <FaSearch className='nav-searchicon'/> */}
//             {user && (<Link className='link' to="/settings">
//             <li className='navlist-item nav-searchicon'>{user?.username}</li>

//             </Link>)}
//         </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useContext, useEffect, useState } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from '../../Context/Context';
import './navbar.css';

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle
  const PF = "https://blog-sphere-fs4z.onrender.com/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };

  return (
    <div className='navbar'>
      <div className="navleft">
        <FaFacebookSquare className='nav-icon' />
        <FaTwitterSquare className='nav-icon' />
        {/* <FaPinterestSquare className='nav-icon'/> */}
        <FaInstagramSquare className='nav-icon' />
      </div>
      {/* Hamburger menu icon */}
      <FaBars className="hamburger-menu" onClick={() => setIsOpen(!isOpen)} />
      <div className={`navcenter ${isOpen ? 'open' : ''}`}>
        <ul className="navlist">
          <li className="navlist-item" onClick={()=>setIsOpen(false)}><Link className='link' to="/">HOME</Link></li>
          <li className="navlist-item" onClick={()=>setIsOpen(false)} ><Link className='link' to="/">ALL BLOGS</Link></li>
          <li className="navlist-item" onClick={()=>setIsOpen(false)}><Link className='link' to={user ? (`/?user=${user.username}`) : ("/login")}>MY POSTS</Link></li>
          <li className="navlist-item" onClick={()=>setIsOpen(false)}><Link className='link' to="/write">WRITE</Link></li>
          <li className="navlist-item" onClick={handleLogout} >{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navright">
        {
          user ? (
            <Link to="/settings">
              <img className='nav-img' src={PF + user.profilePic} alt="" />
            </Link>
          ) : (
            <ul className='navlistl'>
              <li className="navlist-item"><Link className='link' to="/login">LOGIN</Link></li>
              <li className="navlist-item"><Link className='link' to="/register">SIGNUP</Link></li>
            </ul>
          )
        }
        {user && (
          <Link className='link' to="/settings">
            <li className='navlist-item nav-searchicon'>{user?.username}</li>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
