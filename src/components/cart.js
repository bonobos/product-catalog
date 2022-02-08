import React, { useState, useEffect }  from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "../styles/cart.css"

const Cart = ({open}) => {
  return (
    <div className={ classNames("Cart", open ? "open" : "closed") }>
    </div>
  )
}

Cart.propTypes = {
  open: PropTypes.bool,
}

Cart.defaultProps = {
  open: false,
}

export default Cart;
