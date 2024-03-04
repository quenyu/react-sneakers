import React from 'react';
import sneakers1 from './../assets/sneakers1.jpg'
import plus from "../assets/plus.svg";
import unliked from "../assets/unliked.svg";

const Card = () => {
  return (
    <div className='card pt-3.5 pb-8 px-8'>
      <div className='favorite'>
        <img src={unliked} alt="unliked"/>
      </div>
      <img src={sneakers1} alt="sneakers1"/>
      <h2 className='py-3.5'>
        Мужские Кроссовки Nike Blazer Mid Suede
      </h2>
      <div className='flex justify-between items-center'>
        <div>
          <span className='text-xs uppercase text-neutral-400'>Цена:</span>
          <p className='font-bold'>12 999 руб.</p>
        </div>
        <a href="#"><img src={plus} alt="addToCart"/></a>
      </div>
    </div>
  );
};

export default Card;