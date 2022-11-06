import React, { useState, useContext } from "react";
import {styles} from './ItemDetail.style'
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom"
import { Context } from "../../../Context/CartContext";

const ItemDetail = ({ product , objet }) => {
    const [showItemcount, setShowItemcount] = useState(false);
    const {agregarItem,IsInCart,cart} = useContext(Context)

      let stock = 0;
  if(IsInCart(product.id)){
    const found = cart.find(item => item.id === product.id);
    stock = objet.count - found.cantidad;
  }else{
    stock = objet.count;
  }

    const onAdd = (count)=> {
      setShowItemcount(true)
      agregarItem(product, count)
    }
  return (
    <section style={styles.productSection}>
    <div style={styles.product}>
      <img alt={product.title} style={styles.productImg} src={product.image} />
      <h1>{product.title}</h1>
      <h2>Description</h2>
      <span style={styles.productDescription}>{product.description}</span>
      <h3 style={styles.productPrecio}>$ {product.price}</h3>
      <p> stock disponible {stock} </p>

      {
        !showItemcount ? <ItemCount stock={stock} initial={1} onAdd={onAdd} /> : ( <Link to={`/cart`}><button>Finalizar compra</button></Link> )
      }
      
    </div>
    </section>
  );
};
export default ItemDetail;

