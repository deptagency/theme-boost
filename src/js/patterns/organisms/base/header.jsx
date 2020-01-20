import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import app from 'frontastic-catwalk/src/js/app/app'
import useBackgroundImageUrl from 'frontastic-catwalk/src/js/helper/hooks/useBackgroundImageUrl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import MobileNavigation from '../../molecules/navigations/mobileNavigation'
import { topCategoryType } from '../../molecules/navigations/mobileNavigation/types'
import TopCategoryNav from '../../molecules/navigations/topCategoryNav'
import UserIconNav from '../../molecules/navigations/user-icon-nav'
import SecondNavigationDesktop from '../../molecules/navigations/desktopSecondNavigation/second-navigation-desktop'
import MobileMenuToggle from '../../atoms/buttons/mobile-menu-toggle'
import Button from '../../atoms/buttons/button'
import { FormattedMessage } from 'react-intl'

const Head = ({ topCategories, logo, loggedIn }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

    const logoRef = useRef(null)
    const backgroundImageUrl = useBackgroundImageUrl(logoRef, logo)

    if (!topCategories) {
        return null
    }

    return (
        <div>
            <div className='o-header'>
                <div className='o-header__top'>
                    <div className='o-header__top-left u-hidden-until-medium'>
                        <TopCategoryNav items={topCategories} />
                    </div>
                    {/*
                        Although <MobileMenuToggle /> and <MobileNavigation />
                        set their own classNames inside the components,
                        I've added the media query classes to the top level
                        inside the Header component to have it all in one place.
                    */}
                    <MobileMenuToggle
                        isMenuOpen={isMobileMenuOpen}
                        className='u-hidden-medium-up'
                        onToggle={() => {
                            return setIsMobileMenuOpen(!isMobileMenuOpen)
                        }}
                    />

                    <a href='/' className='c-logo' title='Catwalk' ref={logoRef}
                        style={(logo ? {
                        backgroundImage: `url(${backgroundImageUrl})`,
                    } : {})}
                    >
                        Catwalk
                    </a>
                    <UserIconNav open />             
                </div>
                <MobileNavigation
                    className='u-hidden-medium-up'
                    callToAction={ctaLoggedIn()}
                    onClose={() => {
                        return setIsMobileMenuOpen(false)
                    }}
                    open={isMobileMenuOpen}
                    topCategories={topCategories}
                />
            </div>
            <div>
                <SecondNavigationDesktop />
            </div>
        </div>
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
