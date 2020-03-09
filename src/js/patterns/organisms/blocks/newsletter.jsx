import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class NewsletterBlock extends Component {
    render () {
        return (
            <div className='block bg-indigo-500 p-10 rounded-lg text-center grid -mx-10'>
                <p className='text-3xl text-white pb-3'><FormattedMessage id='exlusiveDiscounts' /></p>
                <p className='text-5xl md:text-6xl font-semibold text-white pb-8'><FormattedMessage id='becomeFamily' /></p>
                <div>
                    <FormattedMessage id='yourEmail'>
                        {placeholder => { return <input type='email' placeholder={placeholder} className='m-auto max-w-2xl py-8 mb-5 bg-transparent text-3xl text-indigo-300 focus:border-indigo-700 rounded-lg' /> }}
                    </FormattedMessage>
                    {/* ghost BUTTON */}
                    <button type='submit' className='w-full max-w-2xl py-8 m-auto bg-white font-semibold hover:bg-indigo-700 hover:text-white text-indigo-500 text-3xl rounded-lg'>
                        <FormattedMessage id='submit' />
                    </button>
                </div>
                <p className='pt-8 text-2xl text-white'><FormattedMessage id='submitAgree' /></p>
            </div>
        )
    }
}
NewsletterBlock.propTypes = {
}

NewsletterBlock.defaultProps = {
}

export default ComponentInjector.return('NewsletterBlock', NewsletterBlock)
