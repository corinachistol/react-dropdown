import { useState,useEffect } from "react";
import axios from 'axios';
import './style.scss'

export default function Dropdown() {

    const [checked,setChecked] = useState(true)
    const [products, setProducts] = useState([])
  
    useEffect( ()=> {
        (async () => {
            const _products = await axios.get('https://fakestoreapi.com/products')
            setProducts(_products.data)
        })()
    },[] )

    return (
        <div className="container">

            <input type="checkbox" />
            <label className={checked ? 'close' : 'open'} 
                    onClick={()=>setChecked(prevValue => !prevValue)}>
                        Products List
            </label>

            {checked ? "" : (
                <div>
                     {products.map((product)=>{
                // console.log(product.rating)
                    return <Product productObj={product} key={product.id} >
                                <ProductRating rating={product.rating} />
                            </Product>
                })}
                </div>
               

            )}
        </div>
    )
}

function Product({productObj,children}) {
    console.log(productObj)


    return (
        <div className="item">
            <li>
                <h2>{productObj.title}</h2>
                <a href=""><img style={{width:'100px'}} src={productObj.image} alt={productObj.title} /></a>
                <p>{productObj.description}</p>
                <p>{productObj.price}</p>
                {children}
            </li>
            
        </div>
    )
}

function ProductRating({rating}) {
    // console.log(rating.count,rating.rate)
    return ( 
        <span>{rating.count} {rating.rate}</span>
        
    )
}