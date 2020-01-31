import React from 'react'
import PropTypes from 'prop-types'

import { SecondNavigationDesktopItem } from '../item'
import { categoryTreeType } from '../../../mobileNavigation/types'
import {
    navigationContainer
} from './second-navigation-desktop-tree.module.scss'


export function SecondNavigationDesktopTree ({ items, onSelectItem, navPath, level = 0 }) {
    return (
        <div>
            <ul className={navigationContainer}>
                {items && items.map((item) => {
                    return (
                        <SecondNavigationDesktopItem
                            key={item.nodeId}
                            item={item}
                            navPath={navPath}
                            level={level}
                            onClick={onSelectItem}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

SecondNavigationDesktopTree.propTypes = {
    items: PropTypes.arrayOf(categoryTreeType),
    onSelectItem: PropTypes.func,
    navPath: PropTypes.arrayOf(categoryTreeType),
    level: PropTypes.number,
}
