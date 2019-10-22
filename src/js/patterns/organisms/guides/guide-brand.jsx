import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import MoleculesFormFromTo from '../../molecules/forms/form-element-from-to'
import MoleculesFormCheckboxList from '../../molecules/forms/form-checkbox-list'
import OrganismsColorSwiper from '../../organisms/swiper/color-swiper'
import OrganismsSizeSwiper from '../../organisms/swiper/size-swiper'
import OrganismsSortingSwiper from '../../organisms/swiper/sorting-swiper'
import MoleculesReferalBordered from '../../molecules/links/referal-bordered'
import OrganismsHeaderSlideIn from 'js/patterns/organisms/base/header-slide-in'

class OrganismsGuideBrand extends Component {
    render () {
        return (
            <div>
                <div className='o-television'>
                    <OrganismsHeaderSlideIn title='Marke' />
                    <div className='o-television__display'>
                        <form action='' className='o-television__display__header o-television__display__boundless t-ghost'>
                            <div className='c-box'>
                                <label htmlFor=''>Marke suchen</label>
                                <div className='c-form-unit o-distance-xs'>
                                    <div className='c-form-unit__type c-form-unit__type--prefix'>
                                        <svg className='c-icon c-icon--s' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
                                            <title>search</title>
                                            <path d='M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z' />
                                        </svg>
                                    </div>
                                    <input type='search' placeholder='Esprit, Tommy Hilfiger, ...' className='c-form-unit__input c-form-unit__input--last' id='inp-unit' />
                                </div>
                            </div>
                        </form>
                        <div className='o-distance'>
                            <h2 className='c-title-level-3'>All Brands</h2>
                            <article className='o-distance-m'>
                                <p className='c-title-level-4'>A</p>
                                <div className='o-distance-s'>
                                    <ul className='o-list-bare'>
                                        <li className='o-list-bare__item'>
                                            <button className='c-link c-link--uniform'>Abercrombie & Fitch</button>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <button className='c-link c-link--uniform'>Absorba</button>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <button className='c-link c-link--uniform'>Abercrombie & Fitch</button>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <button className='c-link c-link--uniform'>Absorba</button>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <span className='c-divider o-distance' />
                            <article className='o-distance'>
                                <p className='c-title-level-4'>B</p>
                                <div className='o-distance-s'>
                                    <ul className='o-list-bare'>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform is-active'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <span className='c-divider o-distance' />
                            <article className='o-distance'>
                                <p className='c-title-level-4'>C</p>
                                <div className='o-distance-s'>
                                    <ul className='o-list-bare'>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform is-active'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform is-active'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                        <li className='o-list-bare__item'>
                                            <div className='o-flex o-flex--justified o-flex--center c-link c-link--uniform'>
                                                <button>
                                                Abercrombie & Fitch
                                                </button>
                                                <svg className='c-icon c-icon--s u-hidden' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                                    <title>Checkmark</title>
                                                    <path d='M20.7 5.3c-0.4-0.4-1-0.4-1.4 0l-10.3 10.3-4.3-4.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5 5c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l11-11c0.4-0.4 0.4-1 0-1.4z' />
                                                </svg>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        <div className='c-holder o-television__display__boundless c-box t-quietlight o-distance'>
                            <a href='' className='c-logo' title='Catwalk'>
                              Catwalk
                            </a>
                        </div>
                    </div>
                    <div className='o-television__remote-control'>
                        <button type='submit' className='c-button c-button--quiet c-button--boss'>Zurück</button>
                    </div>
                </div>
            </div>
        )
    }
}

OrganismsGuideBrand.propTypes = {}

OrganismsGuideBrand.defaultProps = {}

export default ComponentInjector.return('OrganismsGuideBrand', OrganismsGuideBrand)
