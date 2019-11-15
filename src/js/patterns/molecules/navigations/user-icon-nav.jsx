import React from 'react'

import IconButton from '../../molecules/buttons/IconButton'
import { ReactComponent as CartIcon } from '../../../../icons/cart.svg'
import { ReactComponent as WishlistIcon } from '../../../../icons/wishlist-favorite.svg'
import { ReactComponent as SearchIcon } from '../../../../icons/search.svg'

const MoleculesUserIconNav = () => {
    return (
        <ul className='o-list-inline c-user-icon-nav'>
            <li className='o-list-inline__item'>
                <IconButton icon={<SearchIcon />}>Suche</IconButton>
            </li>
            <li className='o-list-inline__item'>
                <IconButton icon={<WishlistIcon />}>Wunschliste</IconButton>
            </li>
            <li className='o-list-inline__item'>
                <IconButton icon={<CartIcon />}>Warenkorb</IconButton>
            </li>
        </ul>
    )
}

export default MoleculesUserIconNav
