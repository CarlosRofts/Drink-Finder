import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertError = ({message , guardarError , margin}) => {
    var classes = ` fade ${margin}`
    return ( 
        <Alert className={classes} variant="danger" onClose={() => guardarError(false)} dismissible >
            <Alert.Heading>Error</Alert.Heading>
            <p>
                {message }
            </p>
        </Alert>    
     );
}
 
export default AlertError;