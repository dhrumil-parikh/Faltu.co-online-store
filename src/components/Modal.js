import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { price, img, title } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 
                                        text-center text-capitalize p-5">
                                            <h5>Item Added to the Cart</h5>
                                            <img src={img} className="img-fluid" alt="Product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price:$ {price}</h5>
                                            <Link to='/' >
                                                <ButtonContainer onClick={()=>closeModal()}>
                                                        Continue Shopping
                                                </ButtonContainer>
                                            </Link>
                                            <Link to='/cart' >
                                                <ButtonContainer onClick={()=>closeModal()}>
                                                        Go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
                
            
        );
    }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  background: rgba(0, 0, 0, 0.3);
  display:flex;
  align-items:center;
  justify-content:center;
  #modal{
      background:var(--mainWhite)
  }

`;
const ButtonContainer = styled.button`
  text-transform: capitalize;
  background-color: grey;
  font-size: 1.43rem;
  border: 0.05rem solid var(--mainYellow);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainYellow);
    opacity: 0.1rem;
  }
`;

export default Modal;

