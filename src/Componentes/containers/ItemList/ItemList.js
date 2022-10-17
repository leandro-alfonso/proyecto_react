import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <div style={styles.container}>
            {products.map((product) => {
             return <Item key={product.id} product={product} />
            })}
        </div>
    )
}

const styles = {
    container:{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "3rem",
    }
  }

export default ItemList