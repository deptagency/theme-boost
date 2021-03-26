import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as Heart } from '../../../../icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as HeartFull } from '../../../../icons/tailwind-icons/icon-heart-full.svg'

function WishlistButton ({ onClick, className = '', active = false }) {
    return active ? (
        <HeartFull className={`cursor-pointer ${className}`} onClick={onClick} />
    ) : (
        <Heart className={`cursor-pointer ${className}`} onClick={onClick} />
    )
}

WishlistButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
}

export default WishlistButton
