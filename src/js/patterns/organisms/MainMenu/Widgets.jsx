import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconButton from 'Atoms/button/IconButton'
import Badge from 'Atoms/badge'

import { ReactComponent as CartIcon } from 'Icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as WishlistIcon } from 'Icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as SearchIcon } from 'Icons/tailwind-icons/icon-search.svg'
import { ReactComponent as MyProfile } from 'Icons/tailwind-icons/icon-user.svg'

const Widgets = ({
    variant = '',
    cartItemsCount,
    goToCartPage,
    wishListLineItemsCount,
    goToWishlistPage,
    goToProfilePage,
}) => {
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
                onClick={goToProfilePage}
            />

            <Badge
                count={wishListLineItemsCount}
                onClick={goToWishlistPage}
            >
                <IconButton
                    variant='outline-none focus:outline-none'
                    icon={<WishlistIcon />}
                />
            </Badge>

            <Badge
                count={cartItemsCount}
                onClick={goToCartPage}
            >
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
    wishListLineItemsCount: PropTypes.number,
    goToCartPage: PropTypes.func,
    goToWishlistPage: PropTypes.func,
    goToProfilePage: PropTypes.func,
}

Widgets.defaultProps = {
    cartItemsCount: 0,
    wishListLineItemsCount: 0,
}

export default Widgets
