import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OrganismsMoreInfoProduct from "../../patterns/organisms/moreInfoProduct/more-info";

class CatwalkMoreInfoProductTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <OrganismsMoreInfoProduct />
        )
    }
}

CatwalkMoreInfoProductTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkMoreInfoProductTastic.defaultProps = {}

export default CatwalkMoreInfoProductTastic
