import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectIntl, intlShape } from 'react-intl'

import IconButton from 'Atoms/button/IconButton'
import Badge from 'Atoms/badge'

import { ReactComponent as CartIcon } from 'Icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as WishlistIcon } from 'Icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as SearchIcon } from 'Icons/tailwind-icons/icon-search.svg'
import { ReactComponent as MyProfile } from 'Icons/tailwind-icons/icon-user.svg'

const Widgets = ({
    intl,
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
                name={intl.formatMessage({ id: 'header.search' })}
                variant='outline-none focus:outline-none'
                icon={<SearchIcon />}
            />

            <IconButton
                name={intl.formatMessage({ id: 'header.myAccount' })}
                variant='hidden lg:block ml-6 outline-none focus:outline-none'
                icon={<MyProfile />}
                onClick={goToProfilePage}
            />

            <Badge
                count={wishListLineItemsCount}
                onClick={goToWishlistPage}
            >
                <IconButton
                    name={intl.formatMessage({ id: 'header.wishlist' })}
                    variant='outline-none focus:outline-none'
                    icon={<WishlistIcon />}
                />
            </Badge>

            <Badge
                count={cartItemsCount}
                onClick={goToCartPage}
            >
                <IconButton
                    name={intl.formatMessage({ id: 'header.cart' })}
                    variant='outline-none focus:outline-none'
                    icon={<CartIcon />}
                />
            </Badge>
        </div>
    )
}

Widgets.propTypes = {
    intl: intlShape.isRequired,
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

export default injectIntl(Widgets)
