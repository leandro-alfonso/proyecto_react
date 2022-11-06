import React, { useContext } from "react";
import { Context } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import {style} from './Cart.style'
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
    const {cart,borrarItem,total,vaciarCarrito} = useContext(Context);
    return (
        <>
            {cart.length === 0 ? (
                <div>
                <h1 style={style.containerCart}>
                    Tu carrito está vacío , ir a <Link to="/" style={style.linkCart}>Catalogo?</Link>
                </h1>
                </div>
            ) : (
            <>
            <div style={style.seguirCart} >
            <Link to="/" style={style.linkCart}>Seguir comprando</Link>
            </div>
            {cart.map((producto)=>(
                <article style={style.containerArticle} key={producto.id}>
                    <div style={style.divCart}>
                    <img style={style.imgCart} alt={producto.title} src={producto.image} />
                    <h1 style={style.nameCart}>{producto.title}</h1>
                    </div>
                    <div style={style.cantCart}>
                    <h2>cantidad</h2>
                    <span>{producto.cantidad}</span>
                    </div>
                    <div style={style.cantCart}>
                    <h2>Total</h2>
                    <span>{producto.price*producto.cantidad}</span>
                    </div>
                    <DeleteIcon className="cartItem__remove" onClick={() => borrarItem(producto.id)} />
                </article>

            ))}
            <section style={style.sectionCart}>
            <div style={style.totalCart}>
                <h2 style={style.totalProduc}>Total de productos</h2>
                <span style={style.numCart}>${total}</span>
            </div>
            <button style={style.buttonCart}>Comprar</button>
            <button style={style.vaciarCart} onClick={vaciarCarrito}>Vaciar carrito</button>
            </section>
            </>
            )}
        </>
    );
};