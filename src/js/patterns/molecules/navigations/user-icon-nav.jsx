import React from 'react'
import app from 'frontastic-catwalk/src/js/app/app'

import IconButton from '../../atoms/buttons/IconButton'
import { ReactComponent as CartIcon } from '../../../../icons/cart.svg'
import { ReactComponent as WishlistIcon } from '../../../../icons/wishlist-favorite.svg'
import { ReactComponent as SearchIcon } from '../../../../icons/search.svg'
import { ReactComponent as MyProfile } from './../../../../icons/my-profile.svg'

const MoleculesUserIconNav = () => {
    return (
        <ul className='o-header__top-right o-list-inline c-user-icon-nav'>
            <li className='o-list-inline__item'>
                <IconButton icon={<SearchIcon />}>Suche</IconButton>
            </li>
            <li className='o-list-inline__item my-profile--desktop'>
                <IconButton
                    icon={<MyProfile />}
                    onClick={() => { app.getRouter().push('Frontastic.Frontend.Master.Account.profile') }}
                >
                    Mein Konto
                </IconButton>
            </li>
            <li className='o-list-inline__item'>
                <IconButton icon={<WishlistIcon />}>Wunschliste</IconButton>
            </li>
            <li className='o-list-inline__item'>
                <IconButton
                    icon={<CartIcon />}
                    onClick={() => { app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart') }}
                >
                    Warenkorb
                </IconButton>
            </li>
        </ul>
    )
}

export default MoleculesUserIconNav
