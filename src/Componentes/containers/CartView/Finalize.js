import { useState } from 'react'

function Finalize({setBuyer, finalizarCompra}) {
    const [ name, setName ] = useState('')
    const [ lastname, setLastame ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ num, setEnum ] = useState('')
    const [ text, setText ] = useState('')

    const setInput = (e) => {
        if (e.target.name === 'nombre'){
            setName(e.target.value);
        } else if (e.target.name === 'apellido'){
            setLastame(e.target.value);
        } else if (e.target.name === "telefono"){
            setEnum(e.target.value);
        }else if (e.target.name === "email"){
            setEmail(e.target.value);
        }else{
            setText(e.target.value)
        }

        setBuyer({
            name,
            lastname,
            email,
            num,
            text
        });
    }

    return (
        <form style={style.form} onSubmit={finalizarCompra}>
            <div style={style.formDiv}>
                <label htmlFor="">Nombre:</label>
                <input name="nombre" type="text" placeholder="Ingresa tu nombre" required onChange={setInput} />
            </div>
            <div style={style.formDiv}>
                <label htmlFor="">Apellido:</label>
                <input name="apellido" type="text" placeholder="Ingresa tu apellido" required onChange={setInput}/>
            </div>
            <div style={style.formDiv}>
                <label htmlFor="">Telefono:</label>
                <input name="telefono" type="text" placeholder="Ingresa tu telefono" required onChange={setInput}/>
            </div>
            <div style={style.formEmail}>
                <label htmlFor="">Email:</label>
                <input name="email" type="email" placeholder="Ingresa tu email" required onChange={setInput} />
            </div>
            <div style={style.formText}>
                <label htmlFor="">texto:</label>
                <textarea name="texto" id="" cols="30" rows="10" onChange={setInput}></textarea >
            </div>
            <button type="submit" style={style.formButton}>Finalizar comprar</button>
        </form>
    )
}

const style = {
    form : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
    },
    formDiv : {
        display: "flex",
        gap: "1rem",
        width:"60%",
        justifyContent: "center"
    },
    formEmail:{
        display: "flex",
        gap:"2rem",
        width:"60%",
        justifyContent: "center"
    },
    formText : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    formButton:{
        width: "25%",
        color: "white",
        backgroundColor: "#4CC713",
        padding: "10px 25px",
    },
}

export default Finalize