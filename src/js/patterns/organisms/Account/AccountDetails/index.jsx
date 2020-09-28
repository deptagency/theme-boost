import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import useMdBreakpoint from 'Molecules/Layout/Breakpoints/useMdBreakpoint'
import PanelModalResponsive from 'Molecules/Layout/PanelModalResponsive'
import PanelBlockResponsive from 'Molecules/Layout/PanelBlockResponsive'
import PersonalDetailsForm from '../Forms/PersonalDetailsForm'
import ChangePasswordForm from '../Forms/ChangePasswordForm'
import AccountDetailsOverview from './Overview'

const AccountDetails = ({
    firstName,
    lastName,
    email,
    openPanel,
    onClose,
    handlePasswordChange,
    handleUpdateUserDetails,
}) => {
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
                isOpen={openPanel}
                onClose={onClose}
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
                closePanel={() => {
                    return setShowEditDetailsPanel(false)
                }}
                openModal={showEditDetailsModal}
                closeModal={() => {
                    return setShowEditDetailsModal(false)
                }}
                >
                <PersonalDetailsForm
                    firstName={firstName}
                    lastName={lastName}
                    showLoader={showLoader}
                    onSubmit={(data) => {
                        setShowLoader(true)
                        handleUpdateUserDetails(data)
                    }}
                />
            </PanelModalResponsive>

            <PanelModalResponsive
                title={<FormattedMessage id='account.changePassword' />}
                openPanel={showChangePasswordPanel}
                closePanel={() => {
                    return setShowChangePasswordPanel(false)
                }}
                openModal={showChangePasswordModal}
                closeModal={() => {
                    return setShowChangePasswordModal(false)
                }}
                >
                <ChangePasswordForm
                    showLoader={showLoader}
                    onSubmit={(oldPassword, newPassword) => {
                        setShowLoader(true)
                        handlePasswordChange(oldPassword, newPassword)
                    }}
                />
            </PanelModalResponsive>
        </>
    )
}

AccountDetails.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    openPanel: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    handleUpdateUserDetails: PropTypes.func.isRequired,
}

export default AccountDetails
