import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import NoImage from '@frontastic/catwalk/src/layout/noImage.svg'
import Link from '@frontastic/catwalk/src/js/app/link'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import Slider from '../../patterns/templates/slider'
import { take } from 'lodash'
import Sticker from '../../patterns/molecules/sticker/sticker'
import Wishlist from '../../patterns/atoms/wishlist/wishlist'
import ProductImage from "../../patterns/organisms/products/product-image";

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
                    <h3 className='c-title-level-4'>{name}</h3>
                    {designer && (<p className='t-text-quiet'>{designer}</p>)}
                </div>
            </div>
        </article>
    )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
}

class ProductSliderTastic extends Component {
    render () {
        const { title, description, stream, productCount } = this.props.data

        if (!stream) {
            return null
        }

        const productsToShow = take(stream.items, productCount)

        return (
            <Fragment>
                <header className='o-heading'>
                    {title && <p className='o-heading__topic c-topic'>
                        <Translatable value={title} />
                    </p>}
                    {description && <h2 className='o-heading__title c-title'>
                        <Translatable value={description} />
                    </h2>}
                </header>
                <div className='o-distance-m'>
                    <Slider>
                        {productsToShow.map((product, i) => { return <ProductItem key={i} product={product} /> })}
                    </Slider>
                </div>
            </Fragment>
        )
    }
}

ProductSliderTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

ProductSliderTastic.defaultProps = {}

export default tastify()(ProductSliderTastic)
