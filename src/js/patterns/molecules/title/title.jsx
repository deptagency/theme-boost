import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class MoleculesTitle extends Component {
    render () {
        return (<div>
            <h2 className='c-title'>Title</h2>
        </div>)
    }
}

MoleculesTitle.propTypes = {
}

MoleculesTitle.defaultProps = {
}

export default ComponentInjector.return('MoleculesTitle', MoleculesTitle)
