import React from 'react';

import './Burger.css';

const burger = ( props ) => {
	return (
		<div className="Burger">
			<p onClick={props.click}>I am {props.type} burger and cost {props.price} leva.</p>
			<input type="text" onChange={props.changed} value={props.type}/>
		</div>
	)
};

export default burger;
