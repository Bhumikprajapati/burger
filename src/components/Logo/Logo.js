import React from 'react';
import burgerimage from '../../assets/images/burger-logo.png'
import classes from './Logo.css';
const logo=(props)=>(
    <div className={classes.Logo}>
<img src={burgerimage} alt="Burger Logo"/>
</div>
)
export default logo;