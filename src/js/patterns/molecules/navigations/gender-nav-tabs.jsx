import React, { useRef } from 'react'
import PropTypes from 'prop-types'

// import useBackgroundImageUrl from 'frontastic-catwalk/src/js/helper/hooks/useBackgroundImageUrl'
import useBackgroundImageUrl from '../../../helper/hooks/useBackgroundImageUrl'

const NavItem = ({ item, onClick, isActive }) => {
    return (
        <li className={`c-gender-tab-nav__item${isActive ? ' c-gender-tab-nav__item--active' : ''}`}>
            <a onClick={onClick} title='Frauen'>
                {item.name}
            </a>
        </li>
    )
}

const TopCategoryNavTabs = ({ items, onCategorySelect, activeId = 0 }) => {
    const ref = useRef(null)
    const backgroundImageUrl = useBackgroundImageUrl(ref, items[activeId].mobileNavBackgroundImage)
    return (
        <ul ref={ref} style={{ backgroundImage: `url(${backgroundImageUrl})` }} className='c-gender-tab-nav'>
            {items &&
                items.map((item, i) => {
                    return (
                        <NavItem
                            onClick={() => {
                                return onCategorySelect(i)
                            }}
                            item={item}
                            isActive={i === activeId}
                        />
                    )
                })}
        </ul>
    )
}

export default TopCategoryNavTabs
