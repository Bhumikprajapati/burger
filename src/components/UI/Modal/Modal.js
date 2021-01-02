import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop'
const modal=(props)=>(
    <Auxiliary >
        <Backdrop show={props.show}
        backing={props.modalClose}/>
    <div  className={classes.Modal}
    style={{
        transform:props.show? 'translateY(0)':'translateY(-100vh)',
        opacity:props.show?'1':'0'
    }}>
        {props.children}
    </div>
    </Auxiliary>
)
export default modal;