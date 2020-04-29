import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectIntl, intlShape } from 'react-intl'

import Checkbox from 'Atoms/checkbox'

import AddressForm from './Forms/Address'
import BillingForm from './Forms/Billing'
import ShippingForm from './Forms/Shipping'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

class ShippingPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isBillingAddress: false
        }
    }

    render() {
        const { errorMessage, goToNextPanel, intl, data } = this.props

        const buttonLabel = 'Next: Payment' //intl.formatMessage({id: 'checkout.nextPayment'});

        return (
            <div className='flex items-center'>
                <StickyRightColumn
                    variant='my-4 max-w-960px md:px-4 mx-auto'
                    leftColumn={
                        <div className='md:shadow-md md:rounded'>
                            <div className='px-4 py-6 md:px-6 border-b-4 border-gray-100 border-t-4 md:border-t-0'>
                                <ShippingForm />
                            </div>

                            <div className='px-4 py-6 md:px-6 border-b-4 md:border-b-0 border-gray-100'>
                                <AddressForm />

                                <div className='mt-4 p-4 bg-gray-200 rounded flex items-center text-gray-800'>
                                    <Checkbox 
                                        className='mr-2'
                                        label={'Use different billing details'} 
                                        onClick={() => { 
                                            this.setState({
                                                isBillingAddress: !this.state.isBillingAddress
                                            })
                                        }}
                                    />
                                </div>

                                <div className={classnames({
                                    'mt-4': true,
                                    'block': this.state.isBillingAddress,
                                    'hidden': !this.state.isBillingAddress
                                })}>
                                    <BillingForm />
                                </div>
                            </div>
                        </div>
                    }

                    rightColumn={
                        <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded'>
                            <Summary sum={data.sum} label={buttonLabel} disabled={false} showVouchers={false}
                                onClick={() => {
                                    goToNextPanel()
                                }}
                            />
                        </div>
                    }
                />
            </div>
        )
    }
}

ShippingPanel.propTypes = {
    name: PropTypes.node.isRequired,
    errorMessage: PropTypes.string,
    goToNextPanel: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
}

export default injectIntl(ShippingPanel);
