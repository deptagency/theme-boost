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
        const { errorMessage, goToNextPanel, intl } = this.props

        const buttonLabel = 'Next: Payment' //intl.formatMessage({id: 'checkout.nextPayment'});

        return (
            <div className='flex items-center p-4'>
                <StickyRightColumn
                    variant='my-4 max-w-960px md:px-4 mx-auto'
                    leftColumn={
                        <div className='md:shadow-md md:rounded md:px-6 md:pt-5 md:pb-6'>
                            <ShippingForm />

                            <AddressForm />

                            <div className='p-4 bg-gray-200 rounded'>
                                <Checkbox 
                                    label={'Use different billing details'} 
                                    onClick={() => { 
                                        this.setState({
                                            isBillingAddress: !this.state.isBillingAddress
                                        })
                                    }}
                                />
                            </div>

                            <div className={classnames({
                                'block': this.state.isBillingAddress,
                                'hidden': !this.state.isBillingAddress
                            })}>
                                <BillingForm />
                            </div>
                        </div>
                    }

                    rightColumn={
                        <div className='md:shadow-md md:rounded md:p-4'>
                            <Summary sum={10} label={buttonLabel} disabled={false} showVouchers={false}
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
