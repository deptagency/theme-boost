import React, { Component } from 'react'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import NewsletterBlock from '../../../patterns/organisms/NewsletterBlock'

class NewsletterBlockTastic extends Component {
    render() {
        return <NewsletterBlock />
    }
}

NewsletterBlockTastic.propTypes = {}

NewsletterBlockTastic.defaultProps = {}

export default tastify({ translate: true })(NewsletterBlockTastic)
