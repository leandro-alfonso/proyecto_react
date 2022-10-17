import React from "react";
import { Link } from "react-router-dom";

const Item = ({product})=>{
    const URL = `/producto/${product.id}`
    return (
        <>
        <div style={style.container}>
        <h1 style={style.productTitle}>{product.title}</h1>
        <img src= {product.image} alt={product.title} style={style.productImg}/>
        <p>${product.price}</p>
        <Link to={URL}>
            <button>Ver mas</button>
        </Link>
        </div>
        
        </>

    )
}

const style = {
    productImg:{
        width: '20%'
    },
    container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom:"1rem",
        width: '30%',
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        borderRadius: "20px",
      },
      productTitle:{  
        fontSize: "1em",
        textAlign: "center",
      }
}

export default Item;