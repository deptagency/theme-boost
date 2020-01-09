import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Sticker extends Component {
    render () {
        return (<div>
            <span className='c-sticker'>20%</span>
        </div>)
    }
}

Sticker.propTypes = {
}

Sticker.defaultProps = {
}

export default ComponentInjector.return('Sticker', Sticker)
