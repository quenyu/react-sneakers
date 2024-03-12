import './App.css'
import axios from 'axios';

import search from './../assets/search.svg'
import remove from "../assets/remove.svg";

import Header from "./Header.jsx";
import Drawer from "./Drawer.jsx";
import Card from "./Card/Card.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const hideOverlay = () => {
    onClose()
    document.body.style.overflow = '';
  };

  const onAddToCart = (obj) => {
    axios.post("https://65ee252d08706c584d9b1e3e.mockapi.io/cart", obj)
    setCartItems((prev) => [...prev, obj])
  }

  const removeItem = (index) => {
    const updatedItems = cartItems.filter((item, i) => i !== index);
    setCartItems(prev => [...prev, ...updatedItems]);
    console.log(index, updatedItems)
  }

  const onClose = () => {
    setCartOpened(false)
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    axios.get("https://65ee252d08706c584d9b1e3e.mockapi.io/items")
      .then((res) => setItems(res.data))
  }, []);

  return (
    <div className="wrapper px-14 py-16">
      {cartOpened ? <Drawer 
      items={cartItems} 
      onClose={onClose}
      onRemove={removeItem}
      hideOverlay={hideOverlay} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className='flex justify-between items-center pb-11 pt-5'>
        <h1 className='text-3xl font-bold'>{searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}</h1>
        <div className="search flex px-3.5 relative">
          <img src={search} alt="search" />
          {searchValue && <img width={22} height={22} className="absolute top-3 right-3 cursor-pointer" onClick={() => setSearchValue('')} src={remove} alt="remove" />}
          <input onChange={onChangeSearchInput} className='p-3' type="search" value={searchValue} placeholder='Поиск...' />
        </div>
      </div>

      <div className='sneakers'>
        {items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onAddToCart={onAddToCart}
            />
          ))}
        {/*<div className='card pt-3.5 pb-8 px-8'>*/}
        {/*  <div className='favorite'>*/}
        {/*    <img src={unliked} alt="unliked"/>*/}
        {/*  </div>*/}
        {/*  <img src={sneakers1} alt="sneakers1"/>*/}
        {/*  <h2 className='py-3.5'>*/}
        {/*    Мужские Кроссовки Nike Blazer Mid Suede*/}
        {/*  </h2>*/}
        {/*  <div className='flex justify-between items-center'>*/}
        {/*    <div>*/}
        {/*      <span className='text-xs uppercase text-neutral-400'>Цена:</span>*/}
        {/*      <p className='font-bold'>12 999 руб.</p>*/}
        {/*    </div>*/}
        {/*    <a href="#"><img src={plus} alt="addToCart"/></a>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}
