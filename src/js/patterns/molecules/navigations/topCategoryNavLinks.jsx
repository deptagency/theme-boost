import React from 'react'
import PropTypes from 'prop-types'
import Reference from 'frontastic-catwalk/src/js/component/reference'

const NavItem = ({ item, active = false }) => {
    return (
        <li key={item.nodeId} className='c-service-navigation o-list-inline__item'>
            <Reference reference={item.reference} className={`c-service-navigation__anchor ${active && 'is-active'}`}>
                {item.name}
            </Reference>
        </li>
    )
}

NavItem.propTypes = {
    item: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
}

const MoleculesTopCategoryNavLinks = ({ items }) => {
    return (
        <ul className='c-service-navigation o-list-inline'>
            {items &&
                items.map((item) => {
                    return <NavItem item={item} />
                })}
        </ul>
    )
}

MoleculesTopCategoryNavLinks.propTypes = {
    items: PropTypes.array.isRequired,
}

export default MoleculesTopCategoryNavLinks
