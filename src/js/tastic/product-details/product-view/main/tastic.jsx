import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import app from 'frontastic-catwalk/src/js/app/app'
import productConnector from 'frontastic-catwalk/src/js/tastic/product/connector'
import OrganismsProductView from '../../../../patterns/organisms/products/product-view'

class Main extends Component {
    render() {
        const { product, variant } = this.props

        if (!product || !variant) {
            return null
        }

        // TODO: Make replaceable by integrators
        const sizes = product.variants.map((v) => {
            // eslint-disable-line array-callback-return
            if (v.attributes.size) {
                return v.attributes.size
            }
        })

        return (
            <OrganismsProductView
                images={variant.images}
                name={this.props.product.name}
                variant={variant}
                sizes={sizes}
                addToWishlist={() => {
                    app.getLoader('wishlist').add(product, variant, 1, null)
                }}
            />
        )
    }
}

Main.propTypes = {
    data: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
    tastic: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
    // productConnector
    product: PropTypes.object,
    variant: PropTypes.object,
    option: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
    selectedVariant: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
}

Main.defaultProps = {
    komplettPreis: false,
}

export default connect(productConnector)(Main)
