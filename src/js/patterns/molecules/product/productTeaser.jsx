import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'
import RemoteImage from '@frontastic/catwalk/src/js/remoteImage'

import Sticker from '../../atoms/sticker/sticker'
import WishlistButton from '../../atoms/button/wishlistButton'

function ProductTeaser({ product, onAddToWishlist, showPercent, showStrikePrice }) {
    const context = useSelector((state) => {
        return state.app.context
    })
    const wishlist = useSelector((state) => {
        return state.wishlist.wishlist
    })

    const variant = product.variants[0]

    // Alternatively could the wishlist button directly be connected to the store.
    // You'd give it a product and it does the rest, as a smart drop in component.
    const isWishlisted = () => {
        // need to check for length > 0 too, because find() returns undefined if lineItems is empty.
        if (wishlist.loaded && wishlist.data.lineItems && wishlist.data.lineItems.length > 0) {
            return wishlist.data.lineItems.find((item) => item.variant.sku === variant.sku)
        }

        return false
    }

    const toggleWishlist = (e) => {
        e.preventDefault()
        e.stopPropagation()
        onAddToWishlist(product, variant)
    }

    const locale = () => {
        return context.locale.replace('_', '-').split('@')[0]
    }

    const formatPrice = (price) => {
        return (price / 100).toLocaleString(locale(), { style: 'currency', currency: context.currency })
    }

    return (
        <article
            className='w-1/2 lg:w-1/3 overflow-hidden px-2 pb-5 text-gray-900'
            itemScope
            itemType='http://schema.org/Product'
        >
            <Link itemProp='url' className='z-10 hover:no-underline hover:text-gray-900' to={product._url || ''}>
                <div className='relative pb-3/2 mb-2'>
                    <figure className='absolute flex items-center h-full w-full object-cover'>
                        <RemoteImage
                            url={variant.images[0]}
                            alt={product.name}
                            cropRatio='1:1'
                            itemProp='image'
                            options={{ crop: 'fill', background: 'transparent' }}
                        />
                    </figure>

                    {variant.discountedPrice && showStrikePrice && (
                        <Sticker className='absolute left-0 top-0 mt-2 ml-2'>
                            {100 - Math.ceil((variant.discountedPrice / variant.price) * 100)}%
                        </Sticker>
                    )}
                    <WishlistButton
                        className='absolute right-0 top-0 mt-3 mr-3 z-20 text-lg'
                        onClick={toggleWishlist}
                        active={isWishlisted()}
                    />
                </div>
                <h3 className='text-sm font-bold whitespace-no-wrap truncate ... '>{product.name}</h3>
                <div itemScope itemType='http://schema.org/Offer'>
                    {variant.discountedPrice && showStrikePrice ? (
                        <p className='text-sm'>
                            <span className='mr-1'>
                                <s>{formatPrice(variant.discountedPrice)}</s>
                            </span>
                            <span className='text-red-600'>{formatPrice(variant.price)}</span>
                        </p>
                    ) : (
                        <p className='text-sm'>{formatPrice(variant.price)}</p>
                    )}
                </div>
            </Link>
        </article>
    )
}

ProductTeaser.propTypes = {
    product: PropTypes.object.isRequired,
    showPercent: PropTypes.bool,
    showStrikePrice: PropTypes.bool,
    onAddToWishlist: PropTypes.func,
}

ProductTeaser.defaultProps = {}

export default ComponentInjector.return('ProductTeaser', ProductTeaser)
