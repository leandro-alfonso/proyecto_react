import React, { useState } from "react";
import {styles} from './ItemDetail.style'
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom"

const ItemDetail = ({ product }) => {
    const [showItemcount, setShowItemcount] = useState(true)
    const onAdd = (count)=> {
        console.log(`el usuario quiere agregar al carrito ${count} productos`)
        setShowItemcount(false)
    }
  return (
    <section style={styles.productSection}>
    <div style={styles.product}>
      <img alt={product.title} style={styles.productImg} src={product.image} />
      <h1>{product.title}</h1>
      <h2>Description</h2>
      <span style={styles.productDescription}>{product.description}</span>
      <h3 style={styles.productPrecio}>$ {product.price}</h3>
      {
        showItemcount ? <ItemCount stock={10} initial={1} onAdd={onAdd} /> : ( <Link to={`/cart`}><button>Finalizar compra</button></Link> )
      }
      
    </div>
    </section>
  );
};
export default ItemDetail;

