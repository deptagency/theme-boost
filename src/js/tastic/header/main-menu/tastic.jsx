import React from 'react'
import PropTypes from 'prop-types'
import ReferencePropType from '@frontastic/catwalk/src/js/component/reference'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import MainMenu from 'Organisms/MainMenu'

const MainMenuTastic = ({ data }) => {
    return (
        <MainMenu
            topCategories={data.topCategories}
            logo={data.logo}
            goToCartPage={() => { app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart') }}
            goToWishlistPage={() => { app.getRouter().push('Frontastic.Frontend.Master.Account.wishlists', { wishlist: null }) }}
            goToProfilePage={() => { app.getRouter().push('Frontastic.Frontend.Master.Account.profile') }}
        />
    )
}

MainMenuTastic.propTypes = {
    data: PropTypes.shape({
        topCategories: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                reference: () => {
                    return ReferencePropType
                },
            })
        ),
        logo: PropTypes.shape({
            media: PropTypes.object,
        }),
    }),
}

export default tastify()(MainMenuTastic)
