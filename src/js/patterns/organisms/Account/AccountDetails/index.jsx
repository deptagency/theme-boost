import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import useMdBreakpoint from 'Molecules/Layout/Breakpoints/useMdBreakpoint'
import PanelModalResponsive from 'Molecules/Layout/PanelModalResponsive'
import PanelBlockResponsive from 'Molecules/Layout/PanelBlockResponsive'
import DefaultNotifications from 'Molecules/Notifications/Default'
import PersonalDetailsForm from '../Forms/PersonalDetailsForm'
import ChangePasswordForm from '../Forms/ChangePasswordForm'
import AccountDetailsOverview from './Overview'

const AccountDetails = ({ showAccountDetails, setShowAccountDetails, firstName, lastName, email, handlePasswordChange }) => {
    const [showEditDetailsPanel, setShowEditDetailsPanel] = useState(false)
    const [showEditDetailsModal, setShowEditDetailsModal] = useState(false)
    const [showChangePasswordPanel, setShowChangePasswordPanel] = useState(false)
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const { showPanel, showModal } = useMdBreakpoint()

    const notifications = useSelector((state) => {
        return state.user.notifications || {}
    })

    useEffect(() => {
        setShowLoader(false)
    }, [notifications])

    return (
        <>
            <PanelBlockResponsive
                title={<FormattedMessage id='account.accountDetails' />}
                isOpen={showAccountDetails}
                onClose={() => { setShowAccountDetails(false) }}
                >
                <AccountDetailsOverview
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    openAccountDetailsForm={() => {
                        showPanel && setShowEditDetailsPanel(true)
                        showModal && setShowEditDetailsModal(true)
                    }}
                    openChangePasswordForm={() => {
                        showPanel && setShowChangePasswordPanel(true)
                        showModal && setShowChangePasswordModal(true)
                    }}
                />
            </PanelBlockResponsive>

            <PanelModalResponsive
                title={<FormattedMessage id='account.editDetails' />}
                openPanel={showEditDetailsPanel}
                closePanel={() => { return setShowEditDetailsPanel(false) }}
                openModal={showEditDetailsModal}
                closeModal={() => { return setShowEditDetailsModal(false) }}
                >
                <PersonalDetailsForm
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                />
            </PanelModalResponsive>

            <PanelModalResponsive
                title={<FormattedMessage id='account.changePassword' />}
                openPanel={showChangePasswordPanel}
                closePanel={() => { return setShowChangePasswordPanel(false) }}
                openModal={showChangePasswordModal}
                closeModal={() => { return setShowChangePasswordModal(false) }}
                >
                <ChangePasswordForm
                    onSubmit={(oldPassword, newPassword) => {
                        setShowLoader(true)
                        handlePasswordChange(oldPassword, newPassword)
                    }}
                    showLoader={showLoader}
                />
            </PanelModalResponsive>

            <DefaultNotifications notifications={notifications} />
        </>
    )
}

AccountDetails.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    showAccountDetails: PropTypes.bool.isRequired,
    setShowAccountDetails: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
}

export default AccountDetails
