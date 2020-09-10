import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Mobile from './Mobile'
import Desktop from './Desktop'
import { topCategoryType } from './types'
import { useCurrentTopCategory, useNavPath } from './mainMenuState'
import { useDeviceType } from '@frontastic/catwalk/src/js/helper/hooks/useDeviceType.js'

const MainMenu = ({
    topCategories,
    logo, goToCartPage,
    goToWishlistPage,
    goToProfilePage,
    infoHeader,
    infoHeaderIcon,
    aboutHeader,
    aboutHeaderIcon,
    contactHeader,
    contactHeaderIcon }) => {
    const [currentTopCategory, setCurrentTopCategory] = useCurrentTopCategory(0)
    const [navPath, setNavPath] = useNavPath([])
    const deviceType = useDeviceType()

    const handleSelectTopCategory = (categoryId) => {
        setNavPath([])
        setCurrentTopCategory(categoryId)
    }

    const handleSelectNavItem = (item) => {
        setNavPath([...navPath, item])
    }

    const { cartItemsCount, wishListLineItemsCount } = useSelector((state) => {
        const cartLineItems = state.cart?.cart?.data?.lineItems || []
        const wishListLineItems = state.wishlist?.wishlist?.data?.lineItems || []
        return {
            cartItemsCount: cartLineItems.reduce(
                (accumulator, currentValue) => {
                    return accumulator + currentValue.count
                }, 0),
            wishListLineItemsCount: wishListLineItems.reduce(
                (accumulator, currentValue) => {
                    return accumulator + currentValue.count
                }, 0),
        }
    })

    if (!topCategories) {
        return null
    }

    // For performance reasons we hide the mobile navigation on desktop and vice versa.
    if (deviceType === 'mobile') {
        return (
            <Mobile
                topCategories={topCategories}
                logo={logo}
                currentTopCategory={currentTopCategory}
                handleSelectTopCategory={handleSelectTopCategory}
                navPath={navPath}
                setNavPath={setNavPath}
                cartItemsCount={cartItemsCount}
                wishListLineItemsCount={wishListLineItemsCount}
                goToCartPage={goToCartPage}
                goToWishlistPage={goToWishlistPage}
                goToProfilePage={goToProfilePage}
                infoHeader={infoHeader}
                infoHeaderIcon={infoHeaderIcon}
                aboutHeader={aboutHeader}
                aboutHeaderIcon={aboutHeaderIcon}
                contactHeader={contactHeader}
                contactHeaderIcon={contactHeaderIcon}
            />
        )
    }

    return (
        <Desktop
            topCategories={topCategories}
            logo={logo}
            currentTopCategory={currentTopCategory}
            handleSelectTopCategory={handleSelectTopCategory}
            navPath={navPath}
            onSelectNavItem={handleSelectNavItem}
            cartItemsCount={cartItemsCount}
            wishListLineItemsCount={wishListLineItemsCount}
            goToCartPage={goToCartPage}
            goToWishlistPage={goToWishlistPage}
            goToProfilePage={goToProfilePage}
        />
    )
}

MainMenu.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    logo: PropTypes.object,
    goToCartPage: PropTypes.func,
    goToWishlistPage: PropTypes.func,
    goToProfilePage: PropTypes.func,
    infoHeader: PropTypes.string,
    aboutHeaderIcon: PropTypes.string,
    aboutHeader: PropTypes.string,
    infoHeaderIcon: PropTypes.string,
    contactHeader: PropTypes.string,
    contactHeaderIcon: PropTypes.string,
}

export default MainMenu
