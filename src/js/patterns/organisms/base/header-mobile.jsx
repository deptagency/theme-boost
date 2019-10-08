import React, { Component } from 'react'
import ComponentInjector from '../../../app/injector'

class OrganismsHeaderMobile extends Component {
    render () {
        return (
            <header role='contentinfo' className='c-header'>
                <div className='o-container c-header__wrapper'>
                    <div className='o-list-inline o-list-inline--vertical-centered'>
                        <svg className='c-icon c-icon--s o-list-inline__item' x='0px' y='0px' viewBox='0 0 200 200'>
                            <g id='Menue'>
                                <g>
                                    <path className='st0' d='M186.5,42.2h-173C6,42.2,0,36.1,0,28.7s6-13.5,13.5-13.5h173c7.5,0,13.5,6,13.5,13.5S194,42.2,186.5,42.2z' />
                                </g>
                                <g>
                                    {/* eslint-disable */}
                                    <path className='st0' d='M186.5,113.2h-173C6,113.2,0,107.1,0,99.7s6-13.5,13.5-13.5h173c7.5,0,13.5,6,13.5,13.5
                    			S194,113.2,186.5,113.2z' />
                                    {/* eslint-enable */}
                                </g>
                                <g>
                                    {/* eslint-disable */}
                                    <path className='st0' d='M186.5,184.2h-173c-7.5,0-13.5-6-13.5-13.5s6-13.5,13.5-13.5h173c7.5,0,13.5,6,13.5,13.5
                    			S194,184.2,186.5,184.2z' />
                                    {/* eslint-enable */}
                                </g>
                            </g>
                        </svg>
                        <a href='' title='' className='c-logo o-list-inline__item'>Logo</a>
                    </div>
                    <div className='o-list-inline o-list-inline--vertical-centered'>
                        <button className='o-list-inline__item u-line-height-reset u-text-center'>
                            <svg version='1.1' xmlns='http://www.w3.org/2000/svg' className='c-icon c-icon--s' width='24' height='24' viewBox='0 0 24 24'>
                                <path d='M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z' />
                            </svg>
                            <p className='u-text-xxs u-line-height-reset'>Search</p>
                        </button>
                        <a href='' title='' className='o-list-inline__item u-line-height-reset u-text-center'>
                            <svg version='1.1' xmlns='http://www.w3.org/2000/svg' className='c-icon c-icon--s' width='24' height='24' viewBox='0 0 24 24'>
                                <path d='M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z' />
                            </svg>
                            <p className='u-text-xxs u-line-height-reset'>Wunschliste</p>
                        </a>
                        <a href='' title='' className='o-list-inline__item u-line-height-reset u-text-center'>
                            <svg version='1.1' xmlns='http://www.w3.org/2000/svg' className='c-icon c-icon--s' width='24' height='24' viewBox='0 0 24 24'>
                                <path d='M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z' />
                            </svg>
                            <p className='u-text-xxs u-line-height-reset'>Warenkorb</p>
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}

OrganismsHeaderMobile.propTypes = {}

OrganismsHeaderMobile.defaultProps = {}

export default ComponentInjector.return('OrganismsHeaderMobile', OrganismsHeaderMobile)
