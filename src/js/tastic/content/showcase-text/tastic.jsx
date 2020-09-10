import React, { Component } from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'

class ShowcaseTextTastic extends Component {
    render () {
        return (
            <div className='border m-2 p-2'>{this.props.data.showcaseText}</div>
        )
    }
}

ShowcaseTextTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ShowcaseTextTastic.defaultProps = {}

export default tastify({ translate: true })(ShowcaseTextTastic)
