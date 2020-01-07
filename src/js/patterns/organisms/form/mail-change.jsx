import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class MailChange extends Component {
    render () {
        return (<div>
            <form method=''>
                <div className='o-form-area'>
                    <div className='o-form-area__column-6-6 o-form-area__new-row'>
                        <label htmlFor='' className='c-form-label'>E-Mail-Address</label>
                        <input type='mail' className='o-distance-xs' />
                    </div>
                    <div className='o-form-area__column-6-6 o-form-area__new-row'>
                        <button type='submit' className='c-button c-button--primary c-button--boss'>Jetzt speichern</button>
                    </div>
                </div>
            </form>
        </div>)
    }
}

MailChange.propTypes = {
}

MailChange.defaultProps = {
}

export default ComponentInjector.return('MailChange', MailChange)
