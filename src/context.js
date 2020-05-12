import React, { Component } from 'react'
import  storeProduct from "./data";
import detailProduct from "./detailProduct";


const ProductContext = React.createContext();

//Provider

//Consumer
export default class ProductProvider extends Component {
        state = {
        products: [],
        detailProduct: detailProduct,
        cart:[],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTotal: 0,
        cartTax: 0,
        };

        componentDidMount() {
        this.setProduct();
        }

        setProduct = () => {
        let tempProduct = [];
        storeProduct.forEach((item) => {
            const singleItem = { ...item };
            tempProduct = [...tempProduct, singleItem];
        });
        this.setState(() => {
            return { products: tempProduct };
        });
        };

        getItem = (id) => {
        const product = this.state.products.find(
            (item) => item.id === id
        );
        return product;
        };
        handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
        };

        addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
            return {
                products: tempProducts,
                cart: [...this.state.cart,product],
            };
            },
            () => {
                this.addTotal();
            }
        );
    };
    
        openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        });
        };

    
        closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
        };
    
        increment = (id) => {
        console.log("Incremnting");
    };
    
        decrement = (id) => {
        console.log("Decrementing");
    };
    
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedItem = tempProducts[index];

        removedItem.inCart=false;
        removedItem.count = 0;
        removedItem.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products:[...tempProducts]
            }
        }, () => {
                this.addTotal();
        })


    };

    clearCart = () => {
        
        this.setState(() => {
            return {cart: []};
        }, () => {
                this.setProduct();
                this.addTotal();
        })
       
    }

    addTotal = () => {
        let subtotal = 0
        this.state.cart.map(item => (subtotal += item.total));
        const tempTax = subtotal * 0.1 //10% tax
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subtotal + tax
        
        this.setState(() => {
            return {
                cartSubTotal: subtotal,
                cartTax: tax,
                cartTotal:total
            }
        })
    }
render() {
return (
    <ProductContext.Provider
    value={{
            ...this.state,
            handleDetails: this.handleDetails,
            addToCart: this.addToCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart:this.clearCart
        
    }}
    >
    {this.props.children}
    </ProductContext.Provider>
);
}
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider,ProductConsumer}