import React ,{createContext,useEffect,useState} from 'react'
import axios from 'axios'


export const ModalContext = createContext()

const ModalProvider = (props) => {

    const[idreceta, guardarIdReceta]=useState(null)
    const[infoReceta,guardarReceta]=useState({})

    // Call API
    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idreceta) return     // cuando hay recetas llamar API
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            const resultado = await axios.get(url)
            guardarReceta(resultado.data.drinks[0])
        }
        obtenerReceta()
        
    }, [idreceta])

    return ( 
            <ModalContext.Provider
                 value={{
                    infoReceta, 
                    guardarIdReceta,
                    guardarReceta
                }}
            >
                {props.children}
            </ModalContext.Provider>
        );
}
 
export default ModalProvider;
