import './App.css'

import sneakers1 from './../assets/sneakers1.jpg'

import search from './../assets/search.svg'
import plus from './../assets/plus.svg'
import unliked from './../assets/unliked.svg'

import Header from "./Header.jsx";
import Drawer from "./Drawer.jsx";

export default function App() {

  // let currentIndex = 0;
  // const carouselItems = document.querySelectorAll('.carousel-item');
  //
  // function goToSlide(index) {
  //   if (index !== 0) {
  //     index = carouselItems.length - 1;
  //   } else if (index === carouselItems.length) {
  //     index = 0;
  //   }
  //   currentIndex = index;
  //   document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
  // }
  //
  // function goToNextSlide() {
  //   console.log(1)
  //   goToSlide(currentIndex + 1);
  // }
  //
  // function goToPrevSlide() {
  //   goToSlide(currentIndex - 1);
  // }
  //
  // // setInterval(goToNextSlide, 3000);

  return (
    <div className="wrapper px-14 py-16">
      <Drawer/>
      <Header/>

      {/*/**/}
      {/*<div className="carousel py-11">*/}
      {/*  /* <img className='btn-swapper' src={bannerRight} alt="change"/>*/}

      {/*  /* <div className="carousel-inner">*/}
      {/*    /* <div className="carousel-item">*/}
      {/*      /* <img onClick={() => goToNextSlide()} src={bannerImg1} alt="Image 1"/>*/}

      {/*      /* </div>*/}
      {/*    /* <div className="carousel-item">*/}
      {/*      /* <img src={null} alt="Image 2"/>*/}
      {/*      /* </div>*/}
      {/*    /* <div className="carousel-item">*/}
      {/*      /* <img src={null} alt="Image 3"/>*/}
      {/*      /* </div>*/}
      {/*    /* </div>*/}
      {/*  /**/}
      {/*</div>*/}
      {/**/}
      <div className='flex justify-between items-center pb-11 pt-5'>
        <h1 className='text-3xl font-bold'>Все кроссовки</h1>
        <div className="search flex px-3.5">
          <img src={search} alt="search"/>
          <input className='p-3' type="search" placeholder='Поиск...'/>
        </div>
      </div>
      <div className='sneakers'>
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
      </div>
    </div>
  )
}
