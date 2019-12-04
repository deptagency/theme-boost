import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import productConnector from 'frontastic-catwalk/src/js/tastic/product/connector'

import OrganismsMoreInfoProduct from '../../patterns/organisms/products/more-info.jsx'

class MoreInfoProductTastic extends Component {
    render () {
        const { product, variant: propsVariant, route } = this.props

        if (!product || !propsVariant) {
            return null
        }

        let variant = product.variants.find(v => { return v.attributes['ean'] === route.parameters.identifier })
        if (!variant) {
            variant = propsVariant
        }

        return (
            <OrganismsMoreInfoProduct product={{ ...variant, name: product.name }} />
        )
    }
}

MoreInfoProductTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
    // productConnector
    product: PropTypes.object,
    variant: PropTypes.object,
    route: PropTypes.object,
}

MoreInfoProductTastic.defaultProps = {}

export default connect((globalState, props) => {
    return {
        route: globalState.app.route,
        ...props,
    }
})(connect(productConnector)(MoreInfoProductTastic))
