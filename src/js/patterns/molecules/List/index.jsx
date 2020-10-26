import React from 'react'
import PropTypes from 'prop-types'
import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink'

const List = ({ links, variant, itemVariant }) => {
    return (
        <ul className={variant}>
            {links.map((link, i) => {
                return (
                    <li key={`${i}-${link.label}`} className={itemVariant}>
                        {link.reference && link.reference.nodeId ? (
                            <NodeLink node={link.reference}>{link.item || link.label}</NodeLink>
                        ) : (
                            link.item
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

List.propTypes = {
    links: PropTypes.array,
    variant: PropTypes.string,
    itemVariant: PropTypes.string,
}

export default List
