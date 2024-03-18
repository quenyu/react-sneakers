import './App.css'
import axios from 'axios';

import Header from "./Header.jsx";
import Drawer from "./Drawer.jsx";
import { useEffect, useState } from "react";
import Home from '../pages/Home.jsx';

export default function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // const [favorites, setFavorites] = useState([]);


  const hideOverlay = () => {
    onClose()
    document.body.style.overflow = '';
  };

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => +item.id === +obj.id)) {
      axios.delete(`https://65ee252d08706c584d9b1e3e.mockapi.io/cart/${obj.id};
      `).then(console.log("deleted"));
      setCartItems((prev) => prev.filter((item) => +item.id !== +obj.id))
    } else {
      axios.post("https://65ee252d08706c584d9b1e3e.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj])
    }
    // try {
    //   axios.post("https://65ee252d08706c584d9b1e3e.mockapi.io/cart", obj)
    //   setCartItems((prev) => [...prev, obj])
    // } catch (error) {
    //   console.log("ERROR ", error)
    // }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://65ee252d08706c584d9b1e3e.mockapi.io/cart/${id}
  `).then(console.log("deleted"));
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onClose = () => {
    setCartOpened(false)
  }

  useEffect(() => {
    async function fetchData () {
      const cartResponse = await axios.get("https://65ee252d08706c584d9b1e3e.mockapi.io/cart")
      const itemsResponse = await axios.get("https://65ee252d08706c584d9b1e3e.mockapi.io/items")
      
      setIsLoading(false)

      setCartItems(cartResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData();
  }, []);

  return (
    <div className="wrapper px-14 py-16">
      {cartOpened ? <Drawer
        items={cartItems}
        onClose={onClose}
        onRemove={onRemoveItem}
        hideOverlay={hideOverlay} /> : null}

      <Header onClickCart={() => setCartOpened(true)} />

      <Home
        items={items}
        onAddToCart={onAddToCart}
        cartItems={cartItems}
        isLoading={isLoading}
      />
    </div>
  )
}
