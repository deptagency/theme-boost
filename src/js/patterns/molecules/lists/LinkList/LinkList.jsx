import React from 'react'
import PropTypes from 'prop-types'
import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink.jsx'

function LinkList ({ links, className, listClassName, listItemClassName }) {
    return (
        <nav className={className || ''}>
            <ul className={listClassName}>
                {links.map((link, i) => {
                    return (
                        <li key={`${i}-${link.label}`} className={listItemClassName}>
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

LinkList.propTypes = {
    links: PropTypes.array,
    className: PropTypes.string,
    listClassName: PropTypes.string,
    listItemClassName: PropTypes.string,
}

export { LinkList }
