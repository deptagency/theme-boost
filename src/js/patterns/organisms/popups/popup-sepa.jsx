import React, { Component } from 'react'

import OrganismsFormSepa from 'js/patterns/organisms/form/form-sepa'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsPopupSepa extends Component {
    render () {
        return (
            <div className='o-popup c-box u-box-shadow t-ghost'>
              <div className="o-popup__header">
                  <OrganismsHeaderSlideIn title="Sepa-Lastschrift" />
               </div>
              <div className='o-popup__holder'>
                  <OrganismsFormSepa />
                  <MoleculesButton type="primary" size="boss" className="o-distance">Speichern</MoleculesButton>
              </div>
            </div>
        )
    }
}

OrganismsPopupSepa.propTypes = {
}

OrganismsPopupSepa.defaultProps = {
}

export default ComponentInjector.return('OrganismsPopupSepa', OrganismsPopupSepa)
