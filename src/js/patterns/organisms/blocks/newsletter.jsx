import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsNewsletterBlock extends Component {
    render () {
        return (
            <div className='c-box t-spotlight'>
                <div className='o-grid o-grid--medium-half'>
                    <div>
                        <p className='c-topic t-text-ghost'><FormattedMessage id='exlusiveDiscounts' /></p>
                        <h3 className='c-title t-text-ghost'><FormattedMessage id='becomeFamily' /></h3>
                    </div>
                    <div>
                        <FormattedMessage id='yourEmail' >
                            {placeholder => { return <input type='email' placeholder={placeholder} className='c-input-ghost' /> }}
                        </FormattedMessage>
                        <div className='o-distance-s'>
                            <button type='submit' className='c-button c-button--boss c-button--ghost'><FormattedMessage id='submit' /></button>
                            <p className='u-text-xs o-distance-s'><FormattedMessage id='submitAgree' /></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

OrganismsNewsletterBlock.propTypes = {
}

OrganismsNewsletterBlock.defaultProps = {
}

export default ComponentInjector.return('OrganismsNewsletterBlock', OrganismsNewsletterBlock)
