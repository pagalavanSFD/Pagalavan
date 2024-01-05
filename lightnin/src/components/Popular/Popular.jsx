import React from 'react'
import './Popular.css';
import data_product from '../assests/Data';
import Item from '../Items/Item';

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR SERVICES</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item)=>{
                return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular