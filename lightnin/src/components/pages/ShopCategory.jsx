import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../context/ShopContext";
import Item from "../Items/Item";
import Service_product from "../assests/Service";
const ShopCategory=(props)=>
{
    const{all_product}= useContext(ShopContext)
    return(
        <div className="shop-category">
           <img className="shopcategory-banner"  src={props.banner} alt="" /> 
           <div className="shopcategory-indexSort">
            <p>
                <span>Showing the</span> Services We Provide
            </p>
          
            </div>
            <div className="chair-item">
            {Service_product.map((item)=>{
                return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_pricecd} old_price={item.old_price}/>
            })}
        </div>
        {/* <div className="shopcategory-products">
        {all_product.map((item,i)=>{
    if(props.category===item.category){
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    }
    else{
        return null;
    }
})}
</div> */}
            <button className="shopcategory-loadmore">
                Explore More
            </button>
        </div>
    );
}
export default ShopCategory;
{/*  */}