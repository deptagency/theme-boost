import React, { Component } from 'react'

import ComponentInjector from '../../../../app/injector'

class AtomsFormInput extends Component {
    render () {
        return (<div>
          <input type='text' id='inp-textfield' name='textfield' />
        </div>)
    }
}

AtomsFormInput.propTypes = {
}

AtomsFormInput.defaultProps = {
}

export default ComponentInjector.return('AtomsFormInput', AtomsFormInput)
