import React from 'react'
import Reference from '../../../../component/reference'

const NavItem = ({ item, active = false }) => (
    <li className='c-service-navigation o-list-inline__item'>
        <Reference reference={item.reference} className={`c-service-navigation__anchor ${active && 'is-active'}`}>
            {item.name}
        </Reference>
    </li>
)
const MoleculesGenderNavLinks = ({ items }) => (
    <ul className='c-service-navigation o-list-inline'>{items && items.map((item) => <NavItem item={item} />)}</ul>
)

export default MoleculesGenderNavLinks
