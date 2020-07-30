import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import Grid from '@frontastic/catwalk/src/js/patterns/atoms/grid/grid'
import Cell from '@frontastic/catwalk/src/js/patterns/atoms/grid/cell'

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
    wishListLineItemsCount,
    goToCartPage,
    goToWishlistPage,
    goToProfilePage,
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
            <Grid>
                <Cell fullWidth>
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
                            <Widgets
                                cartItemsCount={cartItemsCount}
                                goToCartPage={goToCartPage}
                                wishListLineItemsCount={wishListLineItemsCount}
                                goToWishlistPage={goToWishlistPage}
                                goToProfilePage={goToProfilePage}
                            />
                        </div>
                    </div>
                    <div className='border-t border-solid border-neutral-200'>
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
                </Cell>
            </Grid>
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
