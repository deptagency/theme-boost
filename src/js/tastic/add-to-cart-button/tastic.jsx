import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Button from '../../patterns/atoms/buttons/button'

class AddToCartButtonTastic extends Component {
    render () {
        return (
            <div className='margin-12'>
                <Button className='c-button--full-width o-distance-m display-grid' type='primary'>
                    In den Warenkorb
                </Button>
            </div>
        )
    }
}

AddToCartButtonTastic.propTypes = {
    // data: PropTypes.object.isRequired,
    // tastic: PropTypes.object.isRequired,
}

AddToCartButtonTastic.defaultProps = {}

export default AddToCartButtonTastic
