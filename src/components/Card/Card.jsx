import React, {useState} from 'react';

import plus from "./../../assets/plus.svg";
import unliked from "./../../assets/unliked.svg";
import checked from './../../assets/checked.svg';

import styles from './Card.module.css'

const Card = ({ title, price, imageUrl, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  // onClickPlus={onClickPlus}
  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onAddToCart({ title, price, imageUrl });
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src={unliked} alt="unliked"/>
      </div>
      <img src={imageUrl} alt={imageUrl}/>
      <h2 className='py-3.5 flex-1'>
        {title}
      </h2>
      <div className='flex justify-between items-center'>
        <div>
          <span className='text-xs uppercase text-neutral-400'>Цена:</span>
          <p className='font-bold'>{price} руб.</p>
        </div>
        <img onClick={onClickPlus} className='cursor-pointer' src={isAdded ? checked : plus} alt="addToCart"/>
      </div>
    </div>
  );
};

export default Card;