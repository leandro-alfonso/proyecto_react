import React from "react";

export const ItemListContainer = ({greeting})=> {
    return (
        <h1 style={style.tituloPrincipal}> {greeting} </h1>
    )
}

const style = {
    tituloPrincipal:{
        textAlign: 'center',
    }
}