import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import SlideLeft from 'Molecules/Panels/SlideLeft'

const PanelBlockResponsive = ({ title = '', isOpen, onClose, children }) => {
    return (
        <>
            <SlideLeft
                overlayVariant='md:hidden'
                isOpen={isOpen}
                title={
                    <div className='text-2xl text-gray-800 font-bold self-center'>
                        {title}
                    </div>
                }
                onClose={onClose}
                >
                {children}
            </SlideLeft>

            {isOpen && <div className='hidden md:flex'>
                <div className='grid w-full md:ml-5'>
                    <div className='font-bold text-2xl my-4 md:ml-6 flex'>
                        <FormattedMessage id='account.accountDetails' />
                    </div>
                    {children}
                </div>
            </div>}
        </>
    )
}

PanelBlockResponsive.propTypes = {
    title: PropTypes.any,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,

}

export default PanelBlockResponsive
