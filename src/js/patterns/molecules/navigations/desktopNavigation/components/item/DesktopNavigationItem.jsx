import React from 'react'
import PropTypes from 'prop-types'
import NodeLink from 'frontastic-catwalk/src/js/app/nodeLink.jsx'
import Image from '@frontastic/catwalk/src/js/image'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import { DesktopNavigationTree } from '../tree'
import { categoryTreeType } from '../../types'

export function DesktopNavigationItem ({ item, level, navPath, onClick, number }) {
    const sale = item.name === 'SALE'

    const hasSubLevel = (item) => {
        return item && item.length > 0
    }

    return (
        <nav className='inline-block text-gray-800 font-bold text-2xl hover-trigger'>
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
                    className='hover:no-underline active:no-underline'
                >
                    <div className='mr-8'>
                        <div className='border-b-2px border-transparent hover:border-b-2px hover:border-gray-800 hover:no-underline focus:text-gray-800 hover:text-indigo-700' style={{ color: sale ? '#667EEA' : 'none' }}>
                            {item.name}
                        </div>
                        {item.children.length > 0 && (
                            <ul className='hover-target absolute bg-white shadow-xl z-10 right-0 left-0 py-10 lg:px-12 xl:px-40 m-auto max-w-1218px'>
                                {item.children.map((child, number) => {
                                return (
                                    <div key={number}>
                                        <div className='float-left w-1/4'>
                                            <div className='text-gray-800 font-bold text-2xl pb-8 hover:text-indigo-700'>
                                                {child.name}
                                                {child.configuration.displayMedia && <Image
                                                    className='max-h-316px max-w-192px'
                                                    forceWidth={300}
                                                    media={child.configuration.displayMedia.media}
                                                    alt={<Translatable value={child.configuration.displayMedia.media.title} />}
                                                />}
                                            </div>
                                            {child.children.map((grandchild, number) => {
                                                return (
                                                    <div
                                                        key={number}
                                                        className='pt-1 block text-gray-800 font-normal hover:text-indigo-700 mb-4'
                                                        href='#'>
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
    number: PropTypes.number,
    navPath: PropTypes.arrayOf(categoryTreeType),
    onClick: PropTypes.func,
}
