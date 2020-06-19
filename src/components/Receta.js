import React,{useContext,useState}from 'react'
import {ModalContext} from '../context/ModalContext'
// BS - MATERAL UI
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';




//-Modal UI - Styled Components
// Base Estyles
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
// CustomStyles
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: "auto",
      height: '90vh',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflowY : "scroll",
      border : "none",
    },
    
}));




const Receta = ({receta}) => {

     // Context - Extrayendo Resultados de API 
     const{infoReceta, guardarIdReceta, guardarReceta} = useContext(ModalContext)
     // Local State
     const{strDrinkThumb,strDrink,idDrink} = receta

    //- Conf. Material UI - MODAL
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

    // Debido a que no vienen los datos en un array lo meteremos en uno para poder iterar
      const mostrarIngredientes = infoReceta => {
          let ingredientes = [] 
          for(let i = 1; i<16; i++){//for loop
              if(infoReceta[`strIngredient${i}`]){ //if true
                  ingredientes.push(
                        <li style={{listStyle:"none"}}>{infoReceta[`strIngredient${i}`]} 
                        {infoReceta[`strMesure${i}`]}</li>
                    )
              }
          }
          return ingredientes
      }

   

    //! Validar imagen vacia
    const imagen = {receta}
        ?
            <Card.Img variant="top"  src={strDrinkThumb} alt={strDrink} />
        : null 

    return (
        <Col as="div" >
            <Card style={{ overflow: "hidden" }} className="shadow-sm">
                {imagen /**Validación de error de imagen*/}
                <Card.Body>
                    <Card.Title className="font-weight-bolder text-secondary">
                        {strDrink}
                    </Card.Title>
                    <Card.Text>
                        {/* <p>{description}</p> */}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className=" borderless">
                    <Button
                        variant=""
                        className="btn text-primary"
                        onClick={() => {
                            guardarIdReceta(idDrink)
                            handleOpen()
                        }}
                    >Ver mas...
                    </Button>

                    <Modal
                        open={open}
                        onClose={() => {
                            guardarIdReceta(null) //limpiar state
                            guardarReceta({}) //limpiar state
                            handleClose()
                        }}
                    >
                        <div
                            style={modalStyle  } //Asignando Styles
                            className={classes.paper}
                        >
                            <Container>
                                <h2 className="my-2 text-secondary font-weight-bolder" >{infoReceta.strDrink}</h2>
                                <Col>
                                    <h3>Instrucciones:</h3>
                                    <p >
                                        {infoReceta.strInstructions}
                                    </p>
                                </Col>
                                
                                <Row classNames="justify-centent-center">
                                    <img className="img img-fluid my-2 mx-auto rounded-circle shadow-md" src={infoReceta.strDrinkThumb} width="40%"  alt="" />
                                    
                                </Row>

                                <Col className="text-center">
                                    <h3>Ingredientes:</h3>
                                    <ul className="ml-2">
                                        {mostrarIngredientes(infoReceta)}
                                    </ul>
                                </Col>

                            </Container>
                        </div>
                    </Modal>


                </Card.Footer>
            </Card>
        </Col>
    );
}
 
export default Receta;