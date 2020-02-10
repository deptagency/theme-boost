import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Topic extends Component {
    render () {
        return (<div>
            <p className='c-topic u-text-color-600'>Exklusive Rabatte</p>
        </div>)
    }
}

Topic.propTypes = {
}

Topic.defaultProps = {
}

export default ComponentInjector.return('Topic', Topic)
