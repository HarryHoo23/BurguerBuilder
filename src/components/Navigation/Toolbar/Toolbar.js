import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../../components/Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <Navigationitems />
        </nav>
    </header>
);

export default toolbar;