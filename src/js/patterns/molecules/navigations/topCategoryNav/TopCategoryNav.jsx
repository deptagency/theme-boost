import React from 'react'
import PropTypes from 'prop-types'

import { topCategoryType } from './../mobileNavigation/types'
import NodeLink from 'frontastic-catwalk/src/js/app/nodeLink.jsx'

const NavItem = ({ item, onClick }) => {
    return (
        <li className='text-gray-500 active:text-gray-800 text-sm'>
            <NodeLink
                node={item}
                onClick={onClick}
                title='Frauen'
                className='mr-6 pb-1 font-bold focus:border-b-2px border-gray-800 focus:no-underline focus:text-gray-800 hover:text-gray-800 hover:no-underline'
            >
                {item.name}
            </NodeLink>
        </li>
    )
}
NavItem.propTypes = {
    item: topCategoryType,
    onClick: PropTypes.func,
}

export const TopCategoryNav = ({ items, onCategorySelect = 0 }) => {
    return (
        <ul className='mt-6 pl-3 list-none align-center flex flex-row hidden-override lg:flex'>
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
                        />
                    )
                })}
        </ul>
    )
}

TopCategoryNav.propTypes = {
    items: PropTypes.arrayOf(topCategoryType),
    onCategorySelect: PropTypes.func,
}
