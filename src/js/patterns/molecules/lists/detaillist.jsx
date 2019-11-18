import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const MoleculesDetaillist = ({ color, size, count }) => {
    return (
        <dl className='o-detaillist o-distance-s'>
            <dt className='t-text-quiet'>Farbe:</dt>
            <dd className='u-text-strong'>{color}</dd>
            <dt className='t-text-quiet'>Größe:</dt>
            <dd className='u-text-strong'>{size}</dd>
            <dt className='t-text-quiet'>Anzahl:</dt>
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
