import React from 'react'
import { FormattedMessage } from 'react-intl'

import Button from 'Atoms/button'
import { ReactComponent as EmptyCartIcon } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

const EmptyCart = () => {
    return (
        <div className='flex flex-col items-center justify-center h-64'>
            <div className='mx-auto text-center'>
                <EmptyCartIcon className='mx-auto mb-3 w-6 h-6 text-neutral-900 fillCurrent' />

                <div className='text-2xl text-neutral-900 leading-none font-bold'>
                    <FormattedMessage id='cart.emptyCart.text' />
                </div>

                <Button variant='btn btn-primary mt-4'>
                    <FormattedMessage id='cart.registerNow' />
                </Button>
            </div>
        </div>
    )
}

export default EmptyCart
