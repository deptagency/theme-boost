import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'

const Detaillist = ({ color, size }) => {
    return (
        <dl className='o-detaillist'>
            <dt className='u-text-strong u-text-s'><FormattedMessage id='colorProduct' /></dt>
            <dd className='u-text-s'>{color}</dd>
            <dt className='u-text-strong u-text-s'><FormattedMessage id='sizeProduct' /></dt>
            <dd className='u-text-s'>{size}</dd>
        </dl>
    )
}

Detaillist.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
}

Detaillist.defaultProps = {
}

export default ComponentInjector.return('Detaillist', Detaillist)
