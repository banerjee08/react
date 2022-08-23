
// import './App.css';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
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
    // get products from state
    const { products } = this.state
    // get index of each product
    const index = products.indexOf(product);

    // change the quantity of the particular product by 1
    products[index].qty += 1;

    this.setState({ 
        products: products
    })
}

handleDecreaseQuantity = (product) => {
    console.log("Decrease qty by 1", product);
    const { products } = this.state
    const index = products.indexOf(product);
    if(products[index].qty === 0){
        return
    }
    products[index].qty -= 1;
    this.setState({ products: products})
}

handleDeleteProduct = (id) => {
    const { products } = this.state;

    // return another array where the particular id will not be there
    const items = products.filter((item) => item.id !== id)

    this.setState({products:items})

}
getCartCount = () => {
  const { products } = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}
  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <h1>Cart</h1>
        <Cart 
        products = { products }
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        
      </div>
    );
  }
}

export default App;
