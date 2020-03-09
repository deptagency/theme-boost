import React from 'react'
import PropTypes from 'prop-types'

import { DesktopNavigationItem } from '../item'
import { categoryTreeType } from '../../types'

export function DesktopNavigationTree ({ items, onSelectItem, navPath, level = 0 }) {
    return (
        <div className='pl-6 pb-4 border-b'>
            {items && items.map((item) => {
                return (
                    <DesktopNavigationItem
                        key={item.nodeId}
                        item={item}
                        navPath={navPath}
                        level={level}
                        onClick={onSelectItem}
                    />
                )
            })}
        </div>
    )
}

DesktopNavigationTree.propTypes = {
    items: PropTypes.arrayOf(categoryTreeType),
    onSelectItem: PropTypes.func,
    navPath: PropTypes.arrayOf(categoryTreeType),
    level: PropTypes.number,
}
