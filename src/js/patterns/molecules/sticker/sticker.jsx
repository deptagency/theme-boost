import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class MoleculesSticker extends Component {
    render () {
        return (<div>
            <span className='c-sticker'>20%</span>
        </div>)
    }
}

MoleculesSticker.propTypes = {
}

MoleculesSticker.defaultProps = {
}

export default ComponentInjector.return('MoleculesSticker', MoleculesSticker)
