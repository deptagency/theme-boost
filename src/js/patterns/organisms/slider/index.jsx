import React from 'react'
import PropTypes from 'prop-types'

import NoImage from '@frontastic/catwalk/src/layout/noImage.svg'
import Link from '@frontastic/catwalk/src/js/app/link'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TinySlider from '../../../patterns/templates/slider'
import Sticker from '../../../patterns/molecules/sticker/sticker'
import Wishlist from '../../../patterns/atoms/wishlist/wishlist'
import ProductImage from '../../../patterns/organisms/products/product-image'

const ProductItem = ({ product }) => {
    const { name, variants } = product
    const designer = variants[0] ? variants[0].designer : false

    return (
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
    )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

const ProductSlider = ({ products, title = '', description = '' }) => {
    return (
        <>
            <header className='o-heading'>
                {title && (
                    <p className='o-heading__topic c-topic u-text-color-quiet'>
                        <Translatable value={title} />
                    </p>
                )}
                {description && (
                    <h2 className='o-heading__title c-title'>
                        <Translatable value={description} />
                    </h2>
                )}
            </header>
            <div className='o-distance-m'>
                <TinySlider>
                    {products.map((product, i) => {
                        return <ProductItem key={i} product={product} />
                    })}
                </TinySlider>
            </div>
        </>
    )
}

ProductSlider.propTypes = {
    products: PropTypes.object.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default ProductSlider
