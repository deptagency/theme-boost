import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Link from '@frontastic/catwalk/src/js/app/link'
import { ReactComponent as CloseIcon } from 'Icons/tailwind-icons/icon-close-black.svg'
import { ReactComponent as WishlistHeart } from 'Icons/wishlist-heart.svg'
import { ReactComponent as WishlistHeartFull } from 'Icons/tailwind-icons/icon-heart-full.svg'
import { ReactComponent as NoImage } from 'Icons/no-image.svg'
import Price from 'Atoms/price'

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
    const { price, discountedPrice, images } = variant

    return (
        <div className='h-full'>
            <div
                className={classnames(
                    'relative grid grid-cols-1 grid-rows-1 h-fix-240px mx-2',
                    itemVariant
                )}
            >
                <Link
                    className='absolute w-full'
                    itemProp='url'
                    path={_url || '#'}
                >
                    {images[0] ? <div
                        className='rounded'
                        style={{
                            pointerEvents: 'none',
                            backgroundImage: `url(${images[0]})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            minHeight: '240px',
                        }}
                    /> : <NoImage className='h-full w-fix-250px' />}
                </Link>
                {showHeartIcon && <div
                    className='absolute right-0 z-10 row-start-1 row-end-2 col-start-1 col-end-2 justify-self-end m-4 cursor-pointer'
                    onClick={() => {
                        !wishlisted && handleAddToWishlist()
                        wishlisted && handleRemoveFromWishlist()
                    }}
                >
                    {!wishlisted && <WishlistHeart />}
                    {wishlisted && <WishlistHeartFull />}
                </div>}
                {showCloseIcon && <div
                    className='absolute right-0 z-10 row-start-1 row-end-2 col-start-1 col-end-2 justify-self-end m-4 cursor-pointer'
                    onClick={handleRemoveFromWishlist}
                >
                    <CloseIcon className='fill-current text-neutral-800 text-xl' />
                </div>}
            </div>
            <div className='p-4'>
                <div className='font-bold'>{name}</div>
                <Price variant='text-lg text-neutral-600 py-1' value={discountedPrice || price} />
            </div>
        </div>
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
