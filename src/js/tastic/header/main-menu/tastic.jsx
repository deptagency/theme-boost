import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import MainMenu from '../../../patterns/organisms/MainMenu'

const MainMenuTastic = ({ data }) => {
    return (
        <MainMenu
            topCategories={data.topCategories}
            logo={data.logo}
            goToCartPage={() => {
                app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart')
            }}
            goToWishlistPage={() => {
                app.getRouter().push('Frontastic.Frontend.Master.Account.wishlists', { wishlist: null })
            }}
            goToProfilePage={() => {
                app.getRouter().push('Frontastic.Frontend.Master.Account.profile')
            }}
        />
    )
}

MainMenuTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify({ translate: true })(MainMenuTastic)
