import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectIntl, intlShape } from 'react-intl'

import IconButton from '../../atoms/button/IconButton'
import Badge from '../../atoms/badge'

import { ReactComponent as CartIcon } from '../../../icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as WishlistIcon } from '../../../icons/tailwind-icons/icon-heart.svg'
import { ReactComponent as SearchIcon } from '../../../icons/tailwind-icons/icon-search.svg'
import { ReactComponent as MyProfile } from '../../../icons/tailwind-icons/icon-user.svg'

import SearchForm from './SearchForm'

const IconNavigation = ({
    intl,
    variant = '',
    cartItemsCount,
    goToCartPage,
    wishListLineItemsCount,
    goToWishlistPage,
    goToProfilePage,
    onSearchToggle,
    showSearch = false,
}) => {
    return (
        <div
            className={classnames({
                'flex justify-end text-2xl items-center': true,
                [variant]: true,
            })}
        >
            {showSearch ? (
                <SearchForm inputClassName='text-base' onCancelSearch={onSearchToggle} />
            ) : (
                <IconButton
                    name={intl.formatMessage({ id: 'header.search' })}
                    variant='outline-none focus:outline-none'
                    icon={<SearchIcon />}
                    onClick={onSearchToggle}
                />
            )}

            <IconButton
                name={intl.formatMessage({ id: 'header.myAccount' })}
                variant='hidden lg:block ml-6 outline-none focus:outline-none'
                icon={<MyProfile />}
                onClick={goToProfilePage}
            />

            <Badge count={wishListLineItemsCount} onClick={goToWishlistPage}>
                <IconButton
                    name={intl.formatMessage({ id: 'header.wishlist' })}
                    variant='ml-6 outline-none focus:outline-none'
                    icon={<WishlistIcon />}
                />
            </Badge>

            <Badge count={cartItemsCount} onClick={goToCartPage}>
                <IconButton
                    name={intl.formatMessage({ id: 'header.cart' })}
                    variant='ml-6 outline-none focus:outline-none'
                    icon={<CartIcon />}
                />
            </Badge>
        </div>
    )
}

IconNavigation.propTypes = {
    intl: intlShape.isRequired,
    variant: PropTypes.string,
    cartItemsCount: PropTypes.number,
    wishListLineItemsCount: PropTypes.number,
    goToCartPage: PropTypes.func,
    goToWishlistPage: PropTypes.func,
    goToProfilePage: PropTypes.func,
    onSearchToggle: PropTypes.func,
    showSearch: PropTypes.bool,
}

IconNavigation.defaultProps = {
    cartItemsCount: 0,
    wishListLineItemsCount: 0,
}

export default injectIntl(IconNavigation)
