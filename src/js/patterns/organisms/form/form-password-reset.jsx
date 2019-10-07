import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class OrganismsFormPasswordReset extends Component {
    render () {
        return (<div>
          <form method="">
            <fieldset>
              <div className='o-form-area o-distance-m'>
                <div className="o-form-area__column-6-6 o-form-area__new-row">
                  <label for='inp-password' className='c-form-label'>Altes Passwort</label>
                  <div className='c-form-unit o-distance-s'>
                    <input type='password' className='c-form-unit__input c-form-unit__input--connected' id='inp-password' />
                    <button className='c-form-unit__type c-link c-link--quiet'>Zeigen</button>
                  </div>
                </div>
                <div className="o-form-area__column-6-6 o-form-area__new-row">
                  <label for='inp-password' className='c-form-label'>Neues Passwort</label>
                  <div className='c-form-unit o-distance-s'>
                    <input type='password' className='c-form-unit__input c-form-unit__input--connected' id='inp-password' />
                    <button className='c-form-unit__type c-link c-link--quiet'>Zeigen</button>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="o-distance-l">
              <button type='submit' className='c-button c-button--primary c-button--boss'>Speichern</button>
            </div>
          </form>
        </div>)
    }
}

OrganismsFormPasswordReset.propTypes = {
}

OrganismsFormPasswordReset.defaultProps = {
}

export default ComponentInjector.return('OrganismsFormPasswordReset', OrganismsFormPasswordReset)
