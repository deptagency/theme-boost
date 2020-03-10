import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class NewsletterBlock extends Component {
    render () {
        return (
            <div className='block bg-gray-800 p-10 rounded-lg text-center grid -mx-10'>
                <p className='text-2xl text-white'><FormattedMessage id='joinNewsletter' /></p>
                <p className='text-4xl md:text-5xl font-semibold text-white pb-8'><FormattedMessage id='exclusiveAccess' /></p>
                <div>
                    <FormattedMessage id='myEmail'>
                        {placeholder => {
 return <input type='email' placeholder={placeholder}
     className='m-auto max-w-xl md:max-w-2xl px-6 mb-4 sm:mr-4 bg-white text-2xl text-gray-600 sm:inline-block focus:border-indigo-700 rounded-lg' />
}}
                    </FormattedMessage>
                    {/* ghost BUTTON */}
                    <button type='submit'
                        className='w-full max-w-xl sm:max-w-xs py-6 px-6 m-auto bg-indigo-500 font-semibold hover:bg-indigo-700 text-white text-2xl sm:inline-block rounded-lg'>
                        <FormattedMessage id='submit' />
                    </button>
                </div>
                <p className='pt-8 text-2xl text-gray-500'><FormattedMessage id='submitAgree' /></p>
            </div>
        )
    }
}
NewsletterBlock.propTypes = {
}

NewsletterBlock.defaultProps = {
}

export default ComponentInjector.return('NewsletterBlock', NewsletterBlock)
