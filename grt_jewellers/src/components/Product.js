import {React,useState,useEffect} from 'react'
import "../styles/card.css"
import "./Reviews"
import axios from 'axios'
 function Product() {
    const[product,setProduct] = useState([])

useEffect(()=>{
    axios.get('http://localhost:8888/products')
    .then(res=>{
        console.log(res.data)
        setProduct(res.data)
    })
    .catch((error)=>{
        console.log(error);
    })
   
},[])
    return (
        <div>
        <br/>
        <br/>
        <br/>
        <header>
            <h2>Product</h2>
        </header>
        <main>
        <div className="container">
            {

                product.length >0 && product.map((val,index)=>{
                    
                    let cost = val.price;
                    let discountRate = Number(val.discountPercentage)
                    let dPrice = Number(cost -(cost*discountRate)/100)
                    dPrice = Math.round(dPrice)
                    return ( 
                        

                            <div className="card" key={index}>
                                <img src={val.images[0]} className="card-img-top" alt={val.title}/>
                                <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                                <h5 className="card-title">Product code:{val.id}</h5>
                                <p className="card-text">{val.description}</p>
                                <h5 className="card-title">Discount:<p>{val.discountPercentage}%</p></h5>
                                <h5 className="card-title">Price:<p><del>{val.price}</del>   {dPrice}</p></h5>

                                <a href="Reviews" className="btn btn-primary">Reviews</a>
                                <a href="Cart" className="btn btn-primary" style={{"margin-left": "7px"}}>Add to Cart</a>
                                </div>
                            </div>
                        
                    )
                })
            }
            </div>
        </main>     
        <Reviews product={" "}/>      
        </div>
    )
}
export default Product;