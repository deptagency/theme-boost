import React from 'react'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import { ReactComponent as VisaIcon } from 'Icons/visa-cart.svg'
import { ReactComponent as MastercardIcon } from 'Icons/mastercard-cart.svg'
import { ReactComponent as AmexIcon } from 'Icons/amex-cart.svg'
import { ReactComponent as PayPalIcon } from 'Icons/paypal-cart.svg'

const Payments = () => {
    return (
        <section className='flex'>
            <MastercardIcon className='mr-3 w-9 h-6' />
            <VisaIcon className='mr-3 w-9 h-6' />
            <AmexIcon className='mr-3 w-9 h-6' />
            <PayPalIcon className='w-9 h-6' />
        </section>
    )
}

export default ComponentInjector.return('Payments', Payments)
