import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Headlines extends Component {
    render () {
        return (<div>
            <h1>It is a simple title</h1>
            <h2>It is a simple title</h2>
            <h3>It is a simple title</h3>
            <h4>It is a simple title</h4>
            <h5>It is a simple title</h5>
            <h6>It is a simple title</h6>
        </div>)
    }
}

Headlines.propTypes = {
}

Headlines.defaultProps = {
}

export default ComponentInjector.return('Headlines', Headlines)
