import React from 'react'
import PropTypes from 'prop-types'

import NoImage from '@frontastic/catwalk/src/layout/noImage.svg'
import Link from '@frontastic/catwalk/src/js/app/link'
import ProductImage from '../../../patterns/organisms/products/product-image'
import { ReactComponent as WishlistHeart } from '../../../../icons/wishlist-heart.svg'

const ProductItem = ({ product }) => {
    const { name, variants } = product

    return (
        <div className='grid'>
            <Link
                className='row-start-1 row-end-2 col-start-1 col-end-2'
                itemProp='url'
                path={product._url || ''}
                >
                <ProductImage
                    className='tns-lazy'
                    imageUrl={variants[0].images[0] || NoImage}
                    alt={name}
                    cropRatio='1:1'
                    itemProp='image'
                    options={{ crop: 'pad', background: 'white' }}
                    />
            </Link>
            <WishlistHeart className='row-start-1 row-end-2 col-start-1 col-end-2 justify-self-end' />
        </div>
    )

/*    return (
        <article className='o-product'>
            <div className='o-product__asset' title=''>
                <Link itemProp='url' path={product._url || ''}>
                    <div className='o-head-up'>
                        <ProductImage
                            className='tns-lazy'
                            imageUrl={variants[0].images[0] || NoImage}
                            alt={name}
                            cropRatio='1:1'
                            itemProp='image'
                            options={{ crop: 'pad', background: 'white' }}
                        />
                        <div className='o-head-up__item o-head-up__item--top-left'>
                            <Sticker />
                        </div>
                        <div className='o-head-up__item o-head-up__item--top-right'>
                            <Wishlist />

                        </div>
                    </div>
                </Link>
            </div>
            <div className='o-product__header o-distance-s'>
                <div className='o-product__header__large-column'>
                    <h3 className='u-text-xs u-text-strong'>{name}</h3>
                    {designer && <p className='u-text-color-quiet'>{designer}</p>}
                </div>
            </div>
        </article>
    ) */
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductItem
