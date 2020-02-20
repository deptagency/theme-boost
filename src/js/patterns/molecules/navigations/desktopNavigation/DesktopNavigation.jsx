import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { DesktopNavigationTree } from './components'
import { topCategoryType } from '../mobileNavigation/types'

function MainDesktopNavigation ({ topCategories, currentTopCategory, navPath, onSelectNavItem }) {
    if (!topCategories) {
        return null
    }

    return (
        <div className='c-navigation'>
            {topCategories[currentTopCategory].tree && <DesktopNavigationTree
                items={topCategories[currentTopCategory].tree.children}
                navPath={navPath}
                onSelectItem={onSelectNavItem}
            />}
        </div>
    )
}

MainDesktopNavigation.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    navPath: PropTypes.node,
    onSelectNavItem: PropTypes.func,
    currentTopCategory: PropTypes.node,
}

MainDesktopNavigation.defaultProps = {}

export const DesktopNavigation = ComponentInjector.return('DesktopNavigation', MainDesktopNavigation)
