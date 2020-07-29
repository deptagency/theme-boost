import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink'
import { categoryTreeType } from '../types'

const DesktopMenu = ({ currentTree, handleClick, onHoverItem }) => {
    return (
        <div className='py-4'>
            {currentTree && currentTree.children && currentTree.children.map((item) => {
                return (
                    <NodeLink
                        key={item.nodeId}
                        node={item}
                        className={classnames({
                            'mr-8 border-b-2px border-transparent font-bold text-neutral-900 text-sm': true,
                            'hover:border-b-2px hover:border-neutral-900': true,
                            'text-primary-main': item.name === 'SALE',
                        })}
                        onClick={(e) => { return handleClick(e, item) }}
                        onMouseEnter={() => { return onHoverItem(item) }}
                    >
                        {item.name}
                    </NodeLink>
                )
            })
            }
        </div>
    )
}

DesktopMenu.propTypes = {
    currentTree: categoryTreeType,
    handleClick: PropTypes.func.isRequired,
    onHoverItem: PropTypes.func.isRequired,
}

export default DesktopMenu
