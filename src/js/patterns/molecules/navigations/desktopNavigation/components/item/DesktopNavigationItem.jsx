import React from 'react'
import PropTypes from 'prop-types'
import NodeLink from 'frontastic-catwalk/src/js/app/nodeLink.jsx'
import Image from '@frontastic/catwalk/src/js/image'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import { DesktopNavigationTree } from '../tree'
import { categoryTreeType } from '../../types'

import {
    secNavDesktop,
    itemNameList,
    itemNameUnderline,
    dropdownContent,
    childBoldText,
    grandchildText,
    gridItemColumn,
    testImage, 
} from './desktop-navigation-item.module.scss'

export function DesktopNavigationItem ({ item, level, navPath, onClick }) {
    const sale = item.name === 'Sale%'

    const hasSubLevel = (item) => {
        return item && item.length > 0
    }

    console.log('item', item)

    return (
        <nav className={secNavDesktop}>

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
                    <div className={itemNameList}>
                        <div
                            className={itemNameUnderline}
                            style={{ color: sale ? '#e60000' : 'none' }}>
                            {item.name}
                        </div>

                        {item.children.length > 0 && (
                            <ul className={dropdownContent}>
                                {item.children.map(child => {
                                console.log('child', child.name, child.configuration.displayMedia)
                                return <li>
                                    <div className={gridItemColumn}>
                                        <div className={childBoldText}>
                                            {child.name}
                                            {child.configuration.displayMedia && <Image className={testImage} 
                                                forceWidth={300}
                                                media={child.configuration.displayMedia.media}
                                                alt={<Translatable value={child.configuration.displayMedia.media.title}/>}
                                                />}
                                        </div>
                                        {child.children.map(grandchild => { 
                                            return <a className={grandchildText} href='#'>{grandchild.name}
                                            </a> })}
                                    </div>
                                </li>
                                })}
                            </ul>
                        )}
                    </div>
                </NodeLink>

                {hasSubLevel(item) && (
                    <DesktopNavigationTree
                        items={item} navPath={navPath}
                        level={level + 1}
                        onSelectItem={onClick}
                    />
                )}
            </div>
        </nav>
    )
}

// for some reason if propTypes are uncommented it raises a violation of hooks.

DesktopNavigationItem.propTypes = {
    item: categoryTreeType,
    level: PropTypes.number,
    navPath: PropTypes.arrayOf(categoryTreeType),
    onClick: PropTypes.func,
}
