import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NoImage from '@frontastic/catwalk/src/layout/noImage.svg'
import Link from '@frontastic/catwalk/src/js/app/link'
import { ReactComponent as WishlistHeart } from 'Icons/wishlist-heart.svg'
import Price from 'Atoms/price'

const ProductTeaser = ({ product: { variants, name, _url }, itemVariant = '' }) => {
    const variant = variants[0]
    const { price, discountedPrice, images } = variant

    return (
        <div className='h-full'>
            <div
                className={classnames(
                    'grid grid-cols-1 grid-rows-1 h-fix-240px',
                    itemVariant
                )}
            >
                <Link
                    className='row-start-1 row-end-2 col-start-1 col-end-2 justify-self-center'
                    itemProp='url'
                    path={_url || ''}
                >
                    <img src={images[0] || NoImage} className='h-full' alt={name} />
                </Link>
                <WishlistHeart className='row-start-1 row-end-2 col-start-1 col-end-2 justify-self-end m-3' />
            </div>
            <div className='p-4'>
                <div className='font-bold'>{name}</div>
                <Price thin quiet value={discountedPrice || price} />
            </div>
        </div>
    )
}

ProductTeaser.propTypes = {
    product: PropTypes.object.isRequired,
    itemVariant: PropTypes.string,
}

export default ProductTeaser
