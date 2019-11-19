import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import app from 'frontastic-catwalk/src/js/app/app'
import AccountAccessForms from '../../../patterns/templates/my-account/account-access'
import { ReactComponent as ArrowLeftIcon } from '../../../../icons/arrow-left.svg'

const AccountItem = ({ name, onClick }) => {
    return (
        <div className='c-navigation__item'>
            <a
                className='c-navigation__anchor'
                onClick={onClick}
            >
                {name}
            </a>
            <ArrowLeftIcon />
        </div>
    )
}

AccountItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

const AccountProfileTastic = ({ context }) => {
    const { session } = context
    if (!session.loggedIn) {
        return <AccountAccessForms />
    }

    return (
        <Fragment>
            <div className='profile-greet'>
                Hallo, { session.account.firstName } { session.account.lastName }!
            </div>
            <div>
                <AccountItem name='Bestellungen' />
                <AccountItem name='Rücksendungen' />
                <AccountItem name='Benutzerdaten' />
                <AccountItem name='Adressen' />
                <AccountItem name='Hilfe' />
                <AccountItem
                    name='Logout'
                    onClick={() => { app.getLoader('context').logout() }}
                />
            </div>
        </Fragment>
    )
}

AccountProfileTastic.propTypes = {
    context: PropTypes.object.isRequired,
}

AccountProfileTastic.defaultProps = {
}

export default connect(
    (globalState, props) => {
        return {
            ...props,
            context: globalState.app.context,
        }
    }
)(AccountProfileTastic)
