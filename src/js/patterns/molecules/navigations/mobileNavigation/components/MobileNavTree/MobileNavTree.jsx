import React from 'react'
import PropTypes from 'prop-types'

import { MobileNavItem } from '../MobileNavItem'
import { categoryTreeType } from '../../types'

export function MobileNavTree ({ items, onSelectItem, navPath, level = 0 }) {
    return (
        <div className={`c-navigation__tree c-navigation__tree--level-${level}`}>
            <ul className='c-navigation__list'>
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

                {items.map((item, i) => {
                    return <MobileNavItem key={item.nodeId} item={item} navPath={navPath} level={level} onClick={onSelectItem} />
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
}
