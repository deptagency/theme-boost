import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Title extends Component {
    render () {
        return (<div>
            <h2 className='c-title'>Title</h2>
        </div>)
    }
}

Title.propTypes = {
}

Title.defaultProps = {
}

export default ComponentInjector.return('Title', Title)
