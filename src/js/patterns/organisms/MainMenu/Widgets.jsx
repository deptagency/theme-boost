import React from 'react'
import PropTypes from 'prop-types'
import app from '@frontastic/catwalk/src/js/app/app'
import classnames from 'classnames'

import IconButton from 'Atoms/button/IconButton'

import { ReactComponent as CartIcon } from 'Icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as WishlistIcon } from 'Icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as SearchIcon } from 'Icons/tailwind-icons/icon-search.svg'
import { ReactComponent as MyProfile } from 'Icons/tailwind-icons/icon-user.svg'

const Widgets = ({ variant = '' }) => {
    return (
        <div
            className={classnames({
                'flex justify-end': true,
                [variant]: true,
            })}
            >
            <IconButton icon={<SearchIcon />} />

            <IconButton
                variant='hidden lg:block pl-6'
                icon={<MyProfile />}
                onClick={() => { return app.getRouter().push('Frontastic.Frontend.Master.Account.profile') }}
            />

            <IconButton variant='pl-6' icon={<WishlistIcon />} />

            <IconButton
                variant='pl-6'
                icon={<CartIcon />}
                onClick={() => { return app.getRouter().push('Frontastic.Frontend.Master.Checkout.cart') }}
            />
        </div>
    )
}

Widgets.propTypes = {
    variant: PropTypes.string,
}

export default Widgets
