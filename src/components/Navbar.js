import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';


 class Navbar extends Component {
    render() {
        return (
          <NavWrapper className='navbar navbar-expand-sm  px-sm-5'>
            {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

            <ul className='navbar-nav align-item-center'>
              <l1 className='nav-item ml-5'>
                <StyledLink to='/' >
                  <h1>FALTU</h1>
                </StyledLink>
              </l1>

              <li className='nav-item ml-5'>
                <StyledLink to='/'>
                  <h2>Products</h2>
                </StyledLink>
              </li>
            </ul>

            <Link to='/cart' className='ml-auto'>
              <ButtonContainer>
                <i className='fas fa-cart-plus' />
                My-Cart
              </ButtonContainer>
            </Link>
          </NavWrapper>
        );
    }
}

const ButtonContainer = styled.button`
text-transform:capitalize;
background-color:grey;
font-size:1.43rem;
border:0.05rem solid var(--mainYellow);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainYellow);
    opacity:0.1rem;
    
}
`
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link:{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
}
`
const StyledLink = styled(Link)`
  color:var(--mainYellow);
  font-weight: bold;
`;



export default Navbar