import React, { Component } from 'react'
import frontasticLogo from '../../../layout/frontasticLogo.svg'

class FrontasticHeaderTastic extends Component {
    render () {
        return (
            <div style={{ margin: '30px 70px 0' }}>
                <img src={frontasticLogo} alt='Frontastic Logo' />
            </div>
        )
    }
}

FrontasticHeaderTastic.defaultProps = {}

export default FrontasticHeaderTastic
