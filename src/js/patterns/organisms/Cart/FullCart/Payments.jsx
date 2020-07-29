import React from 'react'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import { ReactComponent as VisaIcon } from 'Icons/visa.svg'
import { ReactComponent as MastercardIcon } from 'Icons/mastercard.svg'
import { ReactComponent as PayPalIcon } from 'Icons/paypal.svg'

const Payments = () => {
    return (
        <section className='flex'>
            <MastercardIcon className='mr-3 w-9 h-6 text-primary-main fill-current' />
            <VisaIcon className='mr-3 w-9 h-6 text-primary-main fill-current' />
            <PayPalIcon className='w-9 h-6 text-primary-main fill-current' />
        </section>
    )
}

export default ComponentInjector.return('Payments', Payments)
