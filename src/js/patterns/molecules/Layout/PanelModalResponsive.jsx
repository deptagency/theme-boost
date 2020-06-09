import React from 'react'
import PropTypes from 'prop-types'

import SlideBottom from 'Molecules/Panels/SlideBottom'
import PlainModal from 'Molecules/Modals/PlainModal'

import useMdBreakpoint from './Breakpoints/useMdBreakpoint'

const PanelModalResponsive = ({
    title,
    children,
    openPanel,
    closePanel,
    openModal,
    closeModal,
}) => {
    const { showPanel, showModal } = useMdBreakpoint()

    return (
        <div>
            <SlideBottom
                overlayVariant='md:hidden'
                isOpen={openPanel && showPanel}
                title={title}
                onClose={closePanel}
            >
                {children}
            </SlideBottom>

            {openModal && showModal &&
                <>
                    <PlainModal
                        variant='hidden md:flex'
                        onClose={closeModal}
                        title={
                            <h3 className='text-3xl font-semibold'>
                                {title}
                            </h3>
                        }
                    >
                        {children}
                    </PlainModal>
                </>
            }
        </div>
    )
}

PanelModalResponsive.propTypes = {
    title: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    openPanel: PropTypes.bool.isRequired,
    closePanel: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default PanelModalResponsive
