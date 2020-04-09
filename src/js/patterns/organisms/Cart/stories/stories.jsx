import React from 'react'

import Cart from 'Organisms/Cart'
import CartData from './cart.json'

export default {
    title: 'Cart',
}

export const empty = () => {
    const cart = {
    }

    return (
        <div>
            <Cart cart={cart} />
        </div>
    )
}

export const full = () => {
    return (
        <div>
            <Cart cart={CartData} />
        </div>
    )
}
