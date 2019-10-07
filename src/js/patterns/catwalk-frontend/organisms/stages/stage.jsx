import React, { Component } from 'react'

import ComponentInjector from '../../../../app/injector'

class OrganismsStage extends Component {
    render () {
        return (<div>
          <div className="o-stage">
            <p className="c-topic">Der Frühling naht</p>
            <h2 className="c-title">Neue Schuhe eingetroffen</h2>
            <a href="" title="" className="c-button">Jetzt shoppen</a>
          </div>
        </div>)
    }
}

OrganismsStage.propTypes = {
}

OrganismsStage.defaultProps = {
}

export default ComponentInjector.return('OrganismsStage', OrganismsStage)
