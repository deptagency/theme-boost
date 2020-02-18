import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class NewsletterBlock extends Component {
    render () {
        return (
            <div className='c-box c-box--xl u-background-color-primary'>
                <div className='o-media-block'>
                    <div className='o-media-block__body'>
                        <p className='c-topic u-text-color-ghost'><FormattedMessage id='exlusiveDiscounts' /></p>
                        <h3 className='c-title-level-1 u-text-color-ghost'><FormattedMessage id='becomeFamily' /></h3>
                    </div>
                    <div className='o-media-block__asset'>
                        <FormattedMessage id='yourEmail'>
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

NewsletterBlock.propTypes = {
}

NewsletterBlock.defaultProps = {
}

export default ComponentInjector.return('NewsletterBlock', NewsletterBlock)
