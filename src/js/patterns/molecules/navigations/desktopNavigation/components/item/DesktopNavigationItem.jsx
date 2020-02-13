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
    gridItemChild,
    grandchildText,
    gridItemColumn,
    gridImage,
} from '../../desktop-navigation.module.scss'

export function DesktopNavigationItem ({ item, level, navPath, onClick }) {
    const sale = item.name === 'Sale%'

    const hasSubLevel = (item) => {
        return item && item.length > 0
    }

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
                        <div className={itemNameUnderline}
                            style={{ color: sale ? '#e60000' : 'none' }}>
                            {item.name}
                        </div>

                        {item.children.length > 0 && (
                            <ul className={dropdownContent}>
                                {item.children.map((child, number) => {
                                return (
                                    <div key={number}>
                                        <div className={gridItemColumn}>
                                            <div className={gridItemChild}>
                                                {child.name}
                                                {child.configuration.displayMedia && <Image
                                                    className={gridImage}
                                                    forceWidth={300}
                                                    media={child.configuration.displayMedia.media}
                                                    alt={<Translatable value={child.configuration.displayMedia.media.title} />}
                                                />}
                                            </div>
                                            {child.children.map((grandchild, number) => {
                                                return (
                                                    <div key={number} className={grandchildText} href='#'>
                                                        {grandchild.name}
                                                    </div>
                                            )
                                            })}
                                        </div>
                                    </div>
                                )
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

DesktopNavigationItem.propTypes = {
    item: categoryTreeType,
    level: PropTypes.number,
    navPath: PropTypes.arrayOf(categoryTreeType),
    onClick: PropTypes.func,
}
