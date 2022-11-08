import React, { useContext,useState } from "react";
import { Context } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import {style} from './Cart.style'
import DeleteIcon from '@mui/icons-material/Delete';
import {db} from "../../../firebase/firebase"
import { addDoc,serverTimestamp,doc,updateDoc, collection} from "firebase/firestore";
import Finalize from "./Finalize";
import Swal from 'sweetalert2'

export const Cart = () => {
    const {cart,borrarItem,total,vaciarCarrito} = useContext(Context);
    const [ buyer, setBuyer ] = useState({});
     
    const finalizarCompra = ()=> {

        const items = [];
        cart.forEach((item) => {
            items.push({
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                image: item.image,
                cantidad: item.cantidad
            })
        })

        const ventasCollection = collection(db,"ventas");
        addDoc (ventasCollection,{
            buyer,
            items,
            total,
            date:serverTimestamp()
        })
        .then(result=>{
            Swal.fire({
                title: 'Gracias por su compra!',
                html: `Número de compra: <b>${result.id}</b>`,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#3085d6',
            })
        })
        .catch(e=>{
            console.log("error")
        })
        actualizarStock()
        vaciarCarrito();
    }

    const actualizarStock = ()=>{
        cart.forEach(item => {
        const updateStock = doc(db,"productos",item.id)
        updateDoc(updateStock,{stock:item.stock - item.cantidad})
    })
}
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
            <button style={style.vaciarCart} onClick={vaciarCarrito}>Vaciar carrito</button>
            <div style={style.formContainer}>
                <h2 style={style.subCart}>Para finalizar la compra ingresa tus datos</h2>
            <Finalize setBuyer={setBuyer} finalizarCompra={finalizarCompra} />
            </div>
            </section>
            </>
            )}
        </>
    );
};
