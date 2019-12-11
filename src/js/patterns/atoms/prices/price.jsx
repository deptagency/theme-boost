import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

class AtomsPrice extends Component {
    locale = () => {
        return (this.props.context.locale).replace('_', '-').split('@')[0]
    }

    render () {
        return (
            <span>
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
}

AtomsPrice.defaultProps = {
    currency: null,
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
