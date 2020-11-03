import React, {Component, Fragment} from 'react';
import '../styles/CartList.scss'

class CartList extends Component{


    
    renderTableHeader = () =>{
        return(

            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Cost</th>
                <th></th>
            </tr>

        )
    }

    renderTableBody = (cartArr) => {
        let totalCost = 0;
        return(
            cartArr.map((cart, index) => 

                    <tr key={index}>
                        <td id='item'>{cart.item}</td>
                        <td>${cart.price}</td>
                        <td>{cart.quantity}</td>
                        <td id='totalPrice'>${cart.price * cart.quantity}</td>
                        <td><button onClick={()=>this.props.handleRemoveItem(index)}>Remove</button></td>
                    </tr>
                   

            ))
    }

    calculateCost = () =>{
       let totalCost = 0;
        return(

            <th>${totalCost}</th>
        
        )
    }


    renderCart = (cartArr) =>{
       
        return(
            <table>
                <thead>{this.renderTableHeader()}</thead>
                <tbody>
                    {this.renderTableBody(this.props.cartArr)}
                    <tr>
                        <th>Total</th>
                        <td></td>
                        <td></td>
                         {this.calculateCost()}
                        <td><button onClick={()=>this.props.handleRemoveAll()}>Remove All</button></td>
                    </tr>
                </tbody>
            </table>
        )
    }
    render(){

        return(
            <div>
                {this.renderCart(this.props.cartArr)}
             </div>
        )

    }


}

export default CartList;