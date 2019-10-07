import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class MoleculesBreadcrumb extends Component {
    render () {
        return (<div>
          <ol className="o-list-divided c-breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
            <li className="o-list-divided__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
              <a className="c-breadcrumb__anchor" href="" itemprop="url">
                <span itemprop="title">Herren</span>
                <meta itemprop="position" content="1" />
              </a>
            </li>
            <li className="o-list-divided__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
              <a className="c-breadcrumb__anchor" href="" itemprop="url">
                <span itemprop="title">Schuhe</span>
                <meta itemprop="position" content="2" />
              </a>
            </li>
            <li className="o-list-divided__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
              <a className="c-breadcrumb__anchor is-active" href="" itemprop="item">
                <span itemprop="title">Sneaker</span>
                <meta itemprop="position" content="3" />
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
