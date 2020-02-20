import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import app from 'frontastic-catwalk/src/js/app/app'
import useBackgroundImageUrl from 'frontastic-catwalk/src/js/helper/hooks/useBackgroundImageUrl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import MobileNavigation from '../../molecules/navigations/mobileNavigation'
import { topCategoryType } from '../../molecules/navigations/mobileNavigation/types'
import TopCategoryNav from '../../molecules/navigations/topCategoryNav'
import UserIconNav from '../../molecules/navigations/user-icon-nav'
import DesktopNavigation from '../../molecules/navigations/desktopNavigation'
import MobileMenuToggle from '../../atoms/buttons/mobile-menu-toggle'
import Button from '../../atoms/buttons/button'
import { FormattedMessage } from 'react-intl'

const Head = ({ topCategories, logo, loggedIn }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const logoRef = useRef(null)
    const backgroundImageUrl = useBackgroundImageUrl(logoRef, logo)
    const [currentTopCategory, setCurrentTopCategory] = useState(0)
    const [navPath, setNavPath] = useState([])

    const ctaLoggedIn = () => {
        return (
            <Button
                type='quiet'
                size='boss'
                onClick={() => {
                    app.getRouter().push('Frontastic.Frontend.Master.Account.profile')
                    setIsMobileMenuOpen(false)
                }}
                >
                {loggedIn ?
                    <FormattedMessage id='account.viewMyProfile' />
                    : <FormattedMessage id='account.signUp' /> }
            </Button>
        )
    }

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
            <div className='o-header'>
                <div className='o-header__top'>
                    <div
                        className='o-header__top-left u-hidden-until-medium'
                    >
                        <TopCategoryNav
                            items={topCategories}
                            onCategorySelect={handleSelectTopCategory}
                            activeId={currentTopCategory}
                        />
                    </div>
                    {/*
                        Although <MobileMenuToggle /> and <MobileNavigation />
                        set their own classNames inside the components,
                        I've added the media query classes to the top level
                        inside the Header component to have it all in one place.
                    */}
                    <MobileMenuToggle
                        isMenuOpen={isMobileMenuOpen}
                        className='u-icon-line-height u-hidden-medium-up'
                        onToggle={() => {
                            return setIsMobileMenuOpen(!isMobileMenuOpen)
                        }}
                        open={isMobileMenuOpen}
                        topCategories={topCategories}
                    />

                    <a href='/' className='c-logo o-header__top__logo' title='Catwalk' ref={logoRef}
                        style={(logo ? {
                        backgroundImage: `url(${backgroundImageUrl})`,
                    } : {})}
                    >
                        Catwalk
                    </a>
                    <UserIconNav open />
                </div>
                <div className='u-hidden-large-up'>
                    <MobileNavigation
                        callToAction={ctaLoggedIn()}
                        onClose={() => {
                            return setIsMobileMenuOpen(false)
                        }}
                        open={isMobileMenuOpen}
                        topCategories={topCategories}
                    />
                </div>
                {/*
                    Although <MobileMenuToggle /> and <MobileNavigation />
                    set their own classNames inside the components,
                    I've added the media query classes to the top level
                    inside the Header component to have it all in one place.
                */}

            </div>
            <div className='o-distance-m'>
                <DesktopNavigation
                    topCategories={topCategories}
                    currentTopCategory={currentTopCategory}
                    navPath={navPath}
                    onSelectNavItem={handleSelectNavItem}
                />
            </div>
        </>
    )
}

Head.propTypes = {
    topCategories: PropTypes.arrayOf(topCategoryType),
    logo: PropTypes.object,
    loggedIn: PropTypes.bool.isRequired,
}

Head.defaultProps = {
    loggedIn: false,
}

export default ComponentInjector.return('Head', Head)
