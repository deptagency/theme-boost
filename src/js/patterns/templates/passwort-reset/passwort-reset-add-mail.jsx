import React, { Component } from 'react'

import OrganismsAddressblock from 'js/patterns/organisms/blocks/addressblock'
import OrganismsPaymentListing from 'js/patterns/organisms/listings/payment-listing'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesPasswortResetAddMail extends Component {
    render () {
        return (
            <div className="o-television">
              <OrganismsHeaderMobile className="o-television__bar" />
              <div className="o-television__display">
                  <div>
                      <div className="o-block-short o-block-short--centered">
                        <div className="o-block-short__short-item">
                          <svg class="c-icon c-icon--m" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                              <title>Zurück</title>
                              <path d="M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
                          </svg>
                        </div>
                        <div className="o-block-short__body">
                          <h2 className="c-title-level-3">Neues Passwort anfordern</h2>
                        </div>
                      </div>
                      <p className="u-text-s t-text-quiet">Bitte gib Deine E-Mail-Adresse ein. Wir werden Dir eine E-Mail zusenden, damit Du Dein Passwort zurücksetzen kannst.</p>
                  </div>
                  <form method=''>
                      <fieldset>
                          <div className='o-form-area o-distance-m'>
                              <div className='o-form-area__column-6-6 o-form-area__new-row'>
                                  <label htmlFor='inp-bank-owner' className='c-form-label'>E-Mail-Address</label>
                                  <input type='text' className='o-distance-xs' id='inp-bank-owner' />
                              </div>
                          </div>
                      </fieldset>
                  </form>
              </div>
              <div className="o-television__remote-control">
                  <MoleculesButton type="primary" size="boss">Neues Passwort anfordern</MoleculesButton>
              </div>
            </div>
        )
    }
}

TemplatesPasswortResetAddMail.propTypes = {
}

TemplatesPasswortResetAddMail.defaultProps = {
}

export default ComponentInjector.return('TemplatesPasswortResetAddMail', TemplatesPasswortResetAddMail)
