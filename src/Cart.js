import React from 'react';
import CartItem from './CartItem';

// create class component
class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 909,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 12,
                    img: '',
                    id: 3
                },
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        console.log("Increase qty by 1", product);
        // get products from start
        const { products } = this.state
        // get index of each product
        const index = products.indexOf(product);

        // change the quantity of the particular product by 1
        products[index].qty += 1;

        this.setState({ 
            products: products
        })
    }
    render(){
        const { products } = this.state;
        return (
            
            <div className="cart">
                {products.map((product) => {
                    return (    
                        <CartItem 
                        product={product} 
                        key={product.id} 
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        />
                    )
                })}
            </div>
        );
    }
}


export default Cart;