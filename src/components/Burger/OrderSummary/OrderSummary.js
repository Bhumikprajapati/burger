import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button';
const orderSummary=(props)=>{
const ingredientSummary=Object.keys(props.ingredients)
        .map((igKey)=>{
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
        })
   return(
        <Auxiliary>
            <h3> Your Delicious Burger is ready!!</h3>
            <p>And you are having following ingredients in it...</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Want to Checkout?</p>
            <p><strong>Total Price: {props.price}</strong></p>
            <Button btnType="Danger" 
            clicked={props.cancle}>CANCLE</Button>
            <Button btnType="Success"
            clicked={props.continue}>CONTINUE</Button>
        </Auxiliary>
    )
}
export default orderSummary;