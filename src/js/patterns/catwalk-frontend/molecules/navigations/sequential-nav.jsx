import React, { Component } from 'react'

import ComponentInjector from '../../../../app/injector'

import MoleculesButton from '../buttons/button'
//import AtomsIcon from '../../atoms/icons/icon'

class MoleculesSequentialNav extends Component {
    render() {
        return (
            <nav role='navigation' className='c-sequential-navigation'>
                <ul className='c-sequential-navigation__list'>
                    <li className='c-sequential-navigation__list__item'>
                        <a href='' title='' className='c-sequential-navigation__anchor'>
                            <span>Bekleidung</span>
                            <svg
                                class='c-icon c-icon--s u-brand-color'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                            >
                                <title>chevron-right</title>
                                <path d='M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z' />
                            </svg>
                        </a>
                        <ul className='c-sequential-navigation__subnav o-list-bare'>
                            <li className='o-list-bare__item'>
                                <a href='' title='' className='c-sequential-navigation__anchor'>
                                    Anchor
                                </a>
                            </li>
                            <li className='o-list-bare__item'>
                                <a href='' title='' className='c-sequential-navigation__anchor'>
                                    Anchor
                                </a>
                            </li>
                            <li className='o-list-bare__item'>
                                <a href='' title='' className='c-sequential-navigation__anchor'>
                                    Anchor
                                </a>
                            </li>
                            <li className='o-list-bare__item'>
                                <a href='' title='' className='c-sequential-navigation__anchor'>
                                    Anchor
                                </a>
                            </li>
                            <li className='o-list-bare__item'>
                                <a href='' title='' className='c-sequential-navigation__anchor'>
                                    Anchor
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='c-sequential-navigation__list__item'>
                        <a href='' title='' className='c-sequential-navigation__anchor'>
                            NEU
                        </a>
                    </li>
                    <li className='c-sequential-navigation__list__item'>
                        <a href='' title='' className='c-sequential-navigation__anchor'>
                            SALE %
                        </a>
                    </li>
                    <li className='c-sequential-navigation__list__item'>
                        <a href='' title='' className='c-sequential-navigation__anchor'>
                            Jacken
                        </a>
                    </li>
                    <li className='c-sequential-navigation__list__item'>
                        <a href='' title='' className='c-sequential-navigation__anchor'>
                            Kleider
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

MoleculesSequentialNav.propTypes = {}

MoleculesSequentialNav.defaultProps = {}

export default ComponentInjector.return('MoleculesSequentialNav', MoleculesSequentialNav)
