import React from 'react'
import NodeLink from 'frontastic-catwalk/src/js/app/nodeLink.jsx'
import topCategories from '../../../mobileNavigation/topCategories.json'
import { SecondNavigationDesktopTree } from '../tree'

import {
    listItemNav,
    dropdown,
    dropdownContent,
    itemName,
    itemNameRed,
    secNavDesktop, gridItemColumn,
    boldText,
} from './second-navigation-desktop-item.module.scss'

export function SecondNavigationDesktopItem ({ item, level, navPath, onClick }) {
    const sale = item.name === 'Sale%';

    const hasSubLevel = (item) => {
        return item && item.length > 0
    }

    return (
        <nav className={secNavDesktop}>
            <div className={dropdown}>
                <div>
                    <NodeLink
                        node={item}
                        onClick={(e) => {
                            if (onClick && item && item.length > 0) {
                                e.preventDefault()
                                return onClick(item, level)
                            }
                        }}
                        title='Startseite'
                    >
                    <div className={listItemNav}>
                        <div 
                        className={itemName}
                        // { sale ? {itemNameRed} : {itemName}} 
                        style={{ color: sale ? "#e60000" : "none" }}>
                            {item.name}
                        </div>
                      
                        {item.children.length > 0 && (
                            <ul className={dropdownContent}>
                                {item.children.map(child =>
                                    <li>
                                        <div className={gridItemColumn}>
                                            <div className={boldText}>
                                                {child.name}
                                            </div>
                                            {child.children.map(grandchild =>
                                                <a href="#">{grandchild.name}</a>
                                            )}
                                        </div>
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                    </NodeLink>

                    {hasSubLevel(item) && (
                    <SecondNavigationDesktopTree
                        items={item} navPath={navPath}
                        level={level + 1}
                        onSelectItem={onClick}
                    />
                    )}

                </div>
            </div>
        </nav>
    )
}

// for some reason if propTypes are uncommented it raises a violation of hooks.

// SecondNavigationDesktopItem.propTypes = {
//     item: categoryTreeType,
//     level: PropTypes.number,
//     navPath: PropTypes.arrayOf(categoryTreeType),
//     onClick: PropTypes.func,
// }

