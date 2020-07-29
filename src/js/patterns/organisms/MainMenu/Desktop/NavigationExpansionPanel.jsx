import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink.jsx'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import Image from '@frontastic/catwalk/src/js/image'
import { categoryTreeType } from '../types'

const NavigationExpansionPanel = ({ item, expanded = false, handleClick }) => {
    const expandChildren = item && item.children && item.children.length > 0

    return (
        <div
            className={classnames({
                'absolute bg-background-primary border-t w-full p-5 z-20': true,
                'transition-transform duration-300 delay-200 ease-out origin-top': true,
                'transform scale-y-100': expanded,
                'transform scale-y-0': !expanded,
            })}
            style={{ animation: `fadeIn 1s` }}
            >
            <ul className='flex bg-background-primary min-h-400px w-9/12 m-auto'>
                {expandChildren && item.children.map((child) => {
                    return (
                        <div className='w-1/4' key={child.nodeId}>
                            <NodeLink
                                node={child}
                                style={{ animation: `fadeIn 1s` }}
                                onClick={(e) => { return handleClick(e, child) }}
                            >
                                <div
                                    className='pb-4 font-bold text-sm text-neutral-900 hover:text-indigo-700'
                                    style={{ animation: `fadeIn 2s` }}
                                >
                                    {child.name}
                                    {child.configuration.displayMedia &&
                                        <Image
                                            className='pt-4 max-h-316px max-w-192px'
                                            style={{ animation: `fadeIn 2s` }}
                                            forceWidth={176}
                                            media={child.configuration.displayMedia.media}
                                            alt={<Translatable value={child.configuration.displayMedia.media.title}
                                        />}
                                    />}
                                </div>
                            </NodeLink>
                            {child.children.map((grandchild) => {
                                return (
                                    <NodeLink
                                        node={grandchild}
                                        key={grandchild.nodeId}
                                        className='pt-1 block text-neutral-900 font-normal text-sm hover:text-indigo-700 mb-4'
                                        style={{ animation: `fadeIn 2s` }}
                                        onClick={(e) => { return handleClick(e, grandchild) }}
                                    >
                                        {grandchild.name}
                                    </NodeLink>
                                )
                            })}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

NavigationExpansionPanel.propTypes = {
    expanded: PropTypes.bool,
    item: categoryTreeType,
    handleClick: PropTypes.func.isRequired,

}

export default NavigationExpansionPanel
