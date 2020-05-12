import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import styled from "styled-components";

 class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                   
                    const { id, title, img, price, company, info, inCart } = value.detailProduct;
                    return (
                      <div className='container py-5'>
                        <div className='row'>
                          <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                            <h1>{title}</h1>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-10 mx-auto col-md-6 my-3'>
                            <img
                              src={img}
                              className='img-fluid'
                              alt='Product'
                            />
                          </div>
                          <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <h2>model:{title}</h2>
                                    <h4 className=" text-uppercase text-muted mt-3 mb-2">   
                                        made by:<span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className='text-blue'>
                                        <strong>
                                            price:<span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about the product:
                                    </p>

                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                Back To Product

                                            </ButtonContainer>
                                        </Link>

                                        <ButtonContainer disabled={inCart ? true : false} onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>

                                            {inCart?"In Cart":"Add to cart"}
                                        </ButtonContainer>
                                    </div>
                          </div>
                        </div>
                      </div>
                    );
                }}
            </ProductConsumer>
        )
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
export default Details;