import React, { Component } from 'react'

import ComponentInjector from '../../../../app/injector'

class MoleculesFormUnit extends Component {
    render () {
        return (<div>
          <div className='c-form-unit'>
            <input type='text' className='c-form-unit__input' id='inp-unit' />
            <div className='c-form-unit__type'>€</div>
          </div>
          <h3 className='o-distance'>Form Unit with Frameless Unit</h3>
          <div className='c-form-unit'>
            <input type='password' className='c-form-unit__input c-form-unit__input--connected' id='inp-unit' />
            <button className='c-form-unit__type c-link c-link--quiet'>Zeigen</button>
          </div>
          <h3 className='o-distance'>Form Unit with Prefix</h3>
          <div className='c-form-unit'>
            <div className='c-form-unit__type c-form-unit__type--prefix'>€</div>
            <input type='text' className='c-form-unit__input c-form-unit__input--last' id='inp-unit' />
          </div>
        </div>)
    }
}

MoleculesFormUnit.propTypes = {
}

MoleculesFormUnit.defaultProps = {
}

export default ComponentInjector.return('MoleculesFormUnit', MoleculesFormUnit)
