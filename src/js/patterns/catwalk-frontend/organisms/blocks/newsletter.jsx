import React, { Component } from 'react'

import ComponentInjector from '../../../../app/injector'

class OrganismsNewsletterBlock extends Component {
    render () {
        return (<div>
          <div className="c-box t-spotlight margin-12">
            <div className="o-grid o-grid--medium-half">
              <div>
                <p className="c-topic t-text-ghost">Exklusive Rabatte</p>
                <h3 className="c-title t-text-ghost">Werde Teil unserer kleinen Familie</h3>
              </div>
              <div>
                <form method="" action="">
                  <input type="email" placeholder="Deine E-Mail Adresse" className="c-input-ghost" />
                  <div className="o-distance-s">
                    <button type="submit" className="c-button c-button--boss c-button--ghost">Absenden</button>
                    <p className='u-text-xs o-distance-s'>Mit dem Klicken auf ‚Absenden’ stimmst du zu, dass wir deine Informationen im Rahmen unserer Datenschutzbestimmungen verarbeiten.</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>)
    }
}

OrganismsNewsletterBlock.propTypes = {
}

OrganismsNewsletterBlock.defaultProps = {
}

export default ComponentInjector.return('OrganismsNewsletterBlock', OrganismsNewsletterBlock)
