import React, { useState } from 'react'

import ComponentInjector from '../../../app/injector'

import TopCategoryNavTabs from './gender-nav-tabs.jsx'

import backArrow from '../../../../icons/arrow_back.svg'
import forwardArrow from '../../../../icons/arrow_forward.svg'

const navDamen = [
    {
        id: '1',
        label: 'Startseite',
        url: '/',
        sub: [
            {
                id: '2',
                label: 'level 2',
                url: '/',
                sub: [
                    {
                        id: '3',
                        label: 'level 3',
                        url: '/',
                        sub: [
                            {
                                id: '4',
                                label: 'link',
                                url: '/',
                            },
                            {
                                id: '5',
                                label: 'link',
                                url: '/',
                            },
                            {
                                id: '6',
                                label: 'link',
                                url: '/',
                            },
                        ],
                    },
                    {
                        id: '7',
                        label: 'link',
                        url: '/',
                    },
                    {
                        id: '8',
                        label: 'link',
                        url: '/',
                    },
                ],
            },
            {
                id: '9',
                label: 'link',
                url: '/',
            },
            {
                id: '10',
                label: 'link',
                url: '/',
            },
            {
                id: '11',
                label: 'link',
                url: '/',
            },
        ],
    },
    {
        id: '12',
        label: 'Second Cat',
        url: '/',
        sub: [
            {
                id: '13',
                label: 'link',
                url: '/',
            },
            {
                id: '14',
                label: 'link',
                url: '/',
            },
            {
                id: '15',
                label: 'link',
                url: '/',
            },
            {
                id: '16',
                label: 'link',
                url: '/',
            },
        ],
    },
    {
        id: '17',
        label: 'Third Cat',
        url: '/',
        sub: [
            {
                id: '18',
                label: 'link',
                url: '/',
            },
            {
                id: '19',
                label: 'link',
                url: '/',
            },
            {
                id: '20',
                label: 'link',
                url: '/',
            },
            {
                id: '21',
                label: 'link',
                url: '/',
            },
        ],
    },
]
const navHerren = [
    {
        id: '1',
        label: 'Herren Start',
        url: '/',
        sub: [
            {
                id: '2',
                label: 'level 2',
                url: '/',
                sub: [
                    {
                        id: '3',
                        label: 'level 3',
                        url: '/',
                        sub: [
                            {
                                id: '4',
                                label: 'link',
                                url: '/',
                            },
                            {
                                id: '5',
                                label: 'link',
                                url: '/',
                            },
                            {
                                id: '6',
                                label: 'link',
                                url: '/',
                            },
                        ],
                    },
                    {
                        id: '7',
                        label: 'link',
                        url: '/',
                    },
                    {
                        id: '8',
                        label: 'link',
                        url: '/',
                    },
                ],
            },
            {
                id: '9',
                label: 'link',
                url: '/',
            },
            {
                id: '10',
                label: 'link',
                url: '/',
            },
            {
                id: '11',
                label: 'link',
                url: '/',
            },
        ],
    },
    {
        id: '12',
        label: 'Second Cat',
        url: '/',
        sub: [
            {
                id: '13',
                label: 'link',
                url: '/',
            },
            {
                id: '14',
                label: 'link',
                url: '/',
            },
            {
                id: '15',
                label: 'link',
                url: '/',
            },
            {
                id: '16',
                label: 'link',
                url: '/',
            },
        ],
    },
    {
        id: '17',
        label: 'Third Cat',
        url: '/',
        sub: [
            {
                id: '18',
                label: 'link',
                url: '/',
            },
            {
                id: '19',
                label: 'link',
                url: '/',
            },
            {
                id: '20',
                label: 'link',
                url: '/',
            },
            {
                id: '21',
                label: 'link',
                url: '/',
            },
        ],
    },
]
const navKinder = [
    {
        id: '1',
        label: 'Kinder Start',
        url: '/',
        sub: [
            {
                id: '2',
                label: 'level 2',
                url: '/',
                sub: [
                    {
                        id: '3',
                        label: 'level 3',
                        url: '/',
                        sub: [
                            {
                                id: '4',
                                label: 'link',
                                url: '/',
                            },
                            {
                                id: '5',
                                label: 'link',
                                url: '/',
                            },
                            {
                                id: '6',
                                label: 'link',
                                url: '/',
                            },
                        ],
                    },
                    {
                        id: '7',
                        label: 'link',
                        url: '/',
                    },
                    {
                        id: '8',
                        label: 'link',
                        url: '/',
                    },
                ],
            },
            {
                id: '9',
                label: 'link',
                url: '/',
            },
            {
                id: '10',
                label: 'link',
                url: '/',
            },
            {
                id: '11',
                label: 'link',
                url: '/',
            },
        ],
    },
    {
        id: '12',
        label: 'Second Cat',
        url: '/',
        sub: [
            {
                id: '13',
                label: 'link',
                url: '/',
            },
            {
                id: '14',
                label: 'link',
                url: '/',
            },
            {
                id: '15',
                label: 'link',
                url: '/',
            },
            {
                id: '16',
                label: 'link',
                url: '/',
            },
        ],
    },
    {
        id: '17',
        label: 'Third Cat',
        url: '/',
        sub: [
            {
                id: '18',
                label: 'link',
                url: '/',
            },
            {
                id: '19',
                label: 'link',
                url: '/',
            },
            {
                id: '20',
                label: 'link',
                url: '/',
            },
            {
                id: '21',
                label: 'link',
                url: '/',
            },
        ],
    },
]

function MobileNavTree ({ items, onSelectItem, navPath, level = 0 }) {
    return (
        <div className={`c-navigation__tree c-navigation__tree--level-${level}`}>
            <ul className='c-navigation__list'>
                {items.map((item, i) => {
                    return <MobileNavItem item={item} navPath={navPath} level={level} onClick={onSelectItem} />
                })}
            </ul>
        </div>
    )
}

function MobileNavItem ({ item, level, navPath, onClick }) {
    console.log('item', navPath, item)
    // helper to see if the current item is part of the path.
    const isItemInPath = (item) => {
        return navPath.some((e) => {
            return e.id === item.id
        })
    }
    const hasSubLevel = (item) => {
        return item.sub && item.sub.length > 0
    }

    const NextButton = () => {
        return (
            <a
                onClick={() => {
                    return onClick(item, level)
                }}
                title='Startseite'
                className='c-navigation__next-level-button'
                >
                <img src={forwardArrow} alt='Startseite' />
            </a>
        )
    }
    return (
        <li className={`c-navigation__item${isItemInPath(item) ? ' c-navigation__item--active' : ''}`}>
            <a
                onClick={() => {
                    console.log('open URL')
                }}
                title='Startseite'
                className='c-navigation__anchor'
            >
                {item.label}
            </a>
            {hasSubLevel(item) && <NextButton />}

            {hasSubLevel(item) && (
                <MobileNavTree items={item.sub} navPath={navPath} level={level + 1} onSelectItem={onClick} />
            )}
        </li>
    )
}

function BackButton ({ onClick }) {
    return (
        <button className='c-mobile-navigation__header-back-button' onClick={onClick}>
            <img src={backArrow} alt='Back' />
        </button>
    )
}

function NavHeader ({ backButton, children }) {
    return (
        <div className='c-mobile-navigation__header'>
            {backButton}
            <p>{children}</p>
        </div>
    )
}

function MoleculesMobileNavigation ({ open, genderNavEntries }) {
    const [currentTopCategory, setCurrentTopCategory] = useState(0)
    const [level, setLevel] = useState(0)
    const [navPath, setNavPath] = useState([])

    const handleSelectTopCategory = (categoryId) => {
        setLevel(0)
        setNavPath([])
        setCurrentTopCategory(categoryId)
    }
    const handleSelectNavItem = (item, toLevel) => {
        setLevel(toLevel + 1)
        setNavPath([...navPath, item])
    }
    const handleGoBack = () => {
        setLevel(level - 1)
        navPath.pop() // ouch
        setNavPath(navPath)
    }
    return (
        <nav role='navigation' className={`c-navigation${open ? ' is-active' : ''}`}>
            {level === 0 && (
                <TopCategoryNavTabs
                    items={genderNavEntries}
                    onCategorySelect={handleSelectTopCategory}
                    activeId={currentTopCategory}
                />
            )}
            <div
                className={`c-navigation__body c-mobile-navigation__body c-mobile-navigation__body--current-level-${level} `}
            >
                {level > 0 && (
                    <NavHeader backButton={<BackButton onClick={handleGoBack} />}>
                        <span>{genderNavEntries[currentTopCategory].name}</span>
                        {navPath[navPath.length - 1].label}
                    </NavHeader>
                )}
                <div
                    className='c-mobile-navigation__scrollcontainer'
                    style={{ transform: `translateX(${level * -100}%)` }}
                >
                    <MobileNavTree items={navDamen} navPath={navPath} onSelectItem={handleSelectNavItem} />
                </div>
            </div>
            {/*
            <ul className='c-navigation__body'>
                <li className='c-navigation__item'>
                    <a href='' title='Startseite' className='c-navigation__anchor'>
                        Startseite
                    </a>
                    <div className='c-navigation__megamenu'>
                        <div className='c-navigation__header'>
                            <a href='' title='' className='o-flex o-flex--center u-link-ghost'>
                                <svg
                                    className='c-icon o-flex__item'
                                    version='1.1'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                >
                                    <title>chevron-left</title>
                                    <path d='M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z' />
                                </svg>
                                <span className='o-flex__item'>Bekleidung</span>
                            </a>
                        </div>
                        <div className='c-navigation__body'>
                            <ul className='c-navigation__list'>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Neu'>
                                        Neu
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Jacken'>
                                        Jacken
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Kleider'>
                                        Kleider
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Jeans'>
                                        Jeans
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Mäntel'>
                                        Mäntel
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Pullover'>
                                        Pullover
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Blusen & Tuniken'>
                                        Blusen & Tuniken
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Hosen'>
                                        Hosen
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Strick'>
                                        Strick
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Shirts'>
                                        Shirts
                                    </a>
                                </li>
                            </ul>
                            <ul className='c-navigation__list'>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Röcke'>
                                        Röcke
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Shorts'>
                                        Shorts
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Bikinis'>
                                        Bikinis
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Sportbekleidung'>
                                        Sportbekleidung
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' className='c-navigation__anchor' title='Wäsche'>
                                        Wäsche
                                    </a>
                                </li>
                                <li className='c-navigation__item'>
                                    <a href='' title='Mehr anzeigen' className='u-link'>
                                        Mehr anzeigen
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='c-navigation__item'>
                    <a href='' title='NEU' className='c-navigation__anchor'>
                        NEU
                    </a>
                </li>
                <li className='c-navigation__item'>
                    <a href='' title='Bekleidung' className='c-navigation__anchor'>
                        Bekleidung
                    </a>
                </li>
                <li className='c-navigation__item'>
                    <a href='' title='Schuhe' className='c-navigation__anchor'>
                        Schuhe
                    </a>
                </li>
                <li className='c-navigation__item'>
                    <a href='' title='SALE %' className='c-navigation__anchor u-text-spot'>
                        SALE %
                    </a>
                </li>
            </ul>
            */}
        </nav>
    )
}

MoleculesMobileNavigation.propTypes = {}

MoleculesMobileNavigation.defaultProps = {}

export default ComponentInjector.return('MoleculesMobileNavigation', MoleculesMobileNavigation)
