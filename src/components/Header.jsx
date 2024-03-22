import { useCart } from './../hooks/useCart';
import { Link } from 'react-router-dom';

import logo from "./../assets/logo.png";
import cart from "./../assets/cart.svg";
import favorite from "./../assets/favorite.svg";
import user from "./../assets/user.svg";

const Header = ({ onClickCart }) => {
  const { totalPrice } = useCart();

  const hideOverlay = () => {
    onClickCart()
    document.body.style.overflow = 'hidden';
  };

  return (
    <header className='header flex justify-between align-center pb-11'>
      <Link to='/*'>
        <div className='headerLeft flex items-center' to='/'>
          <img className='h-10 w-10 mr-4' src={logo} alt="logo" />
          <div>
            <h3 className='font-bold text-xl'>REACT SNEAKERS</h3>
            <p className='font-regular text-neutral-400'>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className='headerRight flex items-center gap-8'>
        <li onClick={() => hideOverlay()} className='cursor-pointer'><img width={18} height={18} src={cart} alt="cart" /><span>{totalPrice} руб.</span></li>
        <li className='cursor-pointer'><img width={18} height={18} src={favorite} alt="favorite" /><span>Закладки</span></li>
        <Link to="/orders">
          <li className='cursor-pointer'><img width={18} height={18} src={user} alt="user" /><span>Профиль</span></li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;