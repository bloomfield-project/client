import React from 'react';
import './Header.css';
import logo from "./bf.png-removebg-preview.png";
import player from "../../pages/player/player.jpg"
import { BsBell } from "react-icons/bs";
import {useDispatch,useSelector} from 'react-redux';

function Header(){
  const loginData= useSelector(state => state.auth.data)
  console.log(loginData.data.name)
    return (
      <div className="container-1">
        <section className='header-left'>
          <div className="image">
            <img src={logo} alt=""></img>
          </div>
          <div className="bloomfield">
            <div>BLOOMFIELD</div>
          </div>
        </section>
        <section className='header-right'>
          <div className='notify'>
            <BsBell className='bell'></BsBell>
          </div>
          <div className='username'>
            <div>{loginData.data.name}</div>
          </div>
          <div className='profilePic'>
            <img src={player} style={{borderRadius : "50%"}} alt=""></img>
          </div>
        </section>
      </div>
  );
}

export default Header;