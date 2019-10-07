import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// import Link from '../../app/link'

import ReferencePropType from '../../component/reference'

// import logo from '../../../layout/logo.svg'
//
// import LanguageSelector from './languageSelector'
// import MiniCart from './miniCart'
// import Sequential from './sequential'
// import SvgIcon from '../../patterns/atoms/icons/icon'

import Header from '../../patterns/organisms/base/header'

class CatwalkHeaderTastic extends Component {
    render () {
        // let customLogo = this.props.tastic.schema.get('logo') || null
        console.log(this.props.data)
        const { data } = this.props
        return <Header genderNavEntries={data.genderNavEntries} />
    }
}

CatwalkHeaderTastic.propTypes = {
    data: PropTypes.shape({
        genderNavEntries: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                reference: ReferencePropType,
            })
        ),
    }),
    tastic: PropTypes.object.isRequired,
}

CatwalkHeaderTastic.defaultProps = {}

export default CatwalkHeaderTastic
