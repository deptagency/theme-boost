import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import OrganismsHero from '../../../patterns/catwalk-frontend/organisms/stages/stage'

class CatwalkHeroTastic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <OrganismsHero />
    }
}

CatwalkHeroTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

CatwalkHeroTastic.defaultProps = {}

export default CatwalkHeroTastic
