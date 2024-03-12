import React, { useState } from 'react';

import remove from "../assets/remove.svg";
// import sneakers1 from "../assets/sneakers1.jpg";
import rightArrow from "../assets/rightArrow.svg";

const Drawer = ({ items = [], onClose, onRemove, hideOverlay }) => {

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className='flex items-center justify-between text-2xl font-bold'>
          Корзина
          <img onClick={hideOverlay} className='cursor-pointer' src={remove} alt="remove" />
        </h2>

        <div className="items">
            {items.map((obj, index) => {
              return (
                <div key={index} className="cart-item flex items-center py-6 px-5 mb-5">
                  <img className="mr-5" width={70} height={70} src={obj.imageUrl} alt="sneakers1" />
                  <div>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className="cursor-pointer" onClick={() => onRemove(index)} src={remove} alt="remove" />
                </div>
              )
            })}
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
            <img src={rightArrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;