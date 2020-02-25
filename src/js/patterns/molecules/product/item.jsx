import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NoImage from '@frontastic/catwalk/src/layout/noImage.svg'
import Link from '@frontastic/catwalk/src/js/app/link'
import { ReactComponent as WishlistHeart } from '../../../../icons/wishlist-heart.svg'
import AtomsPrice from '../../atoms/prices/price'

const ProductItem = ({ product, itemClassName = '' }) => {
    const { name, variants } = product

    const variant = variants[0]
    const { price, discountedPrice } = variant

    return (
        <div className='h-full'>
            <div
                className={classnames({
                    'grid': true,
                    'grid-cols-1': true,
                    'grid-rows-1': true,
                    'height-256px': true, // TODO tailwind customization
                    [itemClassName]: true,
                })}
            >
                <Link
                    className='row-start-1 row-end-2 col-start-1 col-end-2 justify-self-center'
                    itemProp='url'
                    path={product._url || ''}
                >
                    <img src={variants[0].images[0] || NoImage} className='h-full' alt={name} />
                </Link>
                <WishlistHeart className='row-start-1 row-end-2 col-start-1 col-end-2 justify-self-end m-3' />
            </div>
            <div className='p-4'>
                <div className='font-bold'>{name}</div>
                <AtomsPrice thin quiet value={discountedPrice || price} />
            </div>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    itemClassName: PropTypes.string,
}

export default ProductItem
