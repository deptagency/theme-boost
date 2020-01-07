import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Stage extends Component {
    render () {
        return (<div>
            <div className='o-stage'>
                <p className='c-topic'>Der Frühling naht</p>
                <h2 className='c-title'>Neue Schuhe eingetroffen</h2>
                <a href='' title='' className='c-button'>Jetzt shoppen</a>
            </div>
        </div>)
    }
}

Stage.propTypes = {
}

Stage.defaultProps = {
}

export default ComponentInjector.return('Stage', Stage)
