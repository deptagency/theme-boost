import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from 'Atoms/button'
import Input from 'Atoms/input'

const PaymentPanel = ({ name, errorMessage, goToNextPanel, goToPreviousPanel }) => {
    const [ valid, setValid ] = useState(true)
    const [ invoiceInfo, setInvoiceInfo ] = useState('')

    return (
        <div
            className={classnames({
                'flex items-center h-full-84px bg-gray-400 rounded p-4': true,
                'text-gray-600 bold text-xl italic text-center pt-40': true,
            })}
            >
            <h3>{name}</h3>
            <Input
                className={classnames({
                    'form-input': true,
                    'border border-red-600': !valid,
                })}
                placeholder='Enter your invoice info'
                onChange={(e) => {
                    setValid(e.target.value.length > 0)
                    setInvoiceInfo(e.target.value)
                }}
            />
            {!valid && <div className='text-red-600 font-bold'>
                {errorMessage}
            </div>}

            <Button
                variant='btn btn-indigo mt-4 mr-4'
                onClick={goToPreviousPanel}
            >
                Back
            </Button>

            <Button
                variant='btn btn-indigo mt-4'
                onClick={() => {
                    if (invoiceInfo.length === 0) {
                        setValid(false)
                        return
                    }

                    valid && goToNextPanel()
                }}

            >
                Next
            </Button>
        </div>
    )
}

PaymentPanel.propTypes = {
    name: PropTypes.node.isRequired,
    errorMessage: PropTypes.string,
    goToNextPanel: PropTypes.func.isRequired,
    goToPreviousPanel: PropTypes.func.isRequired,
}

export default PaymentPanel
