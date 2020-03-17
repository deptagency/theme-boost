import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'

const Detaillist = ({ color, size }) => {
    return (
        <dl className='grid grid-cols-2-max-content col-gap-8 row-gap-6 items-start justify-start'>
            <dt className='text-3xl text-gray-600'><FormattedMessage id='colorProduct' /></dt>
            <dd className='text-3xl font-bold'>{color}</dd>
            <dt className='text-3xl text-gray-600'><FormattedMessage id='sizeProduct' /></dt>
            <dd className='text-3xl font-bold'>{size}</dd>
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
