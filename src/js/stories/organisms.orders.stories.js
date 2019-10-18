import React from 'react'

import OrganismsOrder from 'js/patterns/organisms/orders/order'
import OrganismsOrderConfirmation from 'js/patterns/organisms/orders/order-confirmation'

export default {
    title: '3.Organisms|Orders',
}

export const order = () => {
    return (
        <OrganismsOrder />
    )
}

order.story = {
    name: 'Order All',
}

export const orderConfirmation = () => {
    return (
        <OrganismsOrderConfirmation />
    )
}

orderConfirmation.story = {
    name: 'Order Confirmation All',
}
