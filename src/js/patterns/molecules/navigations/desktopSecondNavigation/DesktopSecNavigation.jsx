import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { SecondNavigationDesktopTree } from './components'
import { topCategoryType } from './../mobileNavigation/types'

function MainDesktopSecNavigation ({ topCategories, currentTopCategory, navPath, handleSelectNavItem }) {
    // render nothing if there's no content
    if (!topCategories) {
        return null
    }

    return (
        <nav>
            {topCategories[currentTopCategory].tree && <SecondNavigationDesktopTree
                items={topCategories[currentTopCategory].tree.children}
                navPath={navPath}
                onSelectItem={handleSelectNavItem}
            />}
        </nav>
    )
}

MainDesktopSecNavigation.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    navPath: PropTypes.node,
    handleSelectNavItem: PropTypes.node,
    currentTopCategory: PropTypes.node,
}

MainDesktopSecNavigation.defaultProps = {}

export const DesktopSecNavigation = ComponentInjector.return('DesktopSecNavigation', MainDesktopSecNavigation)
