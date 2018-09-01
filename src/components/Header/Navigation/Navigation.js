import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.scss';

const navigation = () => (
  <ul className={classes.Navigation}>
    <NavigationItem link="/creator/">Creator</NavigationItem>
    <NavigationItem link="/login/">Account</NavigationItem>
    <NavigationItem link="/about/">About</NavigationItem>
  </ul>
);

export default navigation;