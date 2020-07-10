import React from 'react';

import Icon from '../../../assets/Images/burger-icon.png';
import classes from './ToggleButton.css';

const toggleButton = (props) => (
	<div className={classes.ToggleButton} onClick={props.clicked}>
		<img src={Icon} alt="BurgerIcon" />
	</div>
);

export default toggleButton;