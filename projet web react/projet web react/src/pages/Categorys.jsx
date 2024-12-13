import dropdown_icon from '../Assets/dropdown_icon.png'

import Item from '../components/Item'
import './Categorys.css'
import { useEffect, useState } from 'react'


export default function Categorys(props){
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:8080/product/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setProducts(result);})
    },[])
   
    return (
        <div className="categorys">
            <img className='category-banner' src={props.banner} alt="" />
            <div className="category-indexSort">
                <p>
                    <span>Shoing 1-12</span> out of 36 products
                </p>
                <div className="category-sort">
                    sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="category-product">
                {products.map((item,i)=>{
                     if (props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                     }
                     else return null;
                })}
                
            </div>
            <div className="category-loadmore">
                explore more
            </div>
        </div>
    )

}