import React from 'react'
import app from 'frontastic-catwalk/src/js/app/app'
import { FormattedMessage } from 'react-intl'

import IconButton from '../../atoms/buttons/IconButton'
import { ReactComponent as CartIcon } from '../../../../icons/cart.svg'
import { ReactComponent as WishlistIcon } from '../../../../icons/wishlist-favorite.svg'
import { ReactComponent as SearchIcon } from '../../../../icons/search.svg'
import { ReactComponent as MyProfile } from './../../../../icons/my-profile.svg'

const UserIconNav = () => {
    return (
        <div className='o-header__top-right'>
            <ul className='o-header__user-navigation'>
                <li className='o-header__user-navigation__item'>
                    <IconButton icon={<SearchIcon className='c-icon' />}>
                        <div className='u-hidden-large-up'>
                            <FormattedMessage id='header.search' />
                        </div>
                    </IconButton>
                </li>
                <li className='o-header__user-navigation__item u-hidden-until-large'>
                    <IconButton
                        icon={<MyProfile className='c-icon' />}
                        onClick={() => { app.getRouter().push('Frontastic.Frontend.Master.Account.profile') }}>
                        <div className='u-hidden-large-up'>
                            <FormattedMessage id='header.myAccount' />
                        </div>
                    </IconButton>
                </li>
                <li className='o-header__user-navigation__item'>
                    <IconButton icon={<WishlistIcon className='c-icon' />}>
                        <div className='u-hidden-large-up'>
                            <FormattedMessage id='header.wishlist' />
                        </div>
                    </IconButton>
                </li>
                <li className='o-header__user-navigation__item'>
                    <IconButton
                        icon={<CartIcon className='c-icon' />}
                        onClick={() => { app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart') }}>
                        <div className='u-hidden-large-up'>
                            <FormattedMessage id='header.cart' />
                        </div>
                    </IconButton>
                </li>
            </ul>
        </div>
    )
}

export default UserIconNav
