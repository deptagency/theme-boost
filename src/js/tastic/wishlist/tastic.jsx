import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import _ from 'lodash'
import { connect } from 'react-redux'

import ProductItem from '../../patterns/molecules/product/productItem'

class Wishlist extends Component {
    
    render () {
        console.log('this.props: ', this.props.rawData.stream);
        
        return (<div className='c-wishlist o-layout'>
                    <h1 class="c-title-level-3">
                        <span><Translatable value={this.props.title} /></span>
                    </h1>
                    <div class="o-grid o-grid--half o-grid--large-forth o-distance">
                        {_.map(this.props.wishlist.lineItems, (lineItem, i) => {
                            return <ProductItem key={i} product={lineItem} />
                        })}
                    </div>
                </div>)
    }
}

Wishlist.propTypes = {
    wishlist: PropTypes.object.isRequired,
}

Wishlist.defaultProps = {
    title: 'Wishlist',
    wishlist: {
        name: "My Wishes",
        lineItems: [
            {
                name: "Vero Moda Freizeitkleid",
                category: "Ballkleid",
                price: "39,95 €",
                variants: [
                    { images: ['https://mosaic04.ztat.net/vgs/media/catalog-lg/BL/82/1D/00/7K/11/BL821D007-K11@9.jpg'] }
                ]
            },
            {
                name: "Vero Moda Kleid",
                category: "Kleid",
                price: "19,95 €",
                variants: [
                    { images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073327_1_large.jpg'] }
                ]
            },
            {
                name: "Freizeitkleid",
                category: "Hosen",
                price: "9,99 €",
                variants: [
                    { images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073319_1_large.jpg'] }
                ]
            },
            {
                name: "Vero Moda",
                category: "BallBall",
                price: "129,95 €",
                variants: [
                    { images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073316_1_large.jpg'] }
                ]
            },
            {
                name: "Vero Freizeithose",
                category: "Jeans",
                price: "239,95 €",
                variants: [
                    { images: ['https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073328_1_large.jpg'] }
                ]
            },
        ]
    }
}

export default connect(
    (globalState, props) => {
        return {
            ...props,
            context: globalState.app.context,
        }
    }
)(Wishlist)