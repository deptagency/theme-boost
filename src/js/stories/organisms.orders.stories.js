import React from 'react'

import OrganismsOrder from 'js/patterns/organisms/orders/order'

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