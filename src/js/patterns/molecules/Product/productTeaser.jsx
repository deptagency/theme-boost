import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import RemoteImage from '@frontastic/catwalk/src/js/remoteImage'

import Price from 'Atoms/price'
import Sticker from 'Atoms/sticker'
import WishlistButton from 'Atoms/button/wishlistButton'

function ProductTeaser ({ product, onAddToWishlist, showPercent, showStrikePrice }) {
    const wishlist = useSelector((state) => {
        return state.wishlist.wishlist
    })

    const variant = product.variants[0]

    // Alternatively could the wishlist button directly be connected to the store.
    // You'd give it a product and it does the rest, as a smart drop in component.
    const isWishlisted = () => {
        if (wishlist.loaded) {
            return wishlist.data.lineItems.find((item) => {
                return item.variant.sku === variant.sku
            })
        }

        return false
    }

    const toggleWishlist = (e) => {
        e.preventDefault()
        e.stopPropagation()
        onAddToWishlist(product, variant)
    }

    return (
        <article
            className={'text-neutral-900'}
            itemScope
            itemType='http://schema.org/Product'
            >
            <Link itemProp='url' className='z-10 hover:no-underline hover:text-neutral-900' to={product._url || ''}>
                <div className='relative pb-3/2 mb-2 bg-white rounded'>
                    <figure className='absolute flex items-center h-full w-full object-cover'>
                        <RemoteImage
                            url={variant.images[0]}
                            alt={product.name}
                            cropRatio='1:1'
                            itemProp='image'
                            options={{ crop: 'pad', background: 'transparent' }}
                        />
                    </figure>

                    {variant.discountedPrice && showStrikePrice && (
                        <Sticker className='absolute left-0 top-0 mt-2 ml-2'>
                            {100 - Math.ceil((variant.discountedPrice / variant.price) * 100)}%
                        </Sticker>
                    )}
                    <WishlistButton
                        className='absolute right-0 top-0 mt-3 mr-3 text-lg'
                        onClick={toggleWishlist}
                        active={!!isWishlisted()}
                    />
                    {/* enforce boolean on isWishlisted() because Array.find() returns undefined in non-truthy case */}
                </div>
                <h3 className='text-sm font-bold whitespace-no-wrap truncate ... '>{product.name}</h3>
                <div itemScope itemType='http://schema.org/Offer'>
                    {variant.discountedPrice && showStrikePrice ? (
                        <p className='text-sm'>
                            <s>
                                <Price variant='mr-1' value={variant.price} />
                            </s>
                            <Price variant='text-red-600' value={variant.discountedPrice} />
                        </p>
                    ) : (
                        <Price variant='text-sm' value={variant.price} />
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

export default ProductTeaser
