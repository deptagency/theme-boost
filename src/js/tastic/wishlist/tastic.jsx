import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import _ from 'lodash'
import { connect } from 'react-redux'

import ProductItem from '../../patterns/molecules/product/productItem'

class Wishlist extends Component {
    
    render () {
        const wishlist = this.props.wishlist
        const wishlistData = this.props.wishlist.data

        if (wishlist.data && wishlistData.lineItems.length > 0) {
            return (
                <div className='c-wishlist o-layout'>
                    <h1 className="c-title-level-3">
                        <span><Translatable value={this.props.title} /></span>
                    </h1>
                    <div className="o-grid o-grid--half o-grid--large-forth o-distance">
                        {_.map(wishlistData.lineItems, (lineItem, i) => {
                            
                            return <ProductItem key={i} product={lineItem} />
                        })}
                    </div>
                </div>
            )
        }else {
            return (<div>No products on your wishlist!</div>)
        }
    }
}

Wishlist.propTypes = {
    wishlist: PropTypes.object.isRequired,
}

Wishlist.defaultProps = {
    title: 'Wishlist'
}

export default connect(
    (globalState, props) => {
        return {
            ...props,
            context: globalState.app.context,
            wishlist: globalState.wishlist.wishlist
        }
    }
)(Wishlist)