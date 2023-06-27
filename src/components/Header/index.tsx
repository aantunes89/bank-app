import React from 'react'
import { Link } from "react-router-dom";

import { Container, HeaderIcon } from "./styles";

const Header = (): JSX.Element => {  
    return (
      <Container>
        <Link to="#" >
          <strong>Bank App</strong>                   
        </Link>
        
        <HeaderIcon to="/" >          
            <div>Login</div>            
        </HeaderIcon>


      </Container>
    );
  };
  
export default Header