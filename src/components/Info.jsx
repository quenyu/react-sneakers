import { useContext } from 'react';

import AppContext from "./../context";

import leftArrow from './../assets/leftArrow.svg';

const Info = ({ title, image, description, hideOverlay }) => {
    const { setCartOpened } = useContext(AppContext);

    return (
        <div className='empty-cart flex items-center justify-center flex-col h-full text-center'>
            <img className='mb-5' width={120} height={120} src={image} alt="emptyCart" />
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='text-base opacity-40 pt-2.5 mb-10'>{description}</p>
            <button className='greenBtn greenBtn_info relative' onClick={() => { hideOverlay(), setCartOpened(false) }}>
                <img className='absolute top-6 left-6' src={leftArrow} alt="arrow" />
                <span className='text-base font-semibold'>Вернуться назад</span>
            </button>
        </div>
    );
}

export default Info