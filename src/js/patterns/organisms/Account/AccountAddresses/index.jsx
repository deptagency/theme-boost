import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import Button from 'Atoms/button'

import useMdBreakpoint from 'Molecules/Layout/Breakpoints/useMdBreakpoint'
import PanelModalResponsive from 'Molecules/Layout/PanelModalResponsive'
import PanelBlockResponsive from 'Molecules/Layout/PanelBlockResponsive'
import DefaultNotifications from 'Molecules/Notifications/Default'

import AddressForm from '../Forms/AddressForm'
import RemoveAddressForm from '../Forms/RemoveAddressForm'

import EmptyList from './EmptyList'
import AddressCard from './AddressCard'

const AccountAddresses = ({ openPanel, onClose, addresses, countries, handleAddAddress, handleUpdateAddress, handleRemoveAddress, handleSetDefaultBillingAddress, handleSetDefaultShippingAddress }) => {
    const [showCreateAddressPanel, setShowCreateAddressPanel] = useState(false)
    const [showCreateAddressModal, setShowCreateAddressModal] = useState(false)
    const [showEditAddressPanel, setShowEditAddressPanel] = useState(false)
    const [showEditAddressModal, setShowEditAddressModal] = useState(false)
    const [showDeleteAddressPanel, setShowDeleteAddressPanel] = useState(false)
    const [showDeleteAddressModal, setShowDeleteAddressModal] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const [activeAddress, setActiveAddress] = useState(null)
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
                <div className='md:shadow-lg'>
                    <div className='border-b-4 border-gray-100' />

                    <div className='text-center my-6'>
                        <Button
                            variant='btn-outline btn-outline-black'
                            onClick={() => {
                                showPanel && setShowCreateAddressPanel(true)
                                showModal && setShowCreateAddressModal(true)
                            }}
                        >
                            <FormattedMessage id='account.address.newAddress' />
                        </Button>
                    </div>

                    <div className='border-b-4 border-gray-100' />

                    {addresses.map((address, index) => {
                        return (
                            <div key={index}>
                                <div className='mx-4 mt-5 mb-6'>
                                    <AddressCard
                                        address={address}
                                        countries={countries}
                                        onEditClicked={() => { 
                                            showPanel && setShowEditAddressPanel(true)
                                            showModal && setShowEditAddressModal(true)
                                            setActiveAddress(address)
                                        }}
                                        onDeleteClicked={() => { 
                                            showPanel && setShowDeleteAddressPanel(true)
                                            showModal && setShowDeleteAddressModal(true)
                                            setActiveAddress(address)
                                        }}
                                    />
                                </div>

                                <div className='border-b-4 border-gray-100' />
                            </div>
                        )
                    })}

                    {addresses.length == 0 && 
                        <EmptyList />
                    }
                </div>
            </PanelBlockResponsive>

            <PanelModalResponsive
                title={<FormattedMessage id='account.address.newAddress' />}
                openPanel={showCreateAddressPanel} 
                closePanel={() => { return setShowCreateAddressPanel(false) }}
                openModal={showCreateAddressModal}
                closeModal={() => { return setShowCreateAddressModal(false) }}
                >
                <AddressForm
                    countries={countries}
                    showLoader={showLoader}
                    onSubmit={(address) => {
                        setShowLoader(true)

                        handleAddAddress(address)
                    }}
                />
            </PanelModalResponsive>

            {activeAddress &&
                <PanelModalResponsive
                    title={<FormattedMessage id='account.address.editAddress' />}
                    openPanel={showEditAddressPanel}
                    closePanel={() => { return setShowEditAddressPanel(false) }}
                    openModal={showEditAddressModal}
                    closeModal={() => { return setShowEditAddressModal(false) }}
                    >
                    <AddressForm
                        countries={countries}
                        defaultValues={activeAddress}
                        showLoader={showLoader}
                        onSubmit={(address) => {
                            setShowLoader(true)

                            handleUpdateAddress(address)

                            if (address.isDefaultShippingAddress) {
                                handleSetDefaultBillingAddress(address)
                            }

                            if (address.isDefaultBillingAddress) {
                                handleSetDefaultShippingAddress(address)
                            }
                        }}
                    />
                </PanelModalResponsive>
            }

            {activeAddress &&
                <PanelModalResponsive                   
                    title={<FormattedMessage id='account.address.removeAddress' />}
                    openPanel={showDeleteAddressPanel} 
                    closePanel={() => { return setShowDeleteAddressPanel(false) }}
                    openModal={showDeleteAddressModal}
                    closeModal={() => { return setShowDeleteAddressModal(false) }}
                    >
                    <RemoveAddressForm
                        countries={countries}
                        address={activeAddress}
                        showLoader={showLoader}
                        onRemoveAddressClicked={() => {
                            setShowLoader(true)

                            handleRemoveAddress(activeAddress)
                        }}
                    />
                </PanelModalResponsive>
            }

            <DefaultNotifications notifications={notifications} />
        </>
    )
}

AccountAddresses.propTypes = {
    openPanel: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    addresses: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
    handleAddAddress: PropTypes.func.isRequired,
    handleUpdateAddress: PropTypes.func.isRequired,
    handleRemoveAddress: PropTypes.func.isRequired,
    handleSetDefaultBillingAddress: PropTypes.func.isRequired,
    handleSetDefaultShippingAddress: PropTypes.func.isRequired,
}

export default AccountAddresses
