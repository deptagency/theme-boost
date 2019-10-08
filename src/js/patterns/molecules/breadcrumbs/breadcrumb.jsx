import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class MoleculesBreadcrumb extends Component {
    render () {
        return (<div>
            <ol className='o-list-divided c-breadcrumb' itemScope itemType='http://schema.org/BreadcrumbList'>
                <li className='o-list-divided__item' itemProp='itemListElement' itemScope itemType='http://schema.org/ListItem'>
                    <a className='c-breadcrumb__anchor' href='' itemProp='url'>
                        <span itemProp='title'>Herren</span>
                        <meta itemProp='position' content='1' />
                    </a>
                </li>
                <li className='o-list-divided__item' itemProp='itemListElement' itemScope itemType='http://schema.org/ListItem'>
                    <a className='c-breadcrumb__anchor' href='' itemProp='url'>
                        <span itemProp='title'>Schuhe</span>
                        <meta itemProp='position' content='2' />
                    </a>
                </li>
                <li className='o-list-divided__item' itemProp='itemListElement' itemScope itemType='http://schema.org/ListItem'>
                    <a className='c-breadcrumb__anchor is-active' href='' itemProp='item'>
                        <span itemProp='title'>Sneaker</span>
                        <meta itemProp='position' content='3' />
                    </a>
                </li>
            </ol>
        </div>)
    }
}

MoleculesBreadcrumb.propTypes = {
}

MoleculesBreadcrumb.defaultProps = {
}

export default ComponentInjector.return('MoleculesBreadcrumb', MoleculesBreadcrumb)
