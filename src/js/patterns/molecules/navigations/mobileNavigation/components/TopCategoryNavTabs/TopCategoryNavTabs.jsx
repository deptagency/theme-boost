import React from 'react'
import PropTypes from 'prop-types'

import { topCategoryType } from './../../types'

const TabItem = ({ item, onClick, isActive }) => {
    return (
        <li className={`c-top-category-tab-nav__item${isActive ? ' c-gender-tab-nav__item--active' : ''}`}>
            <a onClick={onClick} title='Frauen'>
                {item.name}
            </a>
        </li>
    )
}
TabItem.propTypes = {
    item: topCategoryType,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
}

export const TopCategoryNavTabs = ({ items, onCategorySelect, activeId = 0 }) => {
    return (
        <ul className='c-top-category-tab-nav'>
            {items &&
                items.map((item, i) => {
                    return (
                        <TabItem
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

TopCategoryNavTabs.propTypes = {
    items: PropTypes.arrayOf(topCategoryType),
    onCategorySelect: PropTypes.func,
    activeId: PropTypes.number,
}
