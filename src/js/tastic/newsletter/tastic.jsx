import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OrganismsNewsletterBlock from '../../patterns/organisms/blocks/newsletter'

class NewsletterTastic extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return <OrganismsNewsletterBlock />
    }
}

NewsletterTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

NewsletterTastic.defaultProps = {}

export default NewsletterTastic
