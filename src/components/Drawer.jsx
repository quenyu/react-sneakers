import React from 'react';

import remove from "../assets/remove.svg";
import sneakers1 from "../assets/sneakers1.jpg";
import rightArrow from "../assets/rightArrow.svg";

const Drawer = () => {
  return (
    <div className="overlay" style={{display: "none"}}>
      <div className="drawer">
        <h2 className='flex items-center justify-between text-2xl font-bold'>
          Корзина
          <img className='cursor-pointer' src={remove} alt="remove"/>
        </h2>

        <div className="items">

          <div className="cart-item flex items-center py-6 px-5">
            <img className="mr-5" width={70} height={70} src={sneakers1} alt="sneakers1"/>
            <div>
              <p>Мужские кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="cursor-pointer" src={remove} alt="remove"/>
          </div>

        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className='flex'>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className='greenBtn'>
            <span>Оформить заказ</span>
            <img src={rightArrow} alt="arrow"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;