import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import get from 'lodash/get'
import Mobile from './Mobile'
import Desktop from './Desktop'
import { topCategoryType } from './types'
import { useCurrentTopCategory, useNavPath } from './mainMenuState'

const MainMenu = ({ topCategories, logo }) => {
    const [currentTopCategory, setCurrentTopCategory] = useCurrentTopCategory(0)
    const [navPath, setNavPath] = useNavPath([])

    const handleSelectTopCategory = (categoryId) => {
        setNavPath([])
        setCurrentTopCategory(categoryId)
    }

    const handleSelectNavItem = (item) => {
        setNavPath([...navPath, item])
    }

    const { cartItemsCount } = useSelector((state) => {
        const cartLineItems = get(state, 'cart.cart.data.lineItems', [])
        return {
            cartItemsCount: cartLineItems.reduce(
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
            />
            <Desktop
                topCategories={topCategories}
                logo={logo}
                currentTopCategory={currentTopCategory}
                handleSelectTopCategory={handleSelectTopCategory}
                navPath={navPath}
                onSelectNavItem={handleSelectNavItem}
                cartItemsCount={cartItemsCount}
            />
        </>
    )
}

MainMenu.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    logo: PropTypes.object,
}

export default MainMenu
