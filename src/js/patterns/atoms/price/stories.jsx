import React from 'react'

import Price from '.'

export default {
    title: 'Price',
}

export const simple = () => {
    return <Price variant='text-md' value={1000} />
}
