import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountWishlist from '../../../patterns/organisms/Account/AccountWishlist'

const AccountWishlistsTastic = ({ wishlist }) => {
    return (
        <AccountWishlist
            wishlist={wishlist}
            handleRemoveFromWishlist={(itemId) => {
                app.getLoader('wishlist').removeLineItem(wishlist.data.wishlistId, {
                    lineItemId: itemId,
                })
            }}
            returnToHomePage={() => {
                app.getRouter().history.replace('/')
            }}
        />
    )
}

AccountWishlistsTastic.propTypes = {
    wishlist: PropTypes.object.isRequired,
}

export default tastify({
    translate: true,
    connect: {
        wishlist: true,
    },
})(AccountWishlistsTastic)
