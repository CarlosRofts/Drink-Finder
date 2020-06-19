import React  from 'react';
import "./scss/style.scss"
// Components
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaRecetas from './components/ListaRecetas'
// import AlertError from './components/AlertError'

// Context
import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from './context/RecetasContext'
import ModalProvider from './context/ModalContext'
import SocialLinks from './components/SocialLinks'
// BS
import {Container  } from 'react-bootstrap'; 

function App() {  
    

 return (
   <CategoriasProvider> {/**Ahora los componentes tienen acceso directo a los props */}
     <RecetasProvider>
       <ModalProvider>
         <div className="bg-gradient" style={{ position: "absolute", zIndex: 0, top: 0, height: "89vh", width: "100%" }}>

           <Header
             titulo="Buscador De Bebidas"
           />
           <Container className="bg-transparent">
             <Formulario />
             <ListaRecetas />
             <SocialLinks/>
           </Container>
         </div>
       </ModalProvider>
     </RecetasProvider>
   </CategoriasProvider>
     );
}
export default App;
  