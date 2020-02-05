import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ShowcaseTextTastic extends Component {
    render () {
        return (
            <div>{this.props.data.showcaseText}</div>
        )
    }
}

ShowcaseTextTastic.propTypes = {
    data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

ShowcaseTextTastic.defaultProps = {}

export default ShowcaseTextTastic
