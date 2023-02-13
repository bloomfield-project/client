import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDataPlayer } from "./SidebarData";
import { SidebarDataAdmin } from "./SidebarData";
import { SidebarDataCoach } from "./SidebarData";
import { logout } from "../../redux/actions/authAction";
import { SidebarDataManager } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";


function Navbar() {

  const location = useLocation();
  const dispatch = useDispatch()
  const user = location.pathname.split('/')[1]

  const page = location.pathname.split('/')[2]

  let data = SidebarDataCoach
  if (user == "manager") {
    data = SidebarDataManager

  }
  else if (user == "coach") {
    data = SidebarDataCoach
    console.log('hjsad')
  }
  else if (user == "player") {
    data = SidebarDataPlayer
  }
  else if (user == "admin") {
    data = SidebarDataAdmin
  }

  const handleLogout = (path) => {
    if (path == '/') {
      console.log("calling logout")
      dispatch(logout())
    }
  }

  return (

    <>

      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="nav-menu active">
          <ul className="nav-menu-items" >
            {
              data.map((item, index) => {
                return (
                  <li key={index} className={page == item.path.split('/')[2] ? "new-g-g-g" : item.cName}>
                    <Link onClick={() => handleLogout(item.path)} to={item.path}>
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
