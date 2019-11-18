import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import productConnector from 'frontastic-catwalk/src/js/tastic/product/connector'
import OrganismsProductView from '../../../patterns/organisms/products/product-view'

// class Main extends PureComponent {
class Main extends Component {
    render () {
        const { product, variant: propsVariant, route } = this.props

        if (!product || !propsVariant) {
            return null
        }

        let variant = product.variants.find(v => { return v.attributes['ean'] === route.parameters.identifier })
        if (!variant) {
            variant = propsVariant
        }

        const sizes = product.variants.map((v) => { // eslint-disable-line array-callback-return
            if (v.attributes.size) { return v.attributes.size }
        })

        return (
            <OrganismsProductView
                images={variant.images}
                name={this.props.product.name}
                variant={variant}
                sizes={sizes}
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
    // connect()
    route: PropTypes.object.isRequired,
}

Main.defaultProps = {
    komplettPreis: false,
}

export default connect((globalState, props) => {
    return {
        route: globalState.app.route,
        ...props,
    }
})(connect(productConnector)(Main))
