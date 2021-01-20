import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import MainMenu from 'Organisms/MainMenu'

const MainMenuTastic = ({data}) => {
    return (
        <MainMenu
            topCategories={data.topCategories}
            logo={data.logo}
            goToCartPage={() => {app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart')}}
            goToWishlistPage={() => {app.getRouter().push('Frontastic.Frontend.Master.Account.wishlists', {wishlist: null})}}
            goToProfilePage={() => {app.getRouter().push('Frontastic.Frontend.Master.Account.profile')}}
            infoHeader={data.infoHeader}
            infoHeaderIcon={data.infoHeaderIcon}
            aboutHeader={data.aboutHeader}
            aboutHeaderIcon={data.aboutHeaderIcon}
            contactHeader={data.contactHeader}
            contactHeaderIcon={data.contactHeaderIcon}
        />
    )
}

MainMenuTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify({translate: true})(MainMenuTastic)
