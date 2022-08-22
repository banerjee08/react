import React from 'react';

// create class component
class CartItem extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // second alternate solution
    //     // this.increaseQuantity = this.increaseQuantity.bind(this)
    //     // this.testing();
    // }

    // testing(){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000)
    //     })
    //     promise.then(() => {
    //         // setState acts like a synchronus call
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});
    //         this.setState({qty: this.state.qty + 10});

    //         console.log('state', this.state);
    //     })
    // }
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this', this.state);
        // setState form 1 - by giving it an object
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form 2 = pass a function i.e. callback
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log('this.state', this.state);
        });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;

        if(qty === 0){
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }
    render () {
        console.log('this.props', this.props);
        // object destructuring
        const {price, title, qty} = this.props.product;
        return (
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                
                <div className="right-block">
                <div style={ { fontSize: 25}}>{title}</div>
                <div style={ { color: '#777'}}>{price}</div>
                <div style={ { color: '#777'}}>Qty : {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        // onClick={this.increaseQuantity.bind(this)} 
                        // aleternate option
                        onClick = {this.increaseQuantity}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        onClick = {this.decreaseQuantity}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                    />
                </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ddd'
    }
}
export default CartItem;