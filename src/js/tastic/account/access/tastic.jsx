import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import app from 'frontastic-catwalk/src/js/app/app'
import AccountAccessForms from '../../../patterns/templates/my-account/account-access'

class AccountAccessTastic extends Component {
    render () {
        if (this.props.context.session.loggedIn) {
            app.getRouter().push('Frontastic.Frontend.Master.Account.profile')
        }

        return <AccountAccessForms />
    }
}

AccountAccessTastic.propTypes = {
    context: PropTypes.object.isRequired,
}

AccountAccessTastic.defaultProps = {
}

export default connect(
    (globalState, props) => {
        return {
            ...props,
            context: globalState.app.context,
        }
    }
)(AccountAccessTastic)
