import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TemplatesHelp from '../../patterns/templates/help.jsx'
// import TemplatesHelpDetail from '../../patterns/templates/help-detail.jsx'

class HelpSectionTastic extends Component {
    render () {
        return (
            <TemplatesHelp />
        )
    }
}

HelpSectionTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

HelpSectionTastic.defaultProps = {}

export default HelpSectionTastic
