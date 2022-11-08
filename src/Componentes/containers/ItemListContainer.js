import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import {useParams} from "react-router-dom"
import {getDocs,collection,query,where} from "firebase/firestore"
import {db} from "../../firebase/firebase"


export const ItemListContainer = ({greeting})=> {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {idCategoria} = useParams ();
  
    useEffect(() => {
        const productCollection = collection(db,"productos")
        const q = idCategoria? query (productCollection,where("category","==",idCategoria)) : productCollection;

        const obtenerItem = async () => {
        try{
        const retornar = await getDocs(q)
        const dataDoc = retornar.docs.map(item =>{
            return {
                ...item.data(),
                id:item.id,
            }
        })
        setProducts(dataDoc);
        }

        catch(error){
            console.error(error);
          }
          finally{
            setLoading(false);
          }
        }
        obtenerItem();

    }, [idCategoria]);

    return (
        <>
            <h1 style={style.tituloPrincipal}> {greeting} </h1>

            {
                <>{loading ? <div style={style.containerSpinner}><ClipLoader 
                color={"#36d7b7"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /></div>: <ItemList products={products} />}
            </>
            }
        </>
    );
};

const style = {
    tituloPrincipal:{
        textAlign: 'center',
    },
    containerSpinner:{
        display: "flex",
        justifyContent: "center",
    }
}