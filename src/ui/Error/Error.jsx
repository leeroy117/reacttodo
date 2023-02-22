import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

function Error({error}) {
    return ( 
        <React.Fragment>
            <h3>Sorry there is an Error..</h3>
            <FontAwesomeIcon icon={faBan}/>
            <h5>{error}</h5>
        </React.Fragment>
     );
}

export {Error} ;