import React, { Component } from 'react';
import styles from './NavBar.css';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import Logo from './Logo';



const NavBar = () =>{
   return (
      <div className='nav-bar'>
         <Logo/>
         <ItemListContainer/>
         <CartWidget/>
      </div>
   )
}

export default NavBar;
