import React from 'react'
import { FormattedMessage } from 'react-intl'

import Button from '../../atoms/buttons/button'
import PageHeader from '../../organisms/base/header-page'
import HeaderMobile from '../../organisms/base/header-mobile'
import Footer from '../../organisms/base/foot'
import ReferalBordered from '../../atoms/links/referal-bordered'
import Addressblock from '../../organisms/blocks/addressblock'

const MyAddresses = props => {
    return (
        <div className='o-television'>
            <HeaderMobile className='o-television__bar' />
            <div className='o-television__display'>
                <PageHeader title='Adressen' />
                <button className='c-button c-button--quiet c-button--boss o-distance-m'>
                    <svg className='c-icon c-icon--m' width='36' height='36' viewBox='0 0 36 36' fill='none'>
                        <path d='M18 35.625C21.4859 35.625 24.8935 34.5913 27.7919 32.6547C30.6903 30.718 32.9494 27.9654 34.2834 24.7448C35.6174 21.5243 35.9664 17.9805 35.2863 14.5615C34.6063 11.1426 32.9277 8.00215 30.4628 5.53725C27.9979 3.07235 24.8574 1.39373 21.4385 0.713667C18.0196 0.0336028 14.4758 0.382637 11.2552 1.71663C8.03466 3.05063 5.28201 5.30967 3.34535 8.20808C1.40869 11.1065 0.375 14.5141 0.375 18C0.380558 22.6727 2.23926 27.1525 5.54338 30.4566C8.84751 33.7608 13.3273 35.6194 18 35.625ZM18 4.12501C20.7442 4.12501 23.4268 4.93876 25.7085 6.46337C27.9903 7.98797 29.7687 10.155 30.8188 12.6903C31.869 15.2256 32.1438 18.0154 31.6084 20.7069C31.073 23.3984 29.7516 25.8707 27.8111 27.8111C25.8707 29.7516 23.3984 31.073 20.7069 31.6084C18.0154 32.1438 15.2256 31.869 12.6903 30.8188C10.1549 29.7687 7.98796 27.9903 6.46336 25.7085C4.93875 23.4268 4.125 20.7442 4.125 18C4.12897 14.3213 5.59207 10.7945 8.19328 8.19329C10.7945 5.59208 14.3213 4.12898 18 4.12501Z' />
                        <path d='M9.40967 19.875H15.7502C15.8496 19.875 15.945 19.9145 16.0153 19.9848C16.0857 20.0551 16.1252 20.1505 16.1252 20.25V26.5905C16.1252 27.0877 16.3227 27.5647 16.6743 27.9163C17.026 28.2679 17.5029 28.4655 18.0002 28.4655C18.4974 28.4655 18.9744 28.2679 19.326 27.9163C19.6776 27.5647 19.8752 27.0877 19.8752 26.5905V20.25C19.8752 20.1505 19.9147 20.0551 19.985 19.9848C20.0553 19.9145 20.1507 19.875 20.2502 19.875H26.5907C27.0879 19.875 27.5649 19.6774 27.9165 19.3258C28.2681 18.9742 28.4657 18.4972 28.4657 18C28.4657 17.5027 28.2681 17.0258 27.9165 16.6741C27.5649 16.3225 27.0879 16.125 26.5907 16.125H20.2502C20.1507 16.125 20.0553 16.0855 19.985 16.0151C19.9147 15.9448 19.8752 15.8494 19.8752 15.75V9.40796C19.8752 8.91068 19.6776 8.43376 19.326 8.08213C18.9744 7.7305 18.4974 7.53296 18.0002 7.53296C17.5029 7.53296 17.026 7.7305 16.6743 8.08213C16.3227 8.43376 16.1252 8.91068 16.1252 9.40796V15.75C16.1252 15.8494 16.0857 15.9448 16.0153 16.0151C15.945 16.0855 15.8496 16.125 15.7502 16.125H9.40967C8.91239 16.125 8.43547 16.3225 8.08384 16.6741C7.73221 17.0258 7.53467 17.5027 7.53467 18C7.53467 18.4972 7.73221 18.9742 8.08384 19.3258C8.43547 19.6774 8.91239 19.875 9.40967 19.875Z' />
                    </svg>

                    <p><FormattedMessage id='account.address.newAddress' /></p>
                </button>
                <div className='o-distance-l'>
                    <div className='o-grid o-grid--large-half o-grid--inline'>
                        <div className='c-frame--breakpoint-l'>
                            <h2 className='c-title-level-4 t-text-quiet u-text-uppercase'>
                                <FormattedMessage id='account.address.residential' />
                            </h2>
                            <div className='o-distance-m'>
                                <Addressblock />
                            </div>
                            <div className='o-distance-m'>
                                <div className='o-list-bare'>
                                    <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                        <svg className='c-icon c-icon--s o-block-short__short-item t-text-focus' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
                                            <title>check</title>
                                            <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                        </svg>
                                        <div className='o-block-short__body u-text-s'>
                                            <FormattedMessage id='account.address.standardBilling' />
                                        </div>
                                    </div>
                                    <div className='o-list-bare__item o-block-short o-block-short--centered'>
                                        <svg className='c-icon c-icon--s o-block-short__short-item t-text-focus' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
                                            <title>check</title>
                                            <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                        </svg>
                                        <div className='o-block-short__body u-text-s'>
                                            <FormattedMessage id='account.address.standardDelivery' />
                                        </div>
                                    </div>
                                </div>
                                <div className='o-buttonbar o-distance-m o-buttonbar--spread'>
                                    <button className='o-buttonbar__item'>
                                        <svg className='c-icon c-icon--outline c-icon--s' width='20' height='20' viewBox='0 0 20 20' fill='none'>
                                            <path d='M1.25 3.75H18.75' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            <path d='M11.875 1.25H8.125C7.79348 1.25 7.47554 1.3817 7.24112 1.61612C7.0067 1.85054 6.875 2.16848 6.875 2.5V3.75H13.125V2.5C13.125 2.16848 12.9933 1.85054 12.7589 1.61612C12.5245 1.3817 12.2065 1.25 11.875 1.25Z' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            <path d='M8.125 14.375V8.125' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            <path d='M11.875 14.375V8.125' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                            <path d='M15.7208 17.6033C15.6949 17.9159 15.5524 18.2073 15.3216 18.4197C15.0909 18.6321 14.7887 18.75 14.475 18.75H5.52583C5.21218 18.75 4.90998 18.6321 4.6792 18.4197C4.44842 18.2073 4.30593 17.9159 4.28 17.6033L3.125 3.75H16.875L15.7208 17.6033Z' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        </svg>
                                    </button>
                                    <Button type='quiet' className='o-buttonbar__item'>
                                        <FormattedMessage id='account.edit' />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='o-distance-l u-hidden-large-up'>
                            <span className='c-divider o-list-bare__item' />
                        </div>
                        <div className='c-frame--breakpoint-l o-distance-l o-distance-none--breakpoint-l'>
                            <h2 className='c-title-level-4 t-text-quiet u-text-uppercase'>
                                <FormattedMessage id='account.address.residential' /></h2>
                            <div className='o-distance-m'>
                                <Addressblock />
                            </div>
                            <div className='o-buttonbar o-distance-m o-buttonbar--spread'>
                                <button className='o-buttonbar__item'>
                                    <svg className='c-icon c-icon--outline c-icon--s' width='20' height='20' viewBox='0 0 20 20' fill='none'>
                                        <path d='M1.25 3.75H18.75' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M11.875 1.25H8.125C7.79348 1.25 7.47554 1.3817 7.24112 1.61612C7.0067 1.85054 6.875 2.16848 6.875 2.5V3.75H13.125V2.5C13.125 2.16848 12.9933 1.85054 12.7589 1.61612C12.5245 1.3817 12.2065 1.25 11.875 1.25Z' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M8.125 14.375V8.125' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M11.875 14.375V8.125' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                        <path d='M15.7208 17.6033C15.6949 17.9159 15.5524 18.2073 15.3216 18.4197C15.0909 18.6321 14.7887 18.75 14.475 18.75H5.52583C5.21218 18.75 4.90998 18.6321 4.6792 18.4197C4.44842 18.2073 4.30593 17.9159 4.28 17.6033L3.125 3.75H16.875L15.7208 17.6033Z' stroke='#31333E' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                    </svg>
                                </button>
                                <Button type='quiet' className='o-buttonbar__item'>
                                    <FormattedMessage id='account.edit' />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='u-hidden-large-up'>
                    <section className='o-distance'>
                        <nav role='navigation'>
                            <ReferalBordered title={<FormattedMessage id='account.orders' />} />
                            <ReferalBordered title={<FormattedMessage id='account.returns' />} />
                            <ReferalBordered title={<FormattedMessage id='account.userInfo' />} />
                            <ReferalBordered title={<FormattedMessage id='account.addresses' />} />
                        </nav>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    )
}

MyAddresses.propTypes = {

}

export default MyAddresses
