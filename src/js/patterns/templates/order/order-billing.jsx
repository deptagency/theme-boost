import React, { Component } from 'react'

import OrganismsAddressblock from 'js/patterns/organisms/blocks/addressblock'
import OrganismsPaymentListing from 'js/patterns/organisms/listings/payment-listing'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderContext from 'js/patterns/organisms/base/header-context'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesOrderBilling extends Component {
    render () {
        return (
            <div className="o-television">
              <div className="o-television__bar">
              <OrganismsHeaderContext />
              </div>
              <div className="o-television__display">
                  <OrganismsAddressblock editable="true" />
                  <div className="o-television__display__boundless o-distance">
                      <span className="c-divider c-divider--break"></span>
                  </div>
                  <div className="o-distance">
                      <OrganismsPaymentListing />
                  </div>
              </div>
              <div className="o-television__remote-control">
                  <MoleculesButton type="primary" size="boss" className="o-distance">Weiter</MoleculesButton>
              </div>
            </div>
        )
    }
}

TemplatesOrderBilling.propTypes = {
}

TemplatesOrderBilling.defaultProps = {
}

export default ComponentInjector.return('TemplatesOrderBilling', TemplatesOrderBilling)
