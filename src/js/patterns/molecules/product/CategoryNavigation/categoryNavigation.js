import React from 'react'

import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink.jsx'

function CategoryLink({ children = 'Link' }) {
    return <li className='mb-1 leading-normal'>{children}</li>
}

export function CategoryNavigation({ navTree, title }) {
    const renderTree = (children) => {
        return (
            <ul className='pl-4'>
                {children.map((item) => {
                    return (
                        <CategoryLink>
                            {item.children && item.children.length > 0 ? (
                                renderTree(item.children)
                            ) : (
                                <NodeLink node={item}>{item.name}</NodeLink>
                            )}
                        </CategoryLink>
                    )
                })}
            </ul>
        )
    }

    return (
        <div>
            {title && <h4 className='text-sm font-bold mb-4'>{title}</h4>}
            {renderTree(navTree.children)}
        </div>
    )
}
