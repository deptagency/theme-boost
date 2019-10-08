import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReferencePropType from '../../component/reference'

import Header from '../../patterns/organisms/base/header'

class HeaderTastic extends Component {
    render () {
        const { data } = this.props
        return <Header genderNavEntries={data.genderNavEntries} />
    }
}

HeaderTastic.propTypes = {
    data: PropTypes.shape({
        genderNavEntries: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                reference: ReferencePropType,
            })
        ),
    }),
    // tastic: PropTypes.object.isRequired,
}

HeaderTastic.defaultProps = {}

export default HeaderTastic
