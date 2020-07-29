import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import useBackgroundImageUrl from '@frontastic/catwalk/src/js/helper/hooks/useBackgroundImageUrl'
import MarginBreakout from 'Molecules/Layout/MarginBreakout'

import Modal from './Modal'
import Widgets from '../Widgets'

import { ReactComponent as MenuOpen } from 'Icons/tailwind-icons/icon-menu-open.svg'

import { categoryTreeType, topCategoryType } from '../types'
import { useLevel } from '../mainMenuState'

const Mobile = ({
    topCategories,
    logo,
    currentTopCategory,
    handleSelectTopCategory,
    navPath,
    setNavPath,
    cartItemsCount,
    goToCartPage,
    wishListLineItemsCount,
    goToWishlistPage,
    goToProfilePage,
    infoHeader,
    infoHeaderIcon,
    aboutHeader,
    aboutHeaderIcon,
    contacHeader,
    contactHeaderIcon,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [level, setLevel] = useLevel(0)

    const ref = useRef(null)
    const backgroundImageUrl = useBackgroundImageUrl(ref, logo)

    if (!topCategories) {
        return null
    }

    return (
        <>
            <MarginBreakout variant='lg:hidden shadow-md'>
                <div className='grid grid-cols-2 h-12 max-w-1240px m-center px-5'>
                    <div className='flex'>
                        <MenuOpen
                            className='self-center cursor-pointer text-2xl'
                            onClick={() => { setIsOpen(true) }}
                        />
                        <a
                            className='self-center h-8 max-w-124px w-full mt-3 ml-3'
                            ref={ref}
                            href={window.location.origin}
                        >
                            <img src={backgroundImageUrl} alt='Logo' />
                        </a>
                    </div>
                    <Widgets
                        cartItemsCount={cartItemsCount}
                        goToCartPage={goToCartPage}
                        wishListLineItemsCount={wishListLineItemsCount}
                        goToWishlistPage={goToWishlistPage}
                        goToProfilePage={goToProfilePage}
                    />
                </div>
            </MarginBreakout>

            <Modal
                isOpen={isOpen}
                level={level}
                navPath={navPath}
                topCategories={topCategories}
                currentTopCategory={currentTopCategory}
                infoHeader={infoHeader}
                infoHeaderIcon={infoHeaderIcon}
                aboutHeader={aboutHeader}
                aboutHeaderIcon={aboutHeaderIcon}
                contacHeader={contacHeader}
                contactHeaderIcon={contactHeaderIcon}
                handleSelectTopCategory={(categoryId) => {
                    setLevel(0)
                    handleSelectTopCategory(categoryId)
                }}
                handleSelectNavItem={(item, toLevel) => {
                    setLevel(toLevel + 1)
                    setNavPath([...navPath, item])
                }
                }
                handleGoBack={() => {
                    setLevel(level - 1)
                    setNavPath(navPath.slice(0, -1))
                }}
                onClose={() => { setIsOpen(false) }}
            />
        </>
    )
}

Mobile.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    logo: PropTypes.object,
    currentTopCategory: PropTypes.number.isRequired,
    handleSelectTopCategory: PropTypes.func.isRequired,
    navPath: PropTypes.arrayOf(categoryTreeType),
    setNavPath: PropTypes.func.isRequired,
    cartItemsCount: PropTypes.number,
    goToCartPage: PropTypes.func,
    wishListLineItemsCount: PropTypes.number,
    goToWishlistPage: PropTypes.func,
    goToProfilePage: PropTypes.func,
    infoHeader: PropTypes.object,
    infoHeaderIcon: PropTypes.string,
    aboutHeader: PropTypes.object,
    aboutHeaderIcon: PropTypes.string,
    contacHeader: PropTypes.object,
    contactHeaderIcon: PropTypes.string,
}

Mobile.defaultProps = {
    cardItemsCount: 0,
    wishListLineItemsCount: 0,
}

export default Mobile
