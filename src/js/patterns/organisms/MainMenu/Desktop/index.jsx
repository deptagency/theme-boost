import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import useBackgroundImageUrl from '@frontastic/catwalk/src/js/helper/hooks/useBackgroundImageUrl'

import MarginBreakout from 'Molecules/Layout/MarginBreakout'
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
    wishListLineItemsCount,
    goToCartPage,
    goToWishlistPage,
    goToProfilePage,
}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [hoveredMenuItem, setHoveredMenuItem] = useState(undefined)

    const ref = useRef(null)
    const backgroundImageUrl = useBackgroundImageUrl(ref, logo)

    const currentTree = topCategories[currentTopCategory].tree

    const handleClick = (e, item) => {
        if (item && item.length > 0) {
            e.preventDefault()
            return onSelectNavItem(item)
        }
    }

    return (
        <MarginBreakout variant='hidden lg:grid shadow-md'>
            <div className='grid grid-cols-2 w-full max-w-1240px m-center'>
                <div className='flex ml-5 xl:ml-5'>
                    <a
                        className='self-center h-8 w-3/12 mt-3'
                        ref={ref}
                        href={window.location.origin}
                    >
                        <img src={backgroundImageUrl} alt='Logo' />
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
                <Widgets
                    variant='mr-5 xl:mr-5'
                    cartItemsCount={cartItemsCount}
                    goToCartPage={goToCartPage}
                    wishListLineItemsCount={wishListLineItemsCount}
                    goToWishlistPage={goToWishlistPage}
                    goToProfilePage={goToProfilePage}
                />
                <div
                    className='relative col-span-2'
                    onMouseLeave={() => { setIsExpanded(false) }}
                >
                    <MarginBreakout variant='border-0.5px border-neutral-300' />

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
        </MarginBreakout>
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
    goToCartPage: PropTypes.func,
    wishListLineItemsCount: PropTypes.number,
    goToWishlistPage: PropTypes.func,
    goToProfilePage: PropTypes.func,
}

Desktop.defaultProps = {
    cardItemsCount: 0,
    wishListLineItemsCount: 0,
}

export default Desktop
