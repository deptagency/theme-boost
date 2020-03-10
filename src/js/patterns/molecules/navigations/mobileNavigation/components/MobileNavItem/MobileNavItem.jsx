import React from 'react'
import PropTypes from 'prop-types'

import NodeLink from 'frontastic-catwalk/src/js/app/nodeLink.jsx'
// TODO: that path hurts! resolve into webpack or something like that
import { ReactComponent as ArrowRight } from './../../../../../../../icons/tailwind-icons/icon-cheveron-right.svg'

import { MobileNavTree } from '../MobileNavTree'
import { categoryTreeType } from '../../types'

export function MobileNavItem ({ item, level, navPath, onClick }) {
    // helper to see if the current item is part of the path.
    const isItemInPath = (item) => {
        return navPath.find((e) => {
            return e.nodeId === item.nodeId
        })
    }
    const hasSubLevel = (item) => {
        return item.children && item.children.length > 0
    }

    const NextButton = () => {
        return (
            <button
                onClick={() => {
                    return onClick(item, level)
                }}
                title='Startseite'
                className='text-4xl mr-4'>
                <ArrowRight />
            </button>
        )
    }

    const sale = item.name === 'SALE'

    return (
        <li className='flex px-5 justify-between border-b'>
            <NodeLink
                node={item}
                onClick={(e) => {
                    if (onClick && item.children && item.children.length > 0) {
                        e.preventDefault()
                        return onClick(item, level)
                    }
                }}
                className='hover:no-underline hover:text-gray-500 p-5' style={{ color: sale ? '#667EEA' : 'none' }}>
                {item.name}
            </NodeLink>
            {hasSubLevel(item) && <NextButton />}

            {hasSubLevel(item) && (
                <MobileNavTree
                    items={item.children}
                    navPath={navPath}
                    level={level + 1}
                    onSelectItem={onClick}
                    isActive={isItemInPath(item)}
                />
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
