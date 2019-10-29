import React from 'react'
import PropTypes from 'prop-types'

import NodeLink from 'frontastic-catwalk/src/js/app/nodeLink.jsx'
// TODO: that path hurts! resolve into webpack or something like that
import forwardArrow from '../../../../../../../icons/arrow_forward.svg'

import { MobileNavTree } from '../MobileNavTree'
import { categoryTreeType } from '../../types'

export function MobileNavItem ({ item, level, navPath, onClick }) {
    // helper to see if the current item is part of the path.
    const isItemInPath = (item) => {
        return navPath.some((e) => {
            return e.id === item.id
        })
    }
    const hasSubLevel = (item) => {
        return item.children && item.children.length > 0
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
            <NodeLink
                node={item}
                onClick={(e) => {
                    if (onClick && item.children && item.children.length > 0) {
                        e.preventDefault()
                        return onClick(item, level)
                    }
                }}
                title='Startseite'
                className='c-navigation__anchor'
            >
                {item.name}
            </NodeLink>
            {hasSubLevel(item) && <NextButton />}

            {hasSubLevel(item) && (
                <MobileNavTree items={item.children} navPath={navPath} level={level + 1} onSelectItem={onClick} />
            )}
        </li>
    )
}

MobileNavItem.propTypes = {
    item: categoryTreeType,
    level: PropTypes.number,
    navPath: PropTypes.arrayOf(categoryTreeType),
    onClick: PropTypes.func,
}
