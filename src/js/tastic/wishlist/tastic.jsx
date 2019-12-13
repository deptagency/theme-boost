import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'

import app from 'frontastic-catwalk/src/js/app/app'

import MoleculesProductInWishlist from '../../patterns/organisms/products/product-in-wishlist'

class Wishlist extends Component {
    
    render () {
        return (<div className='c-wishlist o-layout'>
                    <h1 class="c-title-level-3">
                        <span>cart.myCart</span>
                    </h1>
                    <div class="o-grid o-grid--half o-grid--large-forth o-distance">
                        {_.map(this.props.wishlist.lineItems, (lineItem) => {
                            return <MoleculesProductInWishlist
                                key={lineItem.lineItemId}
                                lineItem={lineItem}
                                onRemove={(lineItem) => {
                                    app.getLoader('wishlist').removeLineItem(this.props.wishlist.wishlistId, {
                                        lineItemId: lineItem.lineItemId,
                                    })
                                }}
                                onChangeCount={(lineItem, count) => {
                                    app.getLoader('wishlist').updateLineItem(this.props.wishlist.wishlistId, {
                                        lineItemId: lineItem.lineItemId,
                                        count: count,
                                    })
                                }}
                            />
                        })}
                    </div>
                </div>)
    }
}

Wishlist.propTypes = {
    wishlist: PropTypes.object.isRequired,
}

Wishlist.defaultProps = {
    wishlist: {
        name: "My Wishes",
        lineItems: [
            {
                name: "item_1"
            },
            {
                name: "item_2"
            },
            {
                name: "item_3"
            },
            {
                name: "item_4"
            },
            {
                name: "item_5"
            },
            {
                name: "item_6"
            }
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