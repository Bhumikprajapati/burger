import React,{Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES={
salad:10,
meat:40,
bacon:20,
cheese:35
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:30,
        purchasable:false,
        purchasing:false
    }
    updatedIngredientHandler(ingredients){
        const sum=Object.keys(ingredients)
        .map(igKey=>{return ingredients[igKey]})
        .reduce((sum,elm)=>{
            return sum+elm
        },0)
        console.log(sum)
        this.setState({purchasable:sum>0})
    }
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const newCount=oldCount+1;
        const updatedIngredients={...this.state.ingredients}
      updatedIngredients[type]=newCount
       const priceAddition=INGREDIENT_PRICES[type];
       const oldPrice=this.state.totalPrice;
       const newPrice=oldPrice+priceAddition;

        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })
        this.updatedIngredientHandler(updatedIngredients)
    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const newCount=oldCount-1;
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=newCount
         const priceDeduction=INGREDIENT_PRICES[type];
         const oldPrice=this.state.totalPrice;
         const newPrice=oldPrice-priceDeduction;
        //  if(oldCount<=0){
        //      return;
        //  }
          this.setState({
              ingredients:updatedIngredients,
              totalPrice:newPrice
          })
          this.updatedIngredientHandler(updatedIngredients)
    }
    purchaseHandler=()=>{
        this.setState({
            purchasing:true
        })
    }
    purchaseCancleHandler=()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler=()=>{
        alert("You Clicked On Continue!!")
    }
    render()
    {
        const disabledInfo={...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
                //salad:false,meat:true like that
        }
        return(
            <Auxiliary>
                <Modal show={this.state.purchasing}
                modalClose={this.purchaseCancleHandler} >
                <OrderSummary 
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                continue={this.purchaseContinueHandler}
                cancle={this.purchaseCancleHandler}
                />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                />
            </Auxiliary>
        )
    }
}
export default BurgerBuilder;