import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import app from 'frontastic-catwalk/src/js/app/app'

import { FormattedMessage } from 'react-intl'
import ProductItem from '../../patterns/molecules/product/productItem'

const Wishlist = (props) => {
    const wishlist = props.wishlist
    const wishlistData = props.wishlist.data

    if (wishlist.data && wishlistData.lineItems.length > 0) {
        return (
            <div className='c-wishlist o-layout'>
                <h1 className='c-title-level-3'>
                    <FormattedMessage id='wishlist.title' />
                </h1>
                <div className='o-grid o-grid--half o-grid--large-forth o-distance'>
                    {_.map(wishlistData.lineItems, (lineItem, i) => {
                        return <ProductItem
                            key={i}
                            product={lineItem}
                            removeWishlistItem={(lineItem) => {
                                app.getLoader('wishlist').removeLineItem(props.wishlist.wishlistId, {
                                    lineItemId: lineItem.lineItemId,
                                })
                            }}
                        />
                    })}
                </div>
            </div>
        )
    } else {
        return (<div><FormattedMessage id='wishlist.no_items' /></div>)
    }
}

Wishlist.propTypes = {
    wishlist: PropTypes.object.isRequired,
}

Wishlist.defaultProps = {
}

export default connect(
    (globalState, props) => {
        return {
            ...props,
            context: globalState.app.context,
            wishlist: globalState.wishlist.wishlist,
        }
    }
)(Wishlist)
