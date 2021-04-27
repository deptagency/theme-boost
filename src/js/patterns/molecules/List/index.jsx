import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink'

const List = ({ links = [], variant, itemVariant }) => {
    const getNode = (target) => {
        return {
            nodeId: target,
            target: target,
            type: 'node',
        }
    }

    return (
        <ul className={variant}>
            {links.map((link, i) => {
                return (
                    <li key={`${i}-${link.label}`} className={itemVariant}>
                        {link.reference?.type === 'node' ? (
                            <NodeLink node={getNode(link.reference?.target || '')}>{link.item || link.label}</NodeLink>
                        ) : (
                            <Link itemProp='url' to={link.reference?.target || ''}>
                                {link.label}
                            </Link>
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
