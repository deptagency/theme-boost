import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import useBackgroundImageUrl from 'frontastic-catwalk/src/js/helper/hooks/useBackgroundImageUrl'

import { MobileNavTree, TopCategoryNavTabs, BackButton, CloseButton } from './components'
import { topCategoryType } from './types'

/*
 * Main Component for Mobile Navigation
 *
 * see PropTypes for prop documentation
 *
 */
function MoleculesMobileNavigation ({ open, topCategories, onClose, callToAction, className }) {
    // currentTopCategoy is the array ID that determines which tree is being rendered
    const [currentTopCategory, setCurrentTopCategory] = useState(0)
    // the current level of nesting.
    const [level, setLevel] = useState(0)
    // navPath records the current path of the user.
    // every time a user goes a level deeper, that
    // item is being added to the array
    const [navPath, setNavPath] = useState([])
    // background image
    const ref = useRef(null)
    const backgroundImageUrl = useBackgroundImageUrl(ref, topCategories[currentTopCategory].mobileNavBackgroundImage)

    // When a top category is selected, the menu level
    // is being reset to the topmost level and the
    const handleSelectTopCategory = (categoryId) => {
        setLevel(0)
        setNavPath([])
        setCurrentTopCategory(categoryId)
    }
    // when a nav item is clicked, increment
    // the level and add the current item
    // to the navPath
    const handleSelectNavItem = (item, toLevel) => {
        setLevel(toLevel + 1)
        setNavPath([...navPath, item])
    }
    // if the user goes back a level,
    // decrement the current level and remove the
    // last item from the navPath
    const handleGoBack = () => {
        setLevel(level - 1)
        setNavPath(navPath.slice(0, -1))
    }

    // render nothing if there's no content
    if (!topCategories) {
        return null
    }

    return (
        <nav role='navigation' className={`c-navigation${open ? ' is-active' : ''} ${className}`}>
            <div
                className={`c-navigation__body c-mobile-navigation__body c-mobile-navigation__body--current-level-${level} `}
            >
                {/** Header (background image with tab nav) */}
                <div
                    className='c-mobile-navigation__header o-head-up'
                    ref={ref}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`,
                    }}
                >
                    {level > 0 && <BackButton onClick={handleGoBack} />}
                    <CloseButton onClick={onClose} />

                    {level === 0 ? (
                        <TopCategoryNavTabs
                            items={topCategories}
                            onCategorySelect={handleSelectTopCategory}
                            activeId={currentTopCategory}
                        />
                    ) : (
                        <span>{navPath[navPath.length - 1].name}</span>
                    )}
                </div>

                {/** Optional Call to Action Button.
                        Example: Sign up, My account, ...
                 */}
                {callToAction && <div className='c-mobile-navigation__cta-wrapper o-distance-m o-prevent-space'>{callToAction}</div>}

                {/** Scrollable menu wrapper + MobileNavTree */}
                <div
                    className='c-mobile-navigation__scrollcontainer'
                    style={{ transform: `translateX(${level * -100}%)` }}
                >
                    {topCategories[currentTopCategory].tree && <MobileNavTree
                        items={topCategories[currentTopCategory].tree.children}
                        navPath={navPath}
                        onSelectItem={handleSelectNavItem}
                    />}
                </div>
            </div>
        </nav>
    )
}

MoleculesMobileNavigation.propTypes = {
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

MoleculesMobileNavigation.defaultProps = {}

export const MobileNavigation = ComponentInjector.return('MoleculesMobileNavigation', MoleculesMobileNavigation)
