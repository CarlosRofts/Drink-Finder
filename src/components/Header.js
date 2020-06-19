import React, {Fragment} from 'react';
const Header = ({titulo}) => {
    return ( 
        <Fragment>
            <div className=" mt-5 mt-md-0 my-0 my-md-5 pb-1 pb-md-5 text-white text-center "  >
                <h1 className=" display-5  font-weight-bolder" style={{opacity:.7}}>{titulo}</h1>
            </div>
        </Fragment>
     );
}
 
export default Header;
