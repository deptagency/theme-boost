import React from 'react';

import Badge from 'Atoms/Badge'
import IconButton from 'Atoms/button/IconButton'

import { ReactComponent as CartIcon } from 'Icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as WishlistIcon } from 'Icons/tailwind-icons/icon-heart.svg'

export default {
    title: "Badge"
}

export const cartIcon = () => (
    <Badge count={5} onClick={() => null}>
        <IconButton icon={<CartIcon />} />
    </Badge>
)

export const wishlistIcon = () => (
    <Badge count={5} onClick={() => null}>
        <IconButton icon={<WishlistIcon />} />
    </Badge>
)