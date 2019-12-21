import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'

const MoleculesDetaillist = ({ color, size }) => {
    return (
        <dl className='o-detaillist o-distance-s'>
            <dt className='u-text-color-quiet'><FormattedMessage id='colorProduct' /></dt>
            <dd className='u-text-strong'>{color}</dd>
            <dt className='u-text-color-quiet'><FormattedMessage id='sizeProduct' /></dt>
            <dd className='u-text-strong'>{size}</dd>
        </dl>
    )
}

MoleculesDetaillist.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
}

MoleculesDetaillist.defaultProps = {
}

export default ComponentInjector.return('MoleculesDetaillist', MoleculesDetaillist)
