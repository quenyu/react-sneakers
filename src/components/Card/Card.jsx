import { useState } from 'react';

import plus from "./../../assets/plus.svg";
import liked from "./../../assets/liked.svg";
import unliked from "./../../assets/unliked.png";
import checked from './../../assets/checked.svg';

import styles from './Card.module.css'

const Card = ({ id, title, price, imageUrl, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);

  const getCart = () => { }

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onAddToCart({ id, title, price, imageUrl });
  }

  // const onClickLike = () => {
  //   setIsFavorite(!isFavorite)
  // }

  return (
    <div className={styles.card}>
      {/* <div className={styles.favorite}>
        {<img onClick={onClickLike} className='cursor-pointer' src={isFavorite ? liked : unliked} alt="addToFavorite" />}
      </div> */}
      <img src={imageUrl} alt={imageUrl} />
      <h2 className='py-3.5 flex-1'>
        {title}
      </h2>
      <div className='flex justify-between items-center'>
        <div>
          <span className='text-xs uppercase text-neutral-400'>Цена:</span>
          <p className='font-bold'>{price} руб.</p>
        </div>
        <img onClick={onClickPlus} className='cursor-pointer' src={isAdded ? checked : plus} alt="addToCart" />
      </div>
    </div>
  );
};

export default Card;