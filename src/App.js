
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
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
                id: 1
            },
            {
                price: 909,
                title: 'Mobile Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 12,
                img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80',
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

getCartTotal = () => {
  const { products } = this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price;
  })
  return cartTotal;
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
        <div style={ {padding: 10, fontSize: 20}}>
          Total:{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
