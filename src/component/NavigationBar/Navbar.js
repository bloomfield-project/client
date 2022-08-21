import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";
import { SidebarDataAdmin } from "./SidebarData";




import "./Navbar.css";
import { IconContext } from "react-icons";

// https://www.youtube.com/watch?v=CXa0f4-dWi4

function Navbar() {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}> 
      {/* can change all iconce color at once */}


        
        <nav className="nav-menu active">
          <ul className="nav-menu-items" >
            
<<<<<<< HEAD
            {SidebarDataPlayer.map((item, index) => {
=======
            {SidebarDataAdmin.map((item, index) => {
>>>>>>> c2d27f60463d6d293113ecb628eeb1c771a9faf3

              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
