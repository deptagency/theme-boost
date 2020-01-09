import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import Button from 'js/patterns/atoms/buttons/button'

class ButtonBar extends Component {
    render () {
        return (<div>
            <div className='o-buttonbar'>
                <Button type='primary' className='o-buttonbar__item'>
              Primary Button
                </Button>
                <Button type='quiet' className='o-buttonbar__item'>
              Quiet Button
                </Button>
            </div>
            <h3 className='o-distance'>Buttonbar with full item</h3>
            <div className='o-buttonbar'>
                <Button type='primary' className='o-buttonbar__item o-buttonbar__item--full'>
              Primary Button
                </Button>
                <Button type='quiet' className='o-buttonbar__item'>
              Quiet Button
                </Button>
            </div>
            <h3 className='o-distance'>Buttonbar Stacked</h3>
            <div className='o-buttonbar o-buttonbar--stacked'>
                <Button type='primary' className='o-buttonbar__item o-buttonbar__item--full'>
              Primary Button
                </Button>
                <Button type='quiet' className='o-buttonbar__item'>
              Quiet Button
                </Button>
            </div>
        </div>)
    }
}

ButtonBar.propTypes = {
}

ButtonBar.defaultProps = {
}

export default ComponentInjector.return('ButtonBar', ButtonBar)
