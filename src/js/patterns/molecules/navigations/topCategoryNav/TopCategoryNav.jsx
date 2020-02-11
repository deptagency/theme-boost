import React from 'react'
import PropTypes from 'prop-types'

import { topCategoryType } from './../mobileNavigation/types'
import NodeLink from 'frontastic-catwalk/src/js/app/nodeLink.jsx'

import { TopCatNav } from './top-category-nav.module.scss'

const NavItem = ({ item, onClick }) => {
    return (
        <li className={`${TopCatNav} c-service-navigation o-list-inline__item`}>
            <NodeLink
                node={item}
                onClick={onClick}
                title='Frauen'
                className={`c-service-navigation__anchor`}
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
