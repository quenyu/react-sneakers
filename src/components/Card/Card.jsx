import { Fragment, useState } from 'react';

import ContentLoader from "react-content-loader";

import plus from "./../../assets/plus.svg";
// import liked from "./../../assets/liked.svg";
import unliked from "./../../assets/unliked.png";
import checked from './../../assets/checked.svg';

import styles from './Card.module.css'
//  id, title, price, imageUrl,
const Card = ({ onAddToCart, added = false, loading, ...obj }) => {
  const [isAdded, setIsAdded] = useState(added);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onAddToCart(obj);
  }

  // const onClickLike = () => {
  //   setIsFavorite(!isFavorite)
  // }
  return (
    <div className={styles.card}>
      {loading ? <ContentLoader
        speed={2}
        width={150}
        height={230}
        viewBox="0 0 150 230"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="198" y="128" rx="0" ry="0" width="2" height="9" />
        <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
        <rect x="0" y="116" rx="10" ry="10" width="150" height="15" />
        <rect x="0" y="137" rx="10" ry="10" width="100" height="15" />
        <rect x="0" y="195" rx="10" ry="10" width="80" height="25" />
        <rect x="118" y="188" rx="10" ry="10" width="32" height="32" />
      </ContentLoader>
        :
        <Fragment>
          <img src={obj.imageUrl} alt={obj.imageUrl} />
          <h2 className='py-3.5 flex-1'>
            {obj.title}
          </h2>
          <div className='flex justify-between items-center'>
            <div>
              <span className='text-xs uppercase text-neutral-400'>Цена:</span>
              <p className='font-bold'>{obj.price} руб.</p>
            </div>
            <img onClick={onClickPlus} className='cursor-pointer' src={added ? checked : plus} alt="addToCart" />
          </div>
        </Fragment>
      }
    </div>
  );
};

export default Card;