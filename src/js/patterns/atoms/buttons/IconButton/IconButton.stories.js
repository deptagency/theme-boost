import React from 'react'

import IconButton from './'
import { ReactComponent as CartIcon } from '../../../../../icons/tailwind-icons/icon-cart.svg'

export default {
    title: '2.Atoms|Buttons|IconButton',
}

export const iconButtonStory = () => {
    return <IconButton icon={<CartIcon />}>Shopping Cart</IconButton>
}

iconButtonStory.story = {}
