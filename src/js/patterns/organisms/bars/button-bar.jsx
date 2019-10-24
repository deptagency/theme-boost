import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'
import MoleculesButton from 'js/patterns/molecules/buttons/button'

class OrganismsButtonBar extends Component {
    render () {
        return (<div>
            <div className='o-buttonbar'>
                <MoleculesButton type='primary' className='o-buttonbar__item'>
              Primary Button
                </MoleculesButton>
                <MoleculesButton type='quiet' className='o-buttonbar__item'>
              Quiet Button
                </MoleculesButton>
            </div>
            <h3 className='o-distance'>Buttonbar with full item</h3>
            <div className='o-buttonbar'>
                <MoleculesButton type='primary' className='o-buttonbar__item o-buttonbar__item--full'>
              Primary Button
                </MoleculesButton>
                <MoleculesButton type='quiet' className='o-buttonbar__item'>
              Quiet Button
                </MoleculesButton>
            </div>
            <h3 className='o-distance'>Buttonbar Stacked</h3>
            <div className='o-buttonbar o-buttonbar--stacked'>
                <MoleculesButton type='primary' className='o-buttonbar__item o-buttonbar__item--full'>
              Primary Button
                </MoleculesButton>
                <MoleculesButton type='quiet' className='o-buttonbar__item'>
              Quiet Button
                </MoleculesButton>
            </div>
        </div>)
    }
}

OrganismsButtonBar.propTypes = {
}

OrganismsButtonBar.defaultProps = {
}

export default ComponentInjector.return('OrganismsButtonBar', OrganismsButtonBar)
