import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import useBackgroundImageUrl from '@frontastic/catwalk/src/js/helper/hooks/useBackgroundImageUrl'
import TopCategories from './TopCategories'
import DesktopMenu from './Navigation'
import NavigationExpansionPanel from './NavigationExpansionPanel'
import Widgets from '../Widgets'

import { categoryTreeType, topCategoryType } from '../types'

const Desktop = ({
    topCategories,
    logo,
    currentTopCategory,
    handleSelectTopCategory,
    navPath,
    onSelectNavItem,
    cartItemsCount,
}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [hoveredMenuItem, setHoveredMenuItem] = useState(undefined)

    const ref = useRef(null)
    const logoUrl = useBackgroundImageUrl(ref, logo)

    const currentTree = topCategories[currentTopCategory].tree

    const handleClick = (e, item) => {
        if (item && item.length > 0) {
            e.preventDefault()
            return onSelectNavItem(item)
        }
    }

    return (
        <div className='hidden lg:block'>
            <div className='o-wrapper'>
                <div className='flex justify-between h-16'>
                    <div className='inline-flex'>
                        <a className='self-center w-32 mr-3' ref={ref} href={window.location.origin}>
                            <img src={logoUrl} alt={logo.media.name} />
                        </a>

                        <TopCategories
                            topCategories={topCategories}
                            currentTopCategory={currentTopCategory}
                            handleClick={(e, i) => {
                                e.preventDefault()
                                handleSelectTopCategory(i)
                            }}
                        />
                    </div>
                    <Widgets cartItemsCount={cartItemsCount} />
                </div>
            </div>
            <div className='border-t border-solid border-gray-200'>
                <div className='o-wrapper'>
                    <div
                        className='relative col-span-2'
                        onMouseLeave={() => {
                            setIsExpanded(false)
                        }}
                    >
                        <DesktopMenu
                            currentTree={currentTree}
                            handleClick={handleClick}
                            onHoverItem={(item) => {
                                setHoveredMenuItem(item)
                                setIsExpanded(item.children && item.children.length > 0)
                            }}
                        />

                        <NavigationExpansionPanel
                            expanded={isExpanded}
                            item={hoveredMenuItem}
                            navPath={navPath}
                            handleClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

Desktop.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    logo: PropTypes.object,
    navPath: PropTypes.arrayOf(categoryTreeType),
    currentTopCategory: PropTypes.number.isRequired,
    handleSelectTopCategory: PropTypes.func.isRequired,
    onSelectNavItem: PropTypes.func.isRequired,
    cartItemsCount: PropTypes.number,
}

Desktop.defaultProps = {
    cardItemsCount: 0,
}

export default Desktop
