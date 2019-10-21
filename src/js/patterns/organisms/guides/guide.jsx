import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import MoleculesFormFromTo from '../../molecules/forms/form-element-from-to'
import MoleculesFormCheckboxList from '../../molecules/forms/form-checkbox-list'
import OrganismsColorSwiper from '../../organisms/swiper/color-swiper'
import OrganismsSizeSwiper from '../../organisms/swiper/size-swiper'
import OrganismsSortingSwiper from '../../organisms/swiper/sorting-swiper'
import MoleculesReferalBordered from '../../molecules/links/referal-bordered'

class OrganismsGuide extends Component {
    render () {
        return (
            <div>
                <div className='o-television is-active'>
                    <header
                        role='contentinfo'
                        className='c-context-header t-spotlight o-television__bar'>
                        <div className='o-container c-context-header__wrapper'>
                            <div className='c-context-header__middle'>
                                <div className='o-flex o-flex--center'>
                                    <h1 className='c-title-level-3 c-context-header__title o-flex__item'>
                    Filter
                                    </h1>
                                </div>
                            </div>
                            <button>
                                <svg
                                    className='c-icon c-icon--m'
                                    version='1.1'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'>
                                    <title>Ansicht schließen</title>
                                    <path
                                        d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                                </svg>
                            </button>
                        </div>
                    </header>
                    <div className='o-television__display'>
                        <section>
                            <label htmlFor='' className='c-title-level-4'>Sizes</label>
                            <div className='o-television__display__boundless o-distance-s'>
                                <OrganismsSizeSwiper />
                            </div>
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className="o-distance-m">
                          <label htmlFor='' className='c-title-level-4'>Sorting</label>
                          <div className='o-television__display__boundless o-distance-s'>
                              <OrganismsSortingSwiper />
                          </div>
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className='o-distance-m'>
                            <label htmlFor='' className='c-title-level-4'>Colors</label>
                            <div className='o-television__display__boundless o-distance-s'>
                                <OrganismsColorSwiper />
                            </div>
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className='o-distance-m'>
                            <label htmlFor='' className='c-title-level-4'>Price</label>
                            <input type='range' className='o-distance-s' />
                            <MoleculesFormFromTo />
                        </section>
                        <section className='o-television__display__boundless o-distance-m'>
                            <MoleculesReferalBordered title='Brand' />
                            <MoleculesReferalBordered title='Material' />
                            <MoleculesReferalBordered title='Patterns' />
                            <MoleculesReferalBordered title='Newness' />
                        </section>
                        <div className="c-holder o-television__display__boundless c-box t-quietlight">
                          <a href='' className='c-logo' title='Catwalk'>
                              Catwalk
                          </a>
                        </div>
                    </div>
                    <div className='o-television__remote-control t-quietlight'>
                        <div className='o-buttonbar o-buttonbar--stacked'>
                            <div className='o-buttonbar__item'>
                                <button type='submit' className='c-button c-button--primary c-button--boss'>429 Ergebnisse anzeigen</button>
                            </div>
                            <div className='o-buttonbar__item'>
                                <button className='c-link c-link--uniform'>Filter zurücksetzen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

OrganismsGuide.propTypes = {}

OrganismsGuide.defaultProps = {}

export default ComponentInjector.return('OrganismsGuide', OrganismsGuide)
