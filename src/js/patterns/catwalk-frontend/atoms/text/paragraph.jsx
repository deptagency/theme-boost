import React, { Component } from 'react'

import ComponentInjector from '../../../../app/injector'

class AtomsParagraph extends Component {
    render () {
        return (<div>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
        </div>)
    }
}

AtomsParagraph.propTypes = {
}

AtomsParagraph.defaultProps = {
}

export default ComponentInjector.return('AtomsParagraph', AtomsParagraph)
