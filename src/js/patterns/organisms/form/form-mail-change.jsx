import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsFormMailChange extends Component {
    render () {
        return (<div>
            <form method=''>
                <fieldset>
                    <div className='o-form-area o-distance-m'>
                        <div className='o-form-area__column-6-6 o-form-area__new-row'>
                            <label htmlFor='' className='c-form-label'>E-Mail-Address</label>
                            <input type='mail' className='o-distance-xs' />
                        </div>
                    </div>
                </fieldset>
                <div className='o-distance-l'>
                    <button type='submit' className='c-button c-button--primary c-button--boss'>Jetzt speichern</button>
                </div>
            </form>
        </div>)
    }
}

OrganismsFormMailChange.propTypes = {
}

OrganismsFormMailChange.defaultProps = {
}

export default ComponentInjector.return('OrganismsFormMailChange', OrganismsFormMailChange)
