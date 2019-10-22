import React, { Component } from 'react'

import OrganismsFormPasswortReset from 'js/patterns/organisms/form/form-password-reset'
import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsPageHeader from 'js/patterns/organisms/base/header-page'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesNewPassword extends Component {
    render () {
        return (
            <div className="o-television">
              <OrganismsHeaderMobile className="o-television__bar" />
              <div className="o-television__display">
                  <div>
                      <OrganismsPageHeader title="Neues Passwort" />
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
