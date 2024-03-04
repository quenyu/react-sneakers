import React from 'react';
import logo from "../assets/logo.png";
import cart from "../assets/cart.svg";
import favorite from "../assets/favorite.svg";
import user from "../assets/user.svg";

const Header = () => {
  return (
    <header className='header flex justify-between align-center pb-11'>
      <div className='headerLeft flex items-center'>
        <img className='h-10 w-10 mr-4' src={logo} alt="logo"/>
        <div>
          <h3 className='font-bold text-xl'>REACT SNEAKERS</h3>
          <p className='font-regular text-neutral-400'>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className='headerRight flex items-center gap-8'>
        <li className='flex'><img width={18} height={18} src={cart} alt="cart"/><span>1205 руб.</span></li>
        <li className='flex'><img width={18} height={18} src={favorite} alt="favorite"/><span>Закладки</span></li>
        <li className='flex'><img width={18} height={18} src={user} alt="user"/><span>Профиль</span></li>
      </ul>
    </header>
  );
};

export default Header;