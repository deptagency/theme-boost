import React from 'react'
import PropTypes from 'prop-types'

import { SecondNavigationDesktopItem } from '../item'
import { categoryTreeType } from '../../../mobileNavigation/types'

export function SecondNavigationDesktopTree ({ items, onSelectItem, navPath, level = 0 }) {
    return (
        <div>
            {/* MAKE A CSS MODULE */}
            <ul style={{ textAlign: 'center' }}>

                {navPath.length >= 1 && level > 0 && (
                    <SecondNavigationDesktopItem
                        item={{ name: 'Alles anzeigen', nodeId: navPath[navPath.length - 1].nodeId }}
                        navPath={navPath}
                        level={level}
                    />
                )}

                {items && items.map((item, i) => {
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
