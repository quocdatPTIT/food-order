import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [isHighlightBtn, setHighlightBtn] = useState(false);
  const ctx = useContext(CartContext);

  const { items } = ctx;

  const numberOfItems = items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  const buttonStyle = `${classes.button} ${isHighlightBtn ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setHighlightBtn(true);

    const timer = setTimeout(() => {
      setHighlightBtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonStyle} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
