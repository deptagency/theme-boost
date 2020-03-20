import React from 'react'

import { ReactComponent as Heart } from '../../../../icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as HeartFull } from '../../../../icons/tailwind-icons/icon-heart-full.svg'

function WishlistButton({ onClick, className = '', active = false }) {
    return active ? (
        <HeartFull className={`cursor-pointer ${className}`} onClick={onClick} />
    ) : (
        <Heart className={`cursor-pointer ${className}`} onClick={onClick} />
    )
}

export default WishlistButton
