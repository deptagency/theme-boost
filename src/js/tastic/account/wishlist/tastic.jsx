import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountWishlist from 'Organisms/Account/AccountWishlist'

const AccountWishlistsTastic = ({ context, wishlist }) => {
    const { session: { loggedIn } } = context

    if (!loggedIn) {
        app.getRouter().push('Frontastic.Frontend.Master.Account.index')
    }

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
    context: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
}

export default tastify({ translate: true, connect: { context: true, wishlist: true } })(AccountWishlistsTastic)
