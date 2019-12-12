import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

class AtomsPrice extends Component {
    locale = () => {
        return (this.props.context.locale).replace('_', '-').split('@')[0]
    }

    render () {
        return (
            <span className={classnames({
                    'c-price': true,
                    'c-price--normal': this.props.normal,
                    'c-price--old': this.props.old,
                })}
                >
                {(this.props.value / 100).toLocaleString(
                    this.locale(),
                    {
                        style: 'currency',
                        currency: this.props.currency || this.props.context.currency,
                    }
                )}
            </span>
        )
    }
}

AtomsPrice.propTypes = {
    context: PropTypes.object.isRequired,
    value: PropTypes.number.isRequired,
    currency: PropTypes.string,
    normal: PropTypes.bool,
    old: PropTypes.bool,
}

AtomsPrice.defaultProps = {
    currency: null,
    old: false,
    normal: false,
}

// These are just default props for the pattern library
AtomsPrice.testProps = {
    value: 19999,
}

export default connect(
    (globalState, props) => {
        return {
            context: globalState.app.context,
            ...props,
        }
    }
)(ComponentInjector.return('AtomsPrice', AtomsPrice))
