import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import classnames from 'classnames'
import _ from 'lodash'

import { titleHeaderPage, centerTitle } from './header-page.module.scss'
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
                onClick={this.props.handleClick}
                >
                <div className={`${centerTitle} o-block-short o-block-short--centered`}>
                    <button className='o-block-short__short-item c-link c-link--uniform'>
                        <svg className='c-icon c-icon--m' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
                            <title><FormattedMessage id='account.back' />}</title>
                            <path d='M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z' />
                        </svg>
                    </button>
                    <div className={`${titleHeaderPage} o-block-short__body`}>
                        <h2 className='c-title-level-3'>{this.props.title}</h2>
                    </div>
                </div>
            </Component>
        )
    }
}

OrganismsPageHeader.propTypes = {
    // children: PropTypes.node.isRequired,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    title: PropTypes.string,
    handleClick: PropTypes.func,
}

OrganismsPageHeader.defaultProps = {
    component: 'div',
    className: '',
    title: 'Anmelden',
}

export default ComponentInjector.return('OrganismsPageHeader', OrganismsPageHeader)
