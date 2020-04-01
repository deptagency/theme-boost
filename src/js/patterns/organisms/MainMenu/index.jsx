import React from 'react'
import PropTypes from 'prop-types'
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
            />
            <Desktop
                topCategories={topCategories}
                logo={logo}
                currentTopCategory={currentTopCategory}
                handleSelectTopCategory={handleSelectTopCategory}
                navPath={navPath}
                onSelectNavItem={handleSelectNavItem}
            />
        </>
    )
}

MainMenu.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    logo: PropTypes.object,
}

export default MainMenu
