import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import app from 'frontastic-catwalk/src/js/app/app'
import { FormattedMessage } from 'react-intl'

import AccountAccessForms from '../../../patterns/templates/my-account/account-access'
import { ReactComponent as ArrowRightIcon } from '../../../../icons/arrow-right.svg'

const AccountItem = ({ name, onClick, showRightArrow = true }) => {
    return (
        <div className='c-navigation__item'>
            <a
                className='c-navigation__anchor'
                onClick={onClick}
            >
                {name}
            </a>
            {showRightArrow && <ArrowRightIcon fill='gray' stroke='white' />}
        </div>
    )
}

AccountItem.propTypes = {
    name: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    showRightArrow: PropTypes.bool,
}

const AccountProfileTastic = ({ context }) => {
    const { session } = context
    if (!session.loggedIn) {
        return <AccountAccessForms />
    }

    return (
        <Fragment>
            <div className='profile-greet'>
                <FormattedMessage
                    id='account.greet'
                    values={{
                        name: `${session.account.firstName} ${session.account.lastName}`,
                    }}
                />
            </div>
            <div className='o-distance'>
                <AccountItem name={<FormattedMessage id='account.orders' />} />
                <AccountItem name={<FormattedMessage id='account.returns' />} />
                <AccountItem name={<FormattedMessage id='account.userInfo' />} />
                <AccountItem name={<FormattedMessage id='account.addresses' />} />
                <AccountItem name={<FormattedMessage id='account.help' />} />
                <AccountItem
                    name={<FormattedMessage id='account.logout' />}
                    onClick={() => { app.getLoader('context').logout() }}
                    showRightArrow={false}
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
