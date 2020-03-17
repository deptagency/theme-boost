import React from 'react'

import Button from '../../atoms/buttons/button'
import { ReactComponent as EmptyCartIcon } from '../../../../icons/empty-cart.svg'
import { FormattedMessage } from 'react-intl'

const EmptyCart = () => {
    return (
        <div className='block p-8 bg-gray-100 leading-none rounded-lg'>
            <div className='w-full max-w-480px ml-auto mr-auto'>
                <div className='text-center'>
                    <EmptyCartIcon className='c-icon c-icon--xxl u-text-color-300' />
                </div>
                <div className='mt-8 text-center'>
                    <h2 className='text-4xl leading-tight md:text-5xl'><FormattedMessage id='cart.emptyCart.title' /></h2>
                    <p><FormattedMessage id='cart.emptyCart.text' /></p>
                    <Button size='boss' type='primary' className='o-distance-m'>
                        <FormattedMessage id='cart.registerNow' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

EmptyCart.propTypes = {

}

export default EmptyCart
