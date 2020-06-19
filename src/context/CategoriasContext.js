import React,{ createContext,useState,useEffect } from 'react';
import axios from 'axios'
// Dependiendo del proy. se recomienda tener las fn y context separados.


// Crear context 
export const CategoriasContext = createContext();
// privider : almacena las fn y state
const CategoriasProvider = (props) => {
    const [categorias,guardarCategorias] = useState ([])

    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios.get(url)
            guardarCategorias(categorias.data.drinks) 
        }
        obtenerCategorias()
        
    }, [])  

    return(
        <CategoriasContext.Provider
            value={{categorias} /**De esta forma disponemos el state*/}
        >
                {props.children /** hace referencia a los componentes*/} 
        </CategoriasContext.Provider>           
    )
}

export default CategoriasProvider