import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import { SecondNavigationDesktopTree } from './components'
import TopCategoryNav from '../topCategoryNav'

import { topCategoryType } from './../mobileNavigation/types'

function MainDesktopSecNavigation ({ topCategories, callToAction }) {
    const [currentTopCategory, setCurrentTopCategory] = useState(0)
    const [level, setLevel] = useState(0)
  
    const [navPath, setNavPath] = useState([])

    const handleSelectTopCategory = (categoryId) => {
        setLevel(0)
        setNavPath([])
        setCurrentTopCategory(categoryId)
    }

    const handleSelectNavItem = (item, toLevel) => {
        setLevel(toLevel + 1)
        setNavPath([...navPath, item])
    }
    console.log('and here', navPath)
   
    // render nothing if there's no content
    if (!topCategories) {
        return null
    }

    return (
        <nav>
            <div>
                <div>
                    {level === 0 ? (
                        <TopCategoryNav
                            items={topCategories}
                            onCategorySelect={handleSelectTopCategory}
                            activeId={currentTopCategory}
                        />
                    ) : (
                        <span>{navPath[navPath.length - 1].name}</span>
                    )}
                </div>

                <div>
                    {topCategories[currentTopCategory].tree && <SecondNavigationDesktopTree
                        items={topCategories[currentTopCategory].tree.children}
                        navPath={navPath}
                        onSelectItem={handleSelectNavItem}
                    />}   
                </div>
            </div>
        </nav>
    )
}

MainDesktopSecNavigation.propTypes = {
    /**
     * Is the menu visible?
     */
    open: PropTypes.bool,
    /**
     * The main content of the menu (see specific
     * type defintions for details)
     */
    topCategories: PropTypes.arrayOf(topCategoryType),

    /**
     * Event handler when the close button is clicked
     */
    onClose: PropTypes.func,
    /**
     * A component for the call to action slot
     * that sits above the menu. Ideally something like:
     * <MoleculesButton type='quiet' onClick={}>GO</MoleculesButton>
     */
    callToAction: PropTypes.element,
    className: PropTypes.string,
}

MainDesktopSecNavigation.defaultProps = {}

export const DesktopSecNavigation = ComponentInjector.return('DesktopSecNavigation', MainDesktopSecNavigation)
