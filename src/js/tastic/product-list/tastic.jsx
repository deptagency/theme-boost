import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MoleculesHeading from '../../patterns/molecules/headings/heading'
import VerticalSwipe from '../../patterns/templates/vertical-swipe'
import Translatable from 'frontastic-catwalk/src/js/component/translatable'
import { take } from 'lodash'
import MoleculesSticker from '../../patterns/molecules/sticker/sticker'
import MoleculesWishlist from '../../patterns/molecules/wishlist/wishlist'

const ProductItem = ({ product, width, className }) => {
    const { name, variants } = product
    const designer = variants[0] ? variants[0].designer : false

    let style = {}
    if (typeof width !== 'undefined') { style = { width } }

    return (<div className={className} style={style}>
        <article className='o-product'>
            <div className='o-product__asset' title=''>
                <div className='o-head-up'>
                    <div style={{
                        backgroundImage: `url(${variants[0].images[0]})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '246px',
                    }}
                    />
                    <div className='o-head-up__item o-head-up__item--top-left'>
                        <MoleculesSticker />
                    </div>
                    <div className='o-head-up__item o-head-up__item--top-right'>
                        <MoleculesWishlist />
                    </div>
                </div>
            </div>
            <div className='o-product__header o-distance-s'>
                <div className='o-product__header__large-column'>
                    <h3 className='c-title-level-4'>{name}</h3>
                    {designer && (<p className='t-text-quiet'>{designer}</p>)}
                </div>
            </div>
        </article>
    </div>)
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}

class ProductListTastic extends Component {
    render () {
        const { title, description } = this.props.data

        let productList = this.props.rawData.stream[this.props.tastic.configuration.stream]
        if (!productList) {
            return null
        }

        let productsToShow = take(productList.items, this.props.tastic.schema.get('productCount'))

        // TODO "o-grid  o-region" here?
        return <div className='o-grid  o-region margin-12'>
            <MoleculesHeading title={<Translatable value={title} />} description={<Translatable value={description} />} />
            <VerticalSwipe sliderId='swipe-content'>

                <div className='catwalk-product-list-tastic'>
                    {productsToShow.map((product, i) => {
                        return <ProductItem key={i} product={product} className='product-list-item' width='246px' />
                    })}
                </div>
            </VerticalSwipe>
        </div>
    }
}

ProductListTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
    rawData: PropTypes.object.isRequired,
}

ProductListTastic.defaultProps = {}

export default ProductListTastic
