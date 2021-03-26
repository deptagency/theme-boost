import React from 'react'
import PropTypes from 'prop-types'
import SlideLeft from '../Panels/SlideLeft'

const PanelBlockResponsive = ({ title = '', isOpen, onClose, children }) => {
    return (
        <>
            <SlideLeft
                overlayVariant='md:hidden'
                isOpen={isOpen}
                title={<div className='text-2xl text-neutral-900 font-bold self-center'>{title}</div>}
                onClose={onClose}
            >
                {children}
            </SlideLeft>
            <div className='hidden md:grid'>
                <div className='grid w-full md:ml-4'>
                    {title && <div className='font-bold text-2xl my-4 md:ml-6'>{title}</div>}
                    {children}
                </div>
            </div>
        </>
    )
}

PanelBlockResponsive.propTypes = {
    title: PropTypes.any,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.any,
}

export default PanelBlockResponsive
