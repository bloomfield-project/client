import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";
import { SidebarDataAdmin } from "./SidebarData";
import { SidebarDataPlayer } from "./SidebarData";


import "./Navbar.css";
import { IconContext } from "react-icons";
import { useLocation } from "react-router-dom";



// https://www.youtube.com/watch?v=CXa0f4-dWi4

function Navbar() {
  const location = useLocation();
  const user = location.pathname.split('/')[1]
  console.log(user,"hjgdsv",location)
  let data 
  if(user=="manager"){
    data=SidebarData
  }
  else if(user=="coach"){
    data=SidebarData
  }
  else if(user=="player"){
    data=SidebarDataPlayer
  }
  else if(user=="admin"){
    data=SidebarDataAdmin
  }
  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}> 
      {/* can change all iconce color at once */}


        
        <nav className="nav-menu active">
          <ul className="nav-menu-items" >
            

            

            {data.map((item, index) => {


              return (
                <li key={index} className={location.pathname==item.path?"new-g-g-g":item.cName}>
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
