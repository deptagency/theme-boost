import React, { Component } from 'react'

import OrganismsFormPasswortReset from 'js/patterns/organisms/form/form-password-reset'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesNewPassword extends Component {
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
                          <h2 className="c-title-level-3">Neues Passwort eingeben</h2>
                        </div>
                      </div>
                      <p className="u-text-s t-text-quiet">Bitte gib ein neues Passwort ein, damit du wieder Zugang zu deinem Benutzerkonto erhältst.</p>
                  </div>
                  <OrganismsFormPasswortReset />
              </div>
              <div className="o-television__remote-control">
                  <MoleculesButton type="primary" size="boss">Neues Passwort anfordern</MoleculesButton>
              </div>
            </div>
        )
    }
}

TemplatesNewPassword.propTypes = {
}

TemplatesNewPassword.defaultProps = {
}

export default ComponentInjector.return('TemplatesNewPassword', TemplatesNewPassword)
