import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink.jsx'
import Navigation from './Navigation'

import { ReactComponent as ArrowRight } from '../../../../../icons/tailwind-icons/icon-chevron-right.svg'

import { categoryTreeType } from '../types'

const NavigationItem = ({ item, level, navPath, onClick }) => {
    const isItemInPath = (item) => {
        return navPath.find((e) => {
            return e.nodeId === item.nodeId
        })
    }
    const hasSubLevel = (item) => {
        return item.children && item.children.length > 0
    }

    const handleOpenPage = (e) => {
        if (onClick && item.children && item.children.length > 0) {
            e.preventDefault()
            return onClick(item, level)
        }
    }

    return (
        <li className='flex justify-between border-t border-neutral-300'>
            <NodeLink
                node={item}
                onClick={handleOpenPage}
                className={classnames({
                    'text-neutral-900 hover:text-neutral-600 pl-px py-5': true,
                    'font-bold': level === 0,
                    'text-primary-500': item.name === 'SALE',
                })}
            >
                {item.name}
            </NodeLink>

            {hasSubLevel(item) && (
                <>
                    <ArrowRight
                        className='self-center cursor-pointer text-l'
                        onClick={() => {
                            return onClick(item, level)
                        }}
                    />
                    <Navigation
                        items={item.children}
                        navPath={navPath}
                        level={level + 1}
                        onSelectItem={onClick}
                        isActive={!!isItemInPath(item)}
                    />
                </>
            )}
        </li>
    )
}

NavigationItem.propTypes = {
    item: categoryTreeType,
    level: PropTypes.number,
    navPath: PropTypes.arrayOf(categoryTreeType),
    onClick: PropTypes.func,
}

export default NavigationItem
