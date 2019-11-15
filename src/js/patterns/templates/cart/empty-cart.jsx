import React from 'react'

import MoleculesButton from '../../molecules/buttons/button'
import emptyCart from '../../../../icons/empty-cart.svg'

const TemplatesEmptyCart = () => {
    return (
        <div>
            <section className='o-container-small o-distance o-prevent-space'>
                <img src={emptyCart} alt='Empty cart' className='o-image-center' />
                <div className='o-distance-m'>
                    <p className='u-text-center'>Der Warenkorb ist noch leer.</p>
                    <MoleculesButton size='boss' type='primary' className='o-distance-s'>Jetzt anmelden</MoleculesButton>
                </div>
            </section>
        </div>
    )
}

TemplatesEmptyCart.propTypes = {

}

export default TemplatesEmptyCart
