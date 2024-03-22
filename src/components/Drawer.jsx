import { Fragment, useContext, useState } from 'react';
import { useCart } from './../hooks/useCart';
import axios from 'axios';

import remove from "./../assets/remove.svg";
import rightArrow from "./../assets/rightArrow.svg";
import emptyCart from './../assets/empty-cart.png';
import completedOrder from './../assets/completed-order.png'

import Info from './Info';

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const Drawer = ({ onClose, onRemove, hideOverlay }) => {
  const [orderId, setOrderId] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { cartItems, setCartItems, totalPrice } = useCart();

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const fetchData = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItems)
      });
      const response = await fetch('http://localhost:3000/orders');
      const data = await response.json();
      
      // Костыль
      for (let i = 1; i <= cartItems.length; i++) {
        await axios.delete(`https://65ee252d08706c584d9b1e3e.mockapi.io/cart/${i}`)
        await delay(1000);
      }

      setOrderId(data.length)
      setIsCompleted(true);
      setCartItems([]);
    } catch (e) {
      console.log("ERROR: ", e)
    }
    setIsLoading(false);
  }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className='flex items-center justify-between text-2xl font-bold'>
          Корзина
          <img onClick={hideOverlay} className='cursor-pointer' src={remove} alt="remove" />
        </h2>

        {cartItems.length > 0 ?
          <Fragment>
            <div className="items">
              {cartItems.map((obj) => {
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
                  <b>{totalPrice} руб. </b>
                </li>
                <li className='flex'>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice*0.05).toFixed()} руб.</b>
                </li>
              </ul>
              <button disabled={isLoading} className='greenBtn greenBtn_cart' onClick={onClickOrder}>
                <span>Оформить заказ</span>
                <img src={rightArrow} alt="arrow" />
              </button>
            </div>
          </Fragment>
          :
          <Info
            title={isCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={isCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            image={isCompleted ? completedOrder : emptyCart}
            hideOverlay={hideOverlay}
          />
          // <div className='empty-cart flex items-center justify-center flex-col h-full text-center'>
          //   <img className='mb-5' width={120} height={120} src={emptyCart} alt="emptyCart" />
          //   <h2 className='text-2xl font-semibold'>Корзина пустая</h2>
          //   <p className='text-base opacity-40 pt-2.5'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          //   <button className='greenBtn greenBtn_cart mt-10 relative' onClick={() => {hideOverlay(), onClose()}}>
          //     <img className='absolute top-6 left-6' src={leftArrow} alt="arrow" />
          //     <span className='text-base font-semibold'>Вернуться назад</span>
          //   </button>
          // </div>
        }

      </div>
    </div>
  );
};

export default Drawer;