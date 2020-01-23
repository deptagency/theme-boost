import React from 'react'
import PropTypes from 'prop-types'

import { topCategoryType } from '../../../mobileNavigation/types'

const TabItemDesktop = ({ item, onClick, isActive }) => {
    return (
        <li className={`c-top-category-tab-nav__item${isActive ? ' is-active' : ''}`} style={{color: 'black'}}>
            <a onClick={onClick} title='Frauen'>
                {item.name}
            </a>
        </li>
    )
}
TabItemDesktop.propTypes = {
    item: topCategoryType,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
}

export const TopCategoryNavTabsDesktop = ({ items, onCategorySelect, activeId = 0 }) => {
    return (
        <ul className='c-top-category-tab-nav o-head-up__item o-head-up__item--bottom'>
            {items &&
                items.map((item, i) => {
                    if (!item.tree) {
                        return null
                    }

                    return (
                        <TabItemDesktop
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

TopCategoryNavTabsDesktop.propTypes = {
    items: PropTypes.arrayOf(topCategoryType),
    onCategorySelect: PropTypes.func,
    activeId: PropTypes.number,
}
