import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Button from 'js/patterns/atoms/buttons/button'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsPageHeader from 'js/patterns/organisms/base/header-page'
import OrganismsFooter from 'js/patterns/organisms/base/foot'

const TemplatesMyUserData = ({ products }) => {
    return (
        <div className='o-television'>
            <OrganismsHeaderMobile className='o-television__bar' />
            <div className='o-television__display'>
                <div className='o-container-medium'>
                    <OrganismsPageHeader title='Meine Benutzerdaten' />
                    <article className='o-distance'>
                        <div className='o-block-short'>
                            <div className='o-block-short__short-item'>
                                <svg className='c-icon c-icon--m' version='1.1' id='Ebene_1' x='0px' y='0px' viewBox='0 0 200 200'>
                                    <g>
                                        <path d='M199.6,33.6L134.2,99l65.8,65.8V36.2C200,35.3,199.8,34.4,199.6,33.6z' />
                                        <path d='M90.9,109.3c4.4,4.4,11.9,4.4,16.3,0l82.5-82.5H9.4c-0.3,0-0.6,0.1-0.9,0.1L90.9,109.3z' />
                                        <path d='M125.8,107.4l-10.3,10.3c-4.4,4.4-10.3,6.8-16.5,6.8c-6.2,0-12.1-2.4-16.5-6.8l-7.8-7.8L7.9,176.7
                                            c0.5,0.1,1,0.2,1.5,0.2h181.3c1.4,0,2.6-0.3,3.8-0.8L125.8,107.4z' />
                                        <path d='M0.1,35.3c0,0.3-0.1,0.6-0.1,0.9v131.2c0,0.1,0,0.2,0,0.3l66.3-66.3L0.1,35.3z' />
                                    </g>
                                </svg>
                            </div>
                            <div className='o-block-short__body'>
                                <dt className='u-text-s t-text-quiet'>
                                    <FormattedMessage id='account.user.name' />
                                </dt>
                                <dd className='u-text-s u-text-strong'>
                                  John Doe
                                </dd>
                                <dt className='u-text-s t-text-quiet o-distance-s'>
                                    <FormattedMessage id='account.user.gender' />
                                </dt>
                                <dd className='u-text-s u-text-strong'>
                                  Männlich
                                </dd>
                            </div>
                        </div>
                        <Button type='quiet' className='o-distance-m'>
                            <FormattedMessage id='account.edit' />
                        </Button>
                    </article>

                    <span className='c-divider o-distance' />
                    <article className='o-distance'>
                        <div className='o-block-short'>
                            <div className='o-block-short__short-item'>
                                <svg className='c-icon c-icon--m' version='1.1' id='Ebene_1' x='0px' y='0px' viewBox='0 0 200 200'>
                                    <g>
                                        <path className='st0' d='M199.6,33.6L134.2,99l65.8,65.8V36.2C200,35.3,199.8,34.4,199.6,33.6z' />
                                        <path className='st0' d='M90.9,109.3c4.4,4.4,11.9,4.4,16.3,0l82.5-82.5H9.4c-0.3,0-0.6,0.1-0.9,0.1L90.9,109.3z' />
                                        <path className='st0' d='M125.8,107.4l-10.3,10.3c-4.4,4.4-10.3,6.8-16.5,6.8c-6.2,0-12.1-2.4-16.5-6.8l-7.8-7.8L7.9,176.7
                                            c0.5,0.1,1,0.2,1.5,0.2h181.3c1.4,0,2.6-0.3,3.8-0.8L125.8,107.4z' />
                                        <path className='st0' d='M0.1,35.3c0,0.3-0.1,0.6-0.1,0.9v131.2c0,0.1,0,0.2,0,0.3l66.3-66.3L0.1,35.3z' />
                                    </g>
                                </svg>
                            </div>
                            <div className='o-block-short__body'>
                                <dt className='u-text-s t-text-quiet'>
                                    <FormattedMessage id='account.login.emailAddress' />
                                </dt>
                                <dd className='u-text-s u-text-strong'>
                                  John.Doe@gmail.com
                                </dd>
                            </div>
                        </div>
                        <Button type='quiet' className='o-distance-m'>
                            <FormattedMessage id='account.edit' />
                        </Button>
                    </article>
                    <span className='c-divider o-distance' />
                    <article className='o-distance'>
                        <div className='o-block-short'>
                            <div className='o-block-short__short-item'>
                                <svg className='c-icon c-icon--m' version='1.1' id='Ebene_1' x='0px' y='0px' viewBox='0 0 200 200'>
                                    <g>
                                        <path className='st0' d='M199.6,33.6L134.2,99l65.8,65.8V36.2C200,35.3,199.8,34.4,199.6,33.6z' />
                                        <path className='st0' d='M90.9,109.3c4.4,4.4,11.9,4.4,16.3,0l82.5-82.5H9.4c-0.3,0-0.6,0.1-0.9,0.1L90.9,109.3z' />
                                        <path className='st0' d='M125.8,107.4l-10.3,10.3c-4.4,4.4-10.3,6.8-16.5,6.8c-6.2,0-12.1-2.4-16.5-6.8l-7.8-7.8L7.9,176.7
                                            c0.5,0.1,1,0.2,1.5,0.2h181.3c1.4,0,2.6-0.3,3.8-0.8L125.8,107.4z' />
                                        <path className='st0' d='M0.1,35.3c0,0.3-0.1,0.6-0.1,0.9v131.2c0,0.1,0,0.2,0,0.3l66.3-66.3L0.1,35.3z' />
                                    </g>
                                </svg>
                            </div>
                            <div className='o-block-short__body'>
                                <dt className='u-text-s t-text-quiet'>
                                    <FormattedMessage id='account.login.password' />
                                </dt>
                                <dd className='u-text-s u-text-strong'>
                                  **********
                                </dd>
                            </div>
                        </div>
                        <Button type='quiet' className='o-distance-m'>
                            <FormattedMessage id='account.edit' />
                        </Button>
                    </article>
                </div>
                <OrganismsFooter />
            </div>

        </div>
    )
}

TemplatesMyUserData.propTypes = {
    products: PropTypes.array.isRequired,
}

export default TemplatesMyUserData
