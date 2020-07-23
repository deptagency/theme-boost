import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import get from 'lodash/get'
import Mobile from './Mobile'
import Desktop from './Desktop'
import { topCategoryType } from './types'
import { useCurrentTopCategory, useNavPath } from './mainMenuState'

const MainMenu = ({
    topCategories,
    logo, goToCartPage,
    goToWishlistPage,
    goToProfilePage,
    infoHeader,
    infoHeaderIcon,
    aboutHeader,
    aboutHeaderIcon,
    contacHeader,
    contactHeaderIcon }) => {
    const [currentTopCategory, setCurrentTopCategory] = useCurrentTopCategory(0)
    const [navPath, setNavPath] = useNavPath([])

    const handleSelectTopCategory = (categoryId) => {
        setNavPath([])
        setCurrentTopCategory(categoryId)
    }

    const handleSelectNavItem = (item) => {
        setNavPath([...navPath, item])
    }

    const { cartItemsCount, wishListLineItemsCount } = useSelector((state) => {
        const cartLineItems = get(state, 'cart.cart.data.lineItems', [])
        const wishListLineItems = get(state, 'wishlist.wishlist.data.lineItems', [])
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

    return (
        <>
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
                contacHeader={contacHeader}
                contactHeaderIcon={contactHeaderIcon}
            />
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
        </>
    )
}

MainMenu.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    logo: PropTypes.object,
    goToCartPage: PropTypes.func,
    goToWishlistPage: PropTypes.func,
    goToProfilePage: PropTypes.func,
    infoHeader: PropTypes.object,
    aboutHeaderIcon: PropTypes.string,
    aboutHeader: PropTypes.object,
    infoHeaderIcon: PropTypes.string,
    contacHeader: PropTypes.object,
    contactHeaderIcon: PropTypes.string,
}

export default MainMenu
