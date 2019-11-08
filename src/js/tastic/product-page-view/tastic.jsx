import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import productConnector from 'frontastic-catwalk/src/js/tastic/product/connector'
import Main from './main/tastic.jsx'

class ProductPageViewTastic extends Component {
    render () {
        if (!this.props.product || !this.props.variant) {
            return null
        }

        return (
            <Main tastic={this.props.tastic} data={this.props.data} variant={this.props.variant} />
        )
    }
}

ProductPageViewTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
    // productConnector
    product: PropTypes.object,
    variant: PropTypes.object,
    option: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
    selectedVariant: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
}

ProductPageViewTastic.defaultProps = {}

export default connect(productConnector)(ProductPageViewTastic)
