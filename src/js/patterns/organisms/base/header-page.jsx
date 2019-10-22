import React, { Component } from 'react'

import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import MoleculesButton from 'js/patterns/molecules/buttons/button'
import OrganismsHeaderMobile from 'js/patterns/organisms/base/header-mobile'
import OrganismsFormLogin from 'js/patterns/organisms/form/form-login'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsPageHeader extends Component {
    render () {
        const Component = this.props.component
        
        return (
            <Component
                {..._.omit(this.props, ['children', 'component', 'className'])}
                    className={classnames(
                    this.props.className,
                )}
            >
                <div className="o-block-short o-block-short--centered">
                  <button className="o-block-short__short-item c-link c-link--uniform">
                    <svg class="c-icon c-icon--m" version="1.1" width="24" height="24" viewBox="0 0 24 24">
                      <title>Zurück</title>
                      <path d="M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
                    </svg>
                  </button>
                  <div className="o-block-short__body">
                    <h2 className="c-title-level-3">{this.props.title}</h2>
                  </div>
                </div>
            </Component>
        )
    }
}

OrganismsPageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  title: PropTypes.string,
}

OrganismsPageHeader.defaultProps = {
  component: 'div',
  className: '',
  title: 'Anmelden'
}

export default ComponentInjector.return('OrganismsPageHeader', OrganismsPageHeader)
