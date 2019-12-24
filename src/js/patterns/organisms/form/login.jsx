import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Login extends Component {
    render () {
        return (<div>
            <form method=''>
                <fieldset>
                    <div className='o-form-area o-distance-m'>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-mail' className='c-form-label'>E-Mail Address</label>
                            <input type='email' id='inp-mail' className='o-distance-s' />
                        </div>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='inp-password' className='c-form-label'>Password</label>
                            <div className='c-form-unit o-distance-s'>
                                <input type='password' className='c-form-unit__input c-form-unit__input--connected' id='inp-password' />
                                <button className='c-form-unit__type c-link c-link--quiet'>Show</button>
                            </div>
                            <div className='o-flex o-flex--end o-distance-s'>
                                <a href='' className='c-link c-link--quiet u-text-s'>Passwort vergessen?</a>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>)
    }
}

Login.propTypes = {
}

Login.defaultProps = {
}

export default ComponentInjector.return('Login', Login)
