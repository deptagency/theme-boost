import React from 'react'
import PropTypes from 'prop-types'
import app from '@frontastic/catwalk/src/js/app/app'
import classnames from 'classnames'

import IconButton from 'Atoms/button/IconButton'
import Badge from 'Atoms/badge'

import { ReactComponent as CartIcon } from 'Icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as WishlistIcon } from 'Icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as SearchIcon } from 'Icons/tailwind-icons/icon-search.svg'
import { ReactComponent as MyProfile } from 'Icons/tailwind-icons/icon-user.svg'

const Widgets = ({ cartItemsCount, variant = '' }) => {
    return (
        <div
            className={classnames({
                'flex justify-end text-2xl': true,
                [variant]: true,
            })}
            >
            <IconButton
                variant='outline-none focus:outline-none'
                icon={<SearchIcon />}
            />

            <IconButton
                variant='hidden lg:block ml-6 outline-none focus:outline-none'
                icon={<MyProfile />}
                onClick={() => { return app.getRouter().push('Frontastic.Frontend.Master.Account.profile') }}
            />

            <IconButton
                variant='ml-6 outline-none focus:outline-none'
                icon={<WishlistIcon />}
            />

            <Badge count={cartItemsCount} onClick={() => { return app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart') }}>
                <IconButton
                    variant='outline-none focus:outline-none'
                    icon={<CartIcon />}
                />
            </Badge>
        </div>
    )
}

Widgets.propTypes = {
    variant: PropTypes.string,
    cartItemsCount: PropTypes.number,
}

Widgets.defaultProps = {
    cartItemsCount: 0,
}

export default Widgets
