import React from 'react'
import logo from './stories/logo'
import CheckoutHeader from './index'

export default {
    title: 'Checkout Header',
}

export const checkoutHeader = () => {
    return (
        <div>
            <CheckoutHeader
                logoStoryBook={logo}
            />
        </div>
    )
}
