import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import OrganismsHero from '../../patterns/organisms/stages/stage'

class HeroTastic extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return <OrganismsHero />
    }
}

HeroTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

HeroTastic.defaultProps = {}

export default HeroTastic
