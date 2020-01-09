import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Paragraph extends Component {
    render () {
        return (<div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>)
    }
}

Paragraph.propTypes = {
}

Paragraph.defaultProps = {
}

export default ComponentInjector.return('Paragraph', Paragraph)
