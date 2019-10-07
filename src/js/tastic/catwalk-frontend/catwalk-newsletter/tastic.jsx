import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsNewsletterBlock from '../../../patterns/catwalk-frontend/organisms/blocks/newsletter'

class CatwalkNewsletterTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <OrganismsNewsletterBlock />
    }
}

CatwalkNewsletterTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkNewsletterTastic.defaultProps = {}

export default CatwalkNewsletterTastic
