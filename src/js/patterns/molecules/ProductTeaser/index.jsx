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
    scale = 1.3,
}) => {
    const variant = variantProp || variants[0]
    const { price, discountedPrice, images } = variant

    // accomodatining photos from commerce tools
    const fixedHeight = `calc(240px * ${scale})`
    const fixedWidth = `calc(180px * ${scale})`

    return (
        <>
            <div
                style={{
                    minHeight: fixedHeight,
                    minWidth: fixedWidth,
                }}
                className={classnames(
                    'relative mr-4 bg-white rounded',
                    itemVariant
                )}
                >
                <Link
                    className='flex justify-center w-full min-h-inherit'
                    itemProp='url'
                    path={_url || '#'}
                >
                    {images[0] ? <div
                        className='absolute rounded pointer-events-none'
                        style={{
                            backgroundImage: `url(${images[0]})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: fixedHeight,
                            width: fixedWidth,
                        }}
                        /> : <NoImage className='h-full w-fix-250px' />}
                </Link>
                {showHeartIcon && <div
                    className='absolute top-0 right-0 z-10 m-4 cursor-pointer'
                    onClick={() => {
                        !wishlisted && handleAddToWishlist()
                        wishlisted && handleRemoveFromWishlist()
                    }}
                >
                    {!wishlisted && <WishlistHeart />}
                    {wishlisted && <WishlistHeartFull />}
                </div>}
                {showCloseIcon && <div
                    className='absolute top-0 right-0 z-10 m-4 cursor-pointer'
                    onClick={handleRemoveFromWishlist}
                >
                    <CloseIcon className='fill-current text-neutral-900 text-xl' />
                </div>}
            </div>
            <div className='p-4' style={{
                width: fixedWidth,
            }}>
                <div className='font-bold'>{name}</div>
                <Price variant='text-lg text-neutral-700 py-1' value={discountedPrice || price} />
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
    scale: PropTypes.number,
}

export default ProductTeaser
