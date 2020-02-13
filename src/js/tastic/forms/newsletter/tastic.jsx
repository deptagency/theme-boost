import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import NewsletterBlock from '../../../patterns/organisms/blocks/newsletter'

class NewsletterTastic extends Component {
    render () {
        return <NewsletterBlock />
    }
}

NewsletterTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

NewsletterTastic.defaultProps = {}

export default NewsletterTastic
