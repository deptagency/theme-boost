import React, { Component } from 'react'

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
}

MoleculesDetaillist.defaultProps = {
}

export default ComponentInjector.return('MoleculesDetaillist', MoleculesDetaillist)
