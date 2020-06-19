import React , {useContext} from 'react';
import {RecetasContext} from '../context/RecetasContext'
import { Col , CardColumns} from 'react-bootstrap';
import Receta from './Receta'
const ListaRecetas = () => {

    // Extraer Recetas 
    const {recetas} = useContext(RecetasContext)
    // console.log('ListaRecetas.js', recetas)
    
    // Card Container
    return (
       
        <Col>
         {/* {recetas ? <h1 className="text-muted text-center my-5 pt-5">Busca tus recetas</h1> : null } */}
        <CardColumns >
            {recetas.map(receta => (
                    <Receta
                        key={recetas.idDrink}
                        receta={receta}
                    />                
            ))}
        </CardColumns>
    </Col>
      );
}
 
export default ListaRecetas;