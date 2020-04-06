import React from 'react'

import Cart from 'Organisms/Cart'

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
    const cart = {
        sum: 20,
        currency: 'Eur',
        data: {
            lineItems: [{
                lineItemId: 1,
                name: 'Lorem ipsum',
                count: 2,
                price: 20,
                variant: {
                    images: [
                        'https://res.cloudinary.com/dlwdq84ig/image/upload/c_fill,f_auto,g_faces:auto,h_264,q_auto,w_176/sds9ezhfscrzjp3kdi2y',
                    ],
                    attributes: {
                        size: 2,
                        color: {
                            label: 'Green',
                        },
                        designer: {
                            label: 'Designer',
                        },
                    },
                },
            }],
        },
    }

    return (
        <div>
            <Cart cart={cart} />
        </div>
    )
}
