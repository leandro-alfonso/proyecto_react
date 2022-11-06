import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from "../../Context/CartContext";

export const CartWidget = () => {
    const {qty} = useContext (Context)
    return (
        <>
        <div style={style.widget}>
        <p style={style.numWidget}>{qty === 0 ? "" : qty }</p>
        <ShoppingCartIcon fontSize="large" sx={{ color: "black"}}/>
        </div>
        </>
    )
}

const style = {
    widget:{
        alignItems: "center",
        display: "flex",
    },
    numWidget:{
        color: "white",
        width: "1.8rem",
        backgroundColor: "#E71D73",
        borderRadius: "100%",
        fontSize: "1.4em",
        textAlign: "center",
        lineHeight: "1em",
    }
}