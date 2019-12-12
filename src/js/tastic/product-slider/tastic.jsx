import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Link from 'frontastic-catwalk/src/js/app/link'
import Slider from '../../patterns/templates/slider'
import Translatable from 'frontastic-catwalk/src/js/component/translatable'
import { take } from 'lodash'
import MoleculesSticker from '../../patterns/molecules/sticker/sticker'
import Wishlist from '../../patterns/atoms/wishlist/wishlist'
import { sliderHeading, sliderTitle, sliderDescription } from './product-slider.module.scss'

const ProductItem = ({ product }) => {
    const { name, variants } = product
    const designer = variants[0] ? variants[0].designer : false

    return (
        <article className='o-product'>
            <div className='o-product__asset' title=''>
                <Link itemProp='url' path={product._url || ''}>
                    <div className='o-head-up'>
                        <img
                            className='tns-lazy'
                            src={variants[0].images[0]}
                            data-src={variants[0].images[0]}
                            alt={name}
                            style={{ height: '246px', margin: '0 auto' }}
                        />
                        <div className='o-head-up__item o-head-up__item--top-left'>
                            <MoleculesSticker />
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
        const { title, description } = this.props.data

        let productList = this.props.rawData.stream[this.props.tastic.configuration.stream]
        if (!productList) {
            return null
        }

        let productsToShow = take(productList.items, this.props.tastic.schema.get('productCount'))

        return (
            <Fragment>
                <header className={sliderHeading}>
                    {title && <div className={`sliderTitle ${sliderTitle}`}>
                        <Translatable value={title} />
                    </div>}
                    {description && <div className={`sliderDescription ${sliderDescription}`}>
                        <Translatable value={description} />
                    </div>}
                </header>

                <Slider>
                    {productsToShow.map((product, i) => { return <ProductItem key={i} product={product} /> })}
                </Slider>
            </Fragment>
        )
    }
}

ProductSliderTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
    rawData: PropTypes.object.isRequired,
}

ProductSliderTastic.defaultProps = {}

export default ProductSliderTastic
