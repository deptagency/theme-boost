import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MoleculesHeading from '../../patterns/molecules/headings/heading'
import VerticalSwipe from '../../patterns/templates/vertical-swipe'
import MoleculesProduct from '../../patterns/molecules/products/product'
import Translatable from '../../component/translatable'
import { take } from 'lodash'

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
                    {productsToShow.map((product) => {
                        return <MoleculesProduct product={product} className='product-list-item' width='275px' />
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
