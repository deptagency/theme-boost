import React from 'react'

import Translatable from '@frontastic/catwalk/src/js/component/translatable'
import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink.jsx'

export function LinkList({ links, className, listClassName, listItemClassName }) {
    return (
        <nav className={className || ''}>
            <ul className={listClassName}>
                {links.map((link) => {
                    return (
                        <li key={link.label} className={listItemClassName}>
                            {link.reference ? (
                                <NodeLink node={link.reference}>{link.children || link.label}</NodeLink>
                            ) : (
                                link.children
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
