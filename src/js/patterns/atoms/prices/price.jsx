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
                    'font-hairline': this.props.thin,
                    'text-gray-500': this.props.quiet,
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
    thin: PropTypes.bool,
    quiet: PropTypes.bool,
}

AtomsPrice.defaultProps = {
    currency: null,
}

export default connect(
    (globalState, props) => {
        return {
            context: globalState.app.context,
            ...props,
        }
    }
)(ComponentInjector.return('AtomsPrice', AtomsPrice))
