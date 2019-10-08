import React from 'react'

import MoleculesButton from '../../molecules/buttons/button'
import emptyCart from '../../../../icons/empty_cart.svg'

const TemplatesEmptyCart = () => {
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
    )
}

TemplatesEmptyCart.propTypes = {

}

export default TemplatesEmptyCart
