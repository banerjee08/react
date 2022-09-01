
// import './App.css';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import {
  doc,
  setDoc,
  collection,
  updateDoc,
  deleteDoc,
  onSnapshot,
  addDoc,
  query,
  where,
  orderBy,
  // doc,
} from "firebase/firestore";
import { db } from "./index";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [],
        loading: true
    }
}

// fetchind data from firebase
// componentDidMount() {
//   firebase
//     .firestore()
//     .collection('products')
//     .get()
//     .then(snapshot => {
//       console.log(snapshot);
//     })
// }

//function to change 
async componentDidMount() {
     const q = query(
       collection(db, "products"),
       where("price", ">", 0),
       orderBy("price")
     );
     const unsub = await onSnapshot(q, (querySnapshot) => {
       const getProducts = [];
       console.log(querySnapshot);
       querySnapshot.forEach((doc) => {
         const product = doc.data();
         product.id = doc.id;
         getProducts.push(product);
       });
       console.log(getProducts);
       this.setState({ products: getProducts, loading: false });
     });
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
    if(product.qty > 0){
      cartTotal = cartTotal + product.qty * product.price;
    }
    return '';
  })
  return cartTotal;
}
  render() {
    const { products,loading } = this.state;

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
        {/* loading */}
        {loading && <h1>Loading Products...</h1>}
        <div style={ {padding: 10, fontSize: 20}}>
          Total:{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;

