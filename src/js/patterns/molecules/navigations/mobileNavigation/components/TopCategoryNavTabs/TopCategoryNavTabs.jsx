import React from 'react'
import PropTypes from 'prop-types'

import { topCategoryType } from './../../types'

const TabItem = ({ item, onClick, isActive }) => {
    return (
        <li>
            <a
                tabIndex='0'
                onClick={onClick}
                title='Frauen'
                className='font-bold hover:no-underline hover:text-gray-400 text-underline-f-m cursor-pointer'
            >
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
        <ul className='absolute flex w-full bottom-0 left-0 m-2 justify-between p-8'>
            {items &&
                items.map((item, i) => {
                    if (!item.tree) {
                        return null
                    }

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
