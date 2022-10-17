import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd })=>{
    

    const [count,setCount] = useState(initial)

    const subtract = () => {
        if (count > 1){
            setCount (count - 1)
        }
    }

    const add = () => {
        if (count < stock){
            setCount (count + 1)
        }
    }


    return (
        <div style={style.contadorDiv}>
            <div style={style.contadorDivi}>
            <button onClick={subtract}>-</button>
            <h2>{count}</h2>
            <button onClick={add}>+</button>
            </div>
            <button style={style.contadorButton} disabled={stock === 0} onClick={()=>onAdd(count)}>
            <span> {stock === 0? `No hay stock` : `Agregar al carrito`} </span>
            </button>
        </div>
    )
}

const style = {
    contadorDiv:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '40%',
    },
    contadorDivi:{
        display: 'flex',
        width: '50%',
        justifyContent: 'space-around',
        alignItems: "baseline",
    },
    contadorButton:{
        width: '60%',
    }

}

export default ItemCount