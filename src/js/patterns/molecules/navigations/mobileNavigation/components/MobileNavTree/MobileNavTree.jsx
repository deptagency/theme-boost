import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { MobileNavItem } from '../MobileNavItem'
import { categoryTreeType } from '../../types'

export function MobileNavTree ({ items, onSelectItem, navPath, level = 0, isActive = false }) {
    return (
        <div
            className={classnames({
                'absolute top-0 w-full bg-white': true,
                'left-full': level !== 0,
                'left-0': level === 0,
                'opacity-0 invisible': !isActive,
                'opacity-100 visible': isActive,
                'transition-opacity transition-visibility duration-700': true,
            })}
            >
            <ul className='flex-0-0-05'>
                {/**
                    If the user is not on the top level anymore,
                    the nav shows a link on the top page that leads to the
                    landing page. To prevent that the user stays inside the
                    menu, the onSelectItem click handler is omitted, so that
                    the Link just follows the `node.nodeId`
                */}
                {navPath.length >= 1 && level > 0 && (
                    <MobileNavItem
                        item={{ name: 'Alles anzeigen', nodeId: navPath[navPath.length - 1].nodeId }}
                        navPath={navPath}
                        level={level}
                    />
                )}

                {items && items.map((item, i) => {
                    return (
                        <MobileNavItem
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

MobileNavTree.propTypes = {
    items: PropTypes.arrayOf(categoryTreeType),
    onSelectItem: PropTypes.func,
    navPath: PropTypes.arrayOf(categoryTreeType),
    level: PropTypes.number,
    isActive: PropTypes.bool,
}
