import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SidebarDataPlayer } from "./SidebarData";
import { SidebarDataAdmin } from "./SidebarData";
import { SidebarDataCoach } from "./SidebarData";



import { SidebarDataManager } from "./SidebarData";






import "./Navbar.css";
import { IconContext } from "react-icons";
import { useLocation } from "react-router-dom";



// https://www.youtube.com/watch?v=CXa0f4-dWi4

function Navbar() {

  const location = useLocation();
  const user = location.pathname.split('/')[1]


  const page =location.pathname.split('/')[2]
  let data =SidebarDataCoach
  if (user == "manager") {
    data = SidebarDataManager

  }
  else if (user == "couch") {
    data = SidebarDataCoach
    console.log('hjsad')
  }
  else if (user == "player") {
    data = SidebarDataPlayer
  }
  else if (user == "admin") {
    data = SidebarDataAdmin
  }

  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* can change all iconce color at once */}



        <nav className="nav-menu active">
          <ul className="nav-menu-items" >





            

              {
                data.map((item, index) => {
 

                  // console.log(item.path.split('/')[2])

                  return (
                    <li key={index} className={page == item.path.split('/')[2] ? "new-g-g-g" : item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })
              }
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}


export default Navbar;
