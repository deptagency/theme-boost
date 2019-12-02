import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { FormattedMessage } from 'react-intl'

const MoleculesDetaillist = ({ color, size, count }) => {
    return (
        <dl className='o-detaillist o-distance-s'>
            <dt className='t-text-quiet'><FormattedMessage id='colorProduct'/></dt>
            <dd className='u-text-strong'>{color}</dd>
            <dt className='t-text-quiet'><FormattedMessage id='sizeProduct'/></dt>
            <dd className='u-text-strong'>{size}</dd>
            <dt className='t-text-quiet'><FormattedMessage id='quantityProduct'/></dt>
            <dd className='u-text-strong'>{count}</dd>
        </dl>
    )
}

MoleculesDetaillist.propTypes = {
    count: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
}

MoleculesDetaillist.defaultProps = {
}

export default ComponentInjector.return('MoleculesDetaillist', MoleculesDetaillist)
