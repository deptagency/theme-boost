import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Blockquote extends Component {
    render () {
        return (<div>
            <blockquote>
                <p>lorem ipsum dolores</p>
                <cite>Author</cite>
            </blockquote>
        </div>)
    }
}

Blockquote.propTypes = {
}

Blockquote.defaultProps = {
}

export default ComponentInjector.return('Blockquote', Blockquote)
