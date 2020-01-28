import React from 'react'
import PropTypes from 'prop-types'

import { topCategoryType } from './../mobileNavigation/types'
import {
    TopCatNav,
} from './top-category-nav.module.scss'

const NavItem = ({ item, onClick, isActive, active }) => {
    return (
        <li className={`${TopCatNav} 'c-service-navigation o-list-inline__item'`}>
            <a
                onClick={onClick}
                title='Frauen'
                className={`c-service-navigation__anchor ${active && 'is-active'}`}
            >
                {item.name}
            </a>
        </li>
    )
}
NavItem.propTypes = {
    item: topCategoryType,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
}

export const TopCategoryNav = ({ items, onCategorySelect, activeId = 0 }) => {
    return (
        <ul className='c-service-navigation o-list-inline'>
            {items &&
                items.map((item, i) => {
                    if (!item.tree) {
                        return null
                    }

                    return (
                        <NavItem
                            onClick={() => {
                                return onCategorySelect(i)
                            }}
                            item={item}
                            key={item.tree.nodeId}
                            isActive={i === activeId}
                        />
                    )
                })}
        </ul>
    )
}

TopCategoryNav.propTypes = {
    items: PropTypes.arrayOf(topCategoryType),
    onCategorySelect: PropTypes.func,
    activeId: PropTypes.number,
}
