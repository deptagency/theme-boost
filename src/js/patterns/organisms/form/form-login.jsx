import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class OrganismsFormLogin extends Component {
    render () {
        return (<div>
            <form method=''>
                <fieldset>
                    <legend>Melde dich jetzt an</legend>
                    <div className='o-form-area o-distance-m'>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-mail' className='c-form-label'>E-Mail Adresse</label>
                            <input type='email' id='inp-mail' className='o-distance-s' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-password' className='c-form-label'>Passwort</label>
                            <div className='c-form-unit o-distance-s'>
                                <input type='password' className='c-form-unit__input c-form-unit__input--connected' id='inp-password' />
                                <button className='c-form-unit__type c-link c-link--quiet'>Zeigen</button>
                            </div>
                            <div className='o-flex o-flex--end o-distance-s'>
                                <a href='' className='c-link c-link--quiet u-text-s'>Passwort vergessen?</a>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className='o-distance-l'>
                    <button type='submit' className='c-button c-button--primary c-button--boss'>Anmelden</button>
                </div>
            </form>
        </div>)
    }
}

OrganismsFormLogin.propTypes = {
}

OrganismsFormLogin.defaultProps = {
}

export default ComponentInjector.return('OrganismsFormLogin', OrganismsFormLogin)
