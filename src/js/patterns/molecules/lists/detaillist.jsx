import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class MoleculesDetaillist extends Component {
    render () {
        return (<div>
            <dl className='o-detaillist o-distance-s'>
                <dt className='t-text-quiet'>Farbe:</dt>
                <dd className='u-text-strong'>Olive</dd>
                <dt className='t-text-quiet'>Größe:</dt>
                <dd className='u-text-strong'>36</dd>
                <dt className='t-text-quiet'>Anzahl:</dt>
                <dd className='u-text-strong'>2</dd>
            </dl>
        </div>)
    }
}

MoleculesDetaillist.propTypes = {
}

MoleculesDetaillist.defaultProps = {
}

export default ComponentInjector.return('MoleculesDetaillist', MoleculesDetaillist)
