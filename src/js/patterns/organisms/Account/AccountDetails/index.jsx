import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import useMdBreakpoint from '../../../molecules/Layout/Breakpoints/useMdBreakpoint'
import PanelModalResponsive from 'Molecules/Layout/PanelModalResponsive'
import PanelBlockResponsive from 'Molecules/Layout/PanelBlockResponsive'
import PersonalDetailsForm from '../Forms/PersonalDetailsForm'
import ChangePasswordForm from '../Forms/ChangePasswordForm'
import AccountDetailsOverview from './Overview'

const AccountDetails = ({ showAccountDetails, setShowAccountDetails, firstName, lastName, email }) => {
    const [showEditDetailsPanel, setShowEditDetailsPanel] = useState(false)
    const [showEditDetailsModal, setShowEditDetailsModal] = useState(false)
    const [showChangePasswordPanel, setShowChangePasswordPanel] = useState(false)
    const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
    const { showPanel, showModal } = useMdBreakpoint()

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
                <ChangePasswordForm />
            </PanelModalResponsive>
        </>
    )
}

AccountDetails.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    showAccountDetails: PropTypes.bool.isRequired,
    setShowAccountDetails: PropTypes.func.isRequired,
}

export default AccountDetails
