import React from 'react'
import app from 'frontastic-catwalk/src/js/app/app'

import IconButton from '../../atoms/buttons/IconButton'
import { ReactComponent as CartIcon } from '../../../../icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as WishlistIcon } from '../../../../icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as SearchIcon } from '../../../../icons/tailwind-icons/icon-search.svg'
import { ReactComponent as MyProfile } from './../../../../icons/tailwind-icons/icon-user.svg'

const UserIconNav = () => {
    return (
        <div className='flex'>
            <ul className='flex right-0 absolute'>
                <li className="mr-5">
                    <IconButton 
                        icon={<SearchIcon/>}>
                        {/* className='o-header__user-navigation__icon'  */}
                        {/* <div className='u-hidden-large-up'/> */}
                    </IconButton>
                </li>

                        {/* MAMYBE WE WOULD NEED TO CUSTOMIZE THAT */}
                <li 
                // className="hidden sm:block md:inline-flex lg:inline-flex xl:inline-flex"
                > 
                    <IconButton
                        icon={<MyProfile/>}
                        onClick={() => { app.getRouter().push('Frontastic.Frontend.Master.Account.profile') }}>
                    </IconButton>
                </li>
                <li className="mr-5">
                    <IconButton 
                        icon={<WishlistIcon/>}>
                    </IconButton>
                </li>
                <li className="mr-5">
                    <IconButton
                        icon={<CartIcon/>}
                        onClick={() => { app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart') }}>
                    </IconButton>
                </li>
            </ul>
        </div>
    )
}

export default UserIconNav
