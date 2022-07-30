import React from 'react';
import './Header.css';
import logo from "./bf.png-removebg-preview.png";
import profpic from "./profpic.jfif"
import { BsBell } from "react-icons/bs";

function Header(){
    return (
      <div className="container-1">
        <section className='header-left'>
          <div className="image">
            <img src={logo} alt=""></img>
          </div>
          <div className="bloomfield">
            <text>BLOOMFIELD</text>
          </div>
        </section>
        <section className='header-right'>
          <div className='notify'>
            <BsBell className='bell'></BsBell>
          </div>
          <div className='username'>
            <text>W.D.K.G.G.S.Perera</text>
          </div>
          <div className='profilePic'>
            <img src={profpic} alt=""></img>
          </div>
        </section>
      </div>
  );
}

export default Header;