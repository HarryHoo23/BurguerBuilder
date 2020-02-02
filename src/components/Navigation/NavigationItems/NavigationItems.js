import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './Item/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">CheckOut Builder</NavigationItem>
    </ul>
);

export default navigationItems;