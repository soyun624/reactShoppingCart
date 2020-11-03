import React, {Component, Fragment} from 'react';
import './styles/Shopping-cart.scss'
import CartForm from './components/CartForm'
import CartList from './components/CartList'



class App extends Component{
    state ={
        cart:[]

    }
 
    handleSubmitForm = (quantity,item,price) =>{

        this.setState((prevState) => {
            return {cart : prevState.cart.concat({quantity:quantity, item:item, price:price})}
        })  

    }
    handleRemoveItem = (index)=>{
        this.setState((prevState)=>{
          
            console.log('index :'+index);
            return{cart : prevState.cart.filter((row, i) => i !== index)}
        })
    }


    handleRemoveAll =()=>{
        this.setState(()=>{
            return{cart :[]}
        })
    }


    render(){
        const {cart} = this.state;
        return(
            <Fragment>
                <h1>Shopping Cart</h1>
                {cart.length > 0 ? <CartList cartArr={cart} handleRemoveItem= {this.handleRemoveItem} handleRemoveAll= {this.handleRemoveAll}/> : <p>Cart is empty!</p>}
                <CartForm handleSubmitForm={this.handleSubmitForm}/>
            </Fragment>
            
        )
    }

}

export default App;