import React from 'react'
import PropTypes from 'prop-types'

import NodeLink from '@frontastic/catwalk/src/js/app/nodeLink.jsx'

export function CategoryNavigationTree ({ navTree, title, currentPage }) {
    // This function determines if a subtree needs to be rendered.
    // It works as follows:
    // - A tree should only render subnodes if the current node is in it's path (parent nodes)
    // - A tree should also render the direct subnodes of the current page, one level deep (child nodes)
    //
    // the obvious solution would be a fancy tree traversal to find the target nodes and
    // mark all it's parents and 1 sub level as active.
    // But luckily our currentPage comes with a `path` info that makes checking for the two
    // cases above much easier.
    //
    // What this now does:
    // does the current node of the tree have children and is either equal the currentPage or in it's parent path?
    // then render the childnodes of that node.
    const hasChildrenAndMatchesPath = (node, currentPage) => {
        const pathSegments = currentPage.path.split('/')

        return (
            node.children &&
            node.children.length > 0 &&
            (currentPage.nodeId === node.nodeId || pathSegments.includes(node.nodeId))
        )
    }

    const isCurrentNode = (node, currentPage) => {
        return node.nodeId === currentPage.nodeId
    }

    // recursive function to render the tree
    const renderTree = (children) => {
        return (
            <ul className='pl-4 text-sm'>
                {children.map((node) => {
                    return (
                        <li key={node.nodeId} className='mb-1 leading-6'>
                            <NodeLink className={isCurrentNode(node, currentPage) ? 'font-bold' : ''} node={node}>
                                {node.name}
                            </NodeLink>
                            {hasChildrenAndMatchesPath(node, currentPage) && renderTree(node.children)}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className='text-sm text-neutral-900'>
            {title && <h4 className='font-bold mb-3'>{title}</h4>}
            {navTree && renderTree(navTree.children)}
        </div>
    )
}

CategoryNavigationTree.propTypes = {
    navTree: PropTypes.object.isRequired,
    title: PropTypes.string,
    currentPage: PropTypes.object.isRequired,
}
