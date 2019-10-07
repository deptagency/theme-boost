import React from 'react';
import PropTypes from 'prop-types';

import OrganismsHeaderSlideIn from "../../organisms/base/header-slide-in";
import MoleculesButton from "../../molecules/buttons/button";
import emptyCart from "../../../../../icons/catwalk-frontend/empty_cart.svg"

const TemplatesEmptyCart = ({setIsOpen}) => {
    return (
        <div>
            <div className='empty-cart-content'>

                <img src={emptyCart} className='empty-cart-icon' alt='Empty cart' />
                <div className='empty-cart-description'>Der Warenkorb ist noch leer.</div>
                <MoleculesButton size='full-width' type='primary'>
                    Jetzt anmelden
                </MoleculesButton>
            </div>
        </div>
    );
};

TemplatesEmptyCart.propTypes = {

};

export default TemplatesEmptyCart;