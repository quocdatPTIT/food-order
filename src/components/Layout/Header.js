import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div>
        <img
          src={mealsImage}
          alt='A table full meals'
          className={classes['main-image']}
        />
      </div>
    </Fragment>
  );
};

export default Header;
