import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'
import MoleculesColorSwatch from '../../molecules/colorswatches/colorswatch'
import MoleculesFormFromTo from '../../molecules/forms/form-element-from-to'
import MoleculesFormCheckboxList from '../../molecules/forms/form-checkbox-list'

class OrganismsGuide extends Component {
    render () {
        return (
            <div>
                <div className='o-television is-active'>
                    <header role='contentinfo' className='c-context-header t-spotlight o-television__bar'>
                        <div className='o-container c-context-header__wrapper'>
                            <div className='c-context-header__middle'>
                                <div className='o-flex o-flex--center'>
                                    <h1 className='c-title-level-3 c-context-header__title o-flex__item'>
                        Filter
                                    </h1>
                                </div>
                            </div>
                            <button>
                                <svg className='c-icon c-icon--m' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                    <title>Ansicht schließen</title>
                                    <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                                </svg>
                            </button>
                        </div>
                    </header>
                    <div className='o-television__display'>
                        <section>
                            <label htmlFor='' className='c-title-level-4'>Größe</label>
                            <div className='o-television__boundless o-distance-s'>
                                <div className='o-swiper'>
                                    <button className='c-chip'>34</button>
                                    <button className='c-chip is-active'>36</button>
                                    <button className='c-chip'>38</button>
                                    <button className='c-chip'>40</button>
                                    <button className='c-chip'>42</button>
                                    <button className='c-chip'>44</button>
                                    <button className='c-chip'>46</button>
                                    <button className='c-chip'>48</button>
                                    <button className='c-chip'>50</button>
                                </div>
                            </div>
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className='o-distance-m'>
                            <label htmlFor='' className='c-title-level-4'>Farbe</label>
                            <div className='c-colorswatch o-distance-s'>
                                <ul className='o-list-inline'>
                                    <li className='o-list-inline__item'>
                                        <button className='c-colorswatch__item' />
                                    </li>
                                    <li className='o-list-inline__item'>
                                        <button className='c-colorswatch__item is-active' />
                                    </li>
                                    <li className='o-list-inline__item'>
                                        <button className='c-colorswatch__item' />
                                    </li>
                                    <li className='o-list-inline__item'>
                                        <button className='c-colorswatch__item' />
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className='o-distance-m'>
                            <label htmlFor=''>Preis</label>
                            <input type='range' className='o-distance-s' />
                            <MoleculesFormFromTo />
                        </section>
                        <div className='o-television__display__boundless'>
                            <span className='c-divider c-divider--break o-distance-m' />
                        </div>
                        <section className='o-distance-m'>
                            <label htmlFor='sel-brand' className='c-title-level-4'>Marke</label>
                            <select name='' id='sel-brand' className='o-distance-s'>
                                <option value=''>Bitte auswählen</option>
                                <option value=''>Esprit</option>
                                <option value=''>Jack&Jones</option>
                                <option value=''>Tommy Hilfiger</option>
                            </select>
                        </section>
                        <section className='o-distance-m'>
                            <MoleculesFormCheckboxList />
                        </section>
                    </div>
                    <div className='o-television__remote-control'>
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

OrganismsGuide.propTypes = {
}

OrganismsGuide.defaultProps = {
}

export default ComponentInjector.return('OrganismsGuide', OrganismsGuide)
