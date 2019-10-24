import React from 'react'
import PropTypes from 'prop-types'
import Reference from '../../../component/reference'

const NavItem = ({ item, active = false }) => {
    return (
        <li className='c-service-navigation o-list-inline__item'>
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

const MoleculesGenderNavLinks = ({ items }) => {
    console.log('MoleculesGenderNavLinks', items)
    return (
        <ul className='c-service-navigation o-list-inline'>{items && items.map((item) => { return <NavItem item={item} /> })}</ul>
    )
}

MoleculesGenderNavLinks.propTypes = {
    items: PropTypes.array.isRequired,
}

export default MoleculesGenderNavLinks
