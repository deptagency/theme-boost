import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NoImage from '@frontastic/catwalk/src/layout/noImage.svg'
import Link from '@frontastic/catwalk/src/js/app/link'
import { ReactComponent as WishlistHeart } from '../../../../icons/wishlist-heart.svg'

const ProductItem = ({ product, itemClassName = '' }) => {
    const { name, variants } = product
    return (
        <div
            className={classnames({
                'grid': true,
                'grid-cols-1': true,
                'grid-rows-1': true,
                'h-full': true,
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
    itemClassName: PropTypes.string,
}

export default ProductItem
