import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import NavigationItem from './NavigationItem'

import { categoryTreeType } from '../types'

const Navigation = ({ items, onSelectItem, navPath, level = 0, isActive = false }) => {
    return (
        <div
            className={classnames({
                'absolute top-0 w-full bg-background-primary': true,
                'left-full': level !== 0,
                'left-0': level === 0,
                'opacity-0 invisible': !isActive,
                'opacity-100 visible': isActive,
            })}
            >
            <ul className='flex-0-0-05 mx-5'>
                {items && items.map((item, i) => {
                    return (
                        <NavigationItem
                            key={item.nodeId}
                            item={item}
                            navPath={navPath}
                            level={level}
                            onClick={onSelectItem}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

Navigation.propTypes = {
    items: PropTypes.arrayOf(categoryTreeType),
    onSelectItem: PropTypes.func,
    navPath: PropTypes.arrayOf(categoryTreeType),
    level: PropTypes.number,
    isActive: PropTypes.bool,
}

export default Navigation
