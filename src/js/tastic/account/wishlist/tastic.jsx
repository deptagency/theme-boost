import React from 'react'
import { useSelector } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountWishlist from 'Organisms/Account/AccountWishlist'

const AccountWishlistsTastic = () => {
    const { session: { loggedIn }, wishlist } = useSelector((state) => {
        return {
            session: state.app.context.session,
            wishlist: state.wishlist.wishlist,
        }
    })

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

export default AccountWishlistsTastic
