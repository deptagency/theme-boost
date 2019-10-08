import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import OrganismsHero from '../../patterns/organisms/stages/stage'

class HeroTastic extends Component {
    render () {
        return <OrganismsHero />
    }
}

HeroTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

HeroTastic.defaultProps = {}

export default HeroTastic
