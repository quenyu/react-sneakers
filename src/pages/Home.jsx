import { Fragment, useState } from "react";

import Card from "./../components/Card/Card";

import search from './../assets/search.svg'
import remove from "./../assets/remove.svg";

const Home = ({ items, onAddToCart }) => {
    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <Fragment>
            <div className='flex justify-between items-center pb-11 pt-5'>
                <h1 className='text-3xl font-bold'>{searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}</h1>
                <div className="search flex px-3.5 relative">
                    <img src={search} alt="search" />
                    {searchValue && <img width={22} height={22} className="absolute top-3 right-3 cursor-pointer" onClick={() => setSearchValue('')} src={remove} alt="remove" />}
                    <input onChange={onChangeSearchInput} className='p-3' type="search" value={searchValue} placeholder='Поиск...' />
                </div>
            </div>

            <div className='sneakers'>
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onAddToCart={onAddToCart}
                        />
                    ))}
            </div>
        </Fragment>
    )
}
export default Home;