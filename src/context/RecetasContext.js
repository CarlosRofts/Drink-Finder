import React,{createContext,useState,useEffect} from 'react'
import Axios from 'axios';


export const RecetasContext = createContext()



const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: 'Tequila',
        categoria: 'Ordinary Drink'
    });
    const {nombre, categoria}=busqueda
    const[consultar,guardarConsultar]=useState(false)

    useEffect(() => {   
        if(consultar){  
          const obtenerRecetas = async () => {
            const url =`https://thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
            const resultado = await Axios.get(url)
            // console.log(resultado.data.drinks)
            guardarRecetas(resultado.data.drinks)
          }
          obtenerRecetas()
        }
        // eslint-disable-next-line
      }, [busqueda])


    return (  
        <RecetasContext.Provider
            value={{
                recetas,
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children /** hace referencia a los componentes*/} 
        </RecetasContext.Provider>
            
        
    );
}
 
export default RecetasProvider;