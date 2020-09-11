import React from 'react'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'
import Input from 'Atoms/input'
import Button from 'Atoms/button'

const NewsletterBlock = ({ intl }) => {
    const placeholder = intl.formatMessage({ id: 'myEmail' })

    return (
        <div className='bg-neutral-900 rounded'>
            <div className='px-6 py-10 mx-auto w-full sm:w-11/12 md:w-8/12'>
                <p className='mb-1 text-sm text-center text-neutral-100 leading-tight' />
                <p className='text-2xl lg:text-3xl text-center text-neutral-100 font-bold leading-none'>
                    <FormattedMessage id='exclusiveAccess' />
                </p>

                <div className='my-6 flex flex-col sm:flex-row'>
                    <div className='w-full mb-2 sm:mb-0 mr-0 sm:-mr-2 lg:mr-2'>
                        <Input type='email' placeholder={placeholder} className='form-input h-10' />
                    </div>

                    <div className='w-full sm:max-w-124px'>
                        <Button
                            name={intl.formatMessage({ id: 'submit' })}
                            variant='btn btn-primary w-full h-10'>
                            <FormattedMessage id='submit' />
                        </Button>
                    </div>
                </div>

                <p className='px-4 sm:px-24 text-xs text-center text-neutral-100 leading-tight'>
                    <FormattedMessage id='submitAgree' />
                </p>
            </div>
        </div>
    )
}

NewsletterBlock.propTypes = {
    intl: intlShape.isRequired,
}

NewsletterBlock.defaultProps = {}

export default ComponentInjector.return('NewsletterBlock', injectIntl(NewsletterBlock))
