import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsFormPasswordChange extends Component {
    render () {
        return (
            <form method=''>
                <fieldset>
                    <div className='o-form-area o-distance-m'>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-password' className='c-form-label'>
                                <FormattedMessage id='account.password.current' />
                            </label>
                            <div className='c-form-unit o-distance-s'>
                                <input type='password' className='c-form-unit__input c-form-unit__input--connected' id='inp-password' />
                                <button className='c-form-unit__type c-link c-link--quiet'>
                                    <FormattedMessage id='account.show' />
                                </button>
                            </div>
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-password' className='c-form-label'>
                                <FormattedMessage id='account.password.new' />
                            </label>
                            <div className='c-form-unit o-distance-s'>
                                <input type='password' className='c-form-unit__input c-form-unit__input--connected' id='inp-password' />
                                <button className='c-form-unit__type c-link c-link--quiet'>
                                    <FormattedMessage id='account.show' />
                                </button>
                            </div>
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-password-2' className='c-form-label'>
                                <FormattedMessage id='account.password.confirmNew' />
                            </label>
                            <div className='c-form-unit o-distance-s'>
                                <input type='password' className='c-form-unit__input c-form-unit__input--connected' id='inp-password-2' />
                                <button className='c-form-unit__type c-link c-link--quiet'>
                                    <FormattedMessage id='account.show' />
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}

OrganismsFormPasswordChange.propTypes = {
}

OrganismsFormPasswordChange.defaultProps = {
}

export default ComponentInjector.return('OrganismsFormPasswordChange', OrganismsFormPasswordChange)
