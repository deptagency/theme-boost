import React from 'react'
import PropTypes from 'prop-types'

import { topCategoryType } from './../mobileNavigation/types'
import NodeLink from 'frontastic-catwalk/src/js/app/nodeLink.jsx'

const NavItem = ({ item, onClick }) => {
    return (
        <li className='text-gray-500 active:text-gray-800 nav-hide nav-block text-xl'>
            <NodeLink
                node={item}
                onClick={onClick}
                title='Frauen'
                className='mr-6 pb-1 font-bold text-underline focus:text-gray-800 hover:text-gray-800'
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
        <ul className='mt-10 pl-4 list-none align-center flex flex-row'>
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
