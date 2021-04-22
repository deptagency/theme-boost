import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Link from '@frontastic/catwalk/src/js/app/link'
import RemoteImage from '@frontastic/catwalk/src/js/remoteImage'

import { ReactComponent as CloseIcon } from '../../../../icons/tailwind-icons/icon-close-black.svg'
import { ReactComponent as WishlistHeart } from '../../../../icons/wishlist-heart.svg'
import { ReactComponent as WishlistHeartFull } from '../../../../icons/tailwind-icons/icon-heart-full.svg'
import Price from '../../atoms/price'

const ProductTeaser = ({
    product: { variants, variant: variantProp, name, _url },
    itemVariant = '',
    handleAddToWishlist,
    handleRemoveFromWishlist,
    wishlisted = false,
    showHeartIcon = true,
    showCloseIcon = false,
}) => {
    const variant = variantProp || variants[0]
    const { price, discountedPrice, images, currency } = variant

    return (
        <>
            <div className={classnames('relative bg-white rounded', itemVariant)}>
                <Link
                    className='flex justify-center items-start w-full min-h-inherit'
                    itemProp='url'
                    path={_url || '#'}
                >
                    <RemoteImage
                        url={images[0]}
                        alt={name}
                        cropRatio='3:4'
                        itemProp='image'
                        options={{ crop: 'pad', background: 'transparent' }}
                    />
                </Link>
                {showHeartIcon && (
                    <div
                        className='absolute top-0 right-0 z-10 m-4 cursor-pointer'
                        onClick={() => {
                            !wishlisted && handleAddToWishlist()
                            wishlisted && handleRemoveFromWishlist()
                        }}
                    >
                        {!wishlisted && <WishlistHeart />}
                        {wishlisted && <WishlistHeartFull />}
                    </div>
                )}
                {showCloseIcon && (
                    <div className='absolute top-0 right-0 z-10 m-4 cursor-pointer' onClick={handleRemoveFromWishlist}>
                        <CloseIcon className='fill-current text-neutral-900 text-xl' />
                    </div>
                )}
            </div>
            <div className='p-4'>
                <div className='font-bold'>{name}</div>
                <Price variant='text-lg text-neutral-700 py-1' value={discountedPrice || price} currency={currency} />
            </div>
        </>
    )
}

ProductTeaser.propTypes = {
    product: PropTypes.object.isRequired,
    itemVariant: PropTypes.string,
    handleAddToWishlist: PropTypes.func,
    handleRemoveFromWishlist: PropTypes.func,
    wishlisted: PropTypes.bool,
    showHeartIcon: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
}

export default ProductTeaser
