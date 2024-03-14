import React, { Fragment, useState } from 'react';

import remove from "./../assets/remove.svg";
// import sneakers1 from "../assets/sneakers1.jpg";
import rightArrow from "./../assets/rightArrow.svg";
import leftArrow from './../assets/leftArrow.svg';
import emptyCart from './../assets/empty-cart.png';

const Drawer = ({ items = [], onClose, onRemove, hideOverlay }) => {

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className='flex items-center justify-between text-2xl font-bold'>
          Корзина
          <img onClick={hideOverlay} className='cursor-pointer' src={remove} alt="remove" />
        </h2>

        {items.length > 0 ?
          <Fragment>
            <div className="items">
              {items.map((obj) => {
                return (
                  <div key={obj.id} className="cart-item flex items-center py-6 px-5 mb-5">
                    <img className="mr-5" width={70} height={70} src={obj.imageUrl} alt="sneakers1" />
                    <div>
                      <p>{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img className="cursor-pointer" onClick={() => onRemove(obj.id)} src={remove} alt="remove" />
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
          </Fragment>
          :
          <div className='empty-cart flex items-center justify-center flex-col h-full text-center'>
            <img className='mb-5' width={120} height={120} src={emptyCart} alt="emptyCart" />
            <h2 className='text-2xl font-semibold'>Корзина пустая</h2>
            <p className='text-base opacity-40 pt-2.5'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className='greenBtn greenBtn_cart mt-10 relative' onClick={() => {hideOverlay(), onClose()}}>
              <img className='absolute top-6 left-6' src={leftArrow} alt="arrow" />
              <span className='text-base font-semibold'>Вернуться назад</span>
            </button>
          </div>
        }

      </div>
    </div>
  );
};

export default Drawer;