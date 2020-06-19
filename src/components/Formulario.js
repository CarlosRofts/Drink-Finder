import React , {Fragment , useState,useContext} from 'react'; 

import {CategoriasContext} from '../context/CategoriasContext'
import {RecetasContext} from '../context/RecetasContext'

// import axios from 'axios'
import { Button , Form , Col } from 'react-bootstrap'; 
import AlertError from './AlertError'


const Formulario = () => { 

    // Context
    const {categorias} = useContext(CategoriasContext) //disponemos los props de context
    const {buscarRecetas , guardarConsultar} =  useContext(RecetasContext)

    // State Local
    const [busqueda,guardarBusqueda] = useState({
      nombre: '',
      categoria:''
    })
    const [error, guardarError] = useState(false)
    
    // fn's

    // OnChange Event Fn
    const handleChange = e => {
        // update state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    // submit (early dev)
    // const handleSubmit = e => {
    //   e.preventDefault();
    //   // validar
    //   if(ciudad.trim() === '' || pais.trim() === ''){
    //     guardarError(true)
    //     return
    //   } 
    //   guardarError(false) //no hay error
    //   guardarConsultar(true) //indicamos que se puede realizar una peticion
    //   // pasar al Componente Principal
    // }

    
    // submit
    const handleSubmit = e => {
      e.preventDefault();
      // validar
      if(busqueda.nombre.trim() === '' || busqueda.categoria.trim() === ''){
        guardarError(true); return
      } 
      guardarError(false) //no hay error
      guardarConsultar(true) //indicamos que se puede realizar una peticion
      buscarRecetas(busqueda)
      // pasar al Componente Principal
    }

    return (  
      <Fragment>
        <h3 className="text-center text-white col my-5">Busca tus Bebidas por Categoría o Ingredientes</h3>
        <Form
          className="my-5 mx-5 mx-md-0"    
          onSubmit={e => {handleSubmit(e)}}
        >
          
          <Form.Row>
            <Form.Group as={Col} className="col-12 col-md-4">
              {/* <Form.Label>Ingredientes</Form.Label> */}
              <Form.Control placeholder="Buscar por Ingrediente"
                name="nombre"
                id=""
                // value={ciudad}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} className="col-12 col-md-4">
              {/* <Form.Label>Categoría</Form.Label> */}
              <Form.Control as="select"
                name="categoria"
                className="align-center text-center"
                // value={pais}
                onChange={handleChange}
              > <option value="">Selecciona una Categoria</option>
                {
                  categorias.map(categoria => (
                    <option
                      key={categoria.strCategory}
                      value={categoria.strCategory}
                    >
                      {categoria.strCategory}
                    </option>
                  ))
                }


              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} className="d-flex justify-content-center" >
              <Button
                variant="secondary"
                type="submit"
                className="col my-auto font-weight-bolder"
              >
                Buscar Recetas
              </Button>
            </Form.Group>

          </Form.Row>
          {error
            ?
            <AlertError
              guardarError={guardarError}
              message="Todos los campos son obligatorios"
              margin="mb-4  mx-auto w-50"
            />
            :
            null
          }
        </Form>
      </Fragment>
    );
}
 
export default Formulario;