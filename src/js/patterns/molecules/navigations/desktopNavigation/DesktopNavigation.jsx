import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { DesktopNavigationTree } from './components'
import { topCategoryType } from '../mobileNavigation/types'

function MainDesktopNavigation ({ topCategories, currentTopCategory, navPath, handleSelectNavItem }) {
    // render nothing if there's no content
    if (!topCategories) {
        return null
    }

    return (
        <nav>
            {topCategories[currentTopCategory].tree && <DesktopNavigationTree
                items={topCategories[currentTopCategory].tree.children}
                navPath={navPath}
                onSelectItem={handleSelectNavItem}
            />}
        </nav>
    )
}

MainDesktopNavigation.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    navPath: PropTypes.node,
    handleSelectNavItem: PropTypes.node,
    currentTopCategory: PropTypes.node,
}

MainDesktopNavigation.defaultProps = {}

export const DesktopNavigation = ComponentInjector.return('DesktopNavigation', MainDesktopNavigation)
