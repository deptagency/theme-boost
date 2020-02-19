import React from 'react'
import PropTypes from 'prop-types'

import OrganismsHeaderSlideIn from '../../organisms/base/header-slide-in'
import PanelFooterButton from '../../atoms/buttons/panelFooterButton'
import CleanSlideInPanel from './clean'

const FilterSubPanel = ({
    children,
    isOpen,
    onClose,
    title,
    footerButtonState,
    onBackClick,
    onSaveClick,
    overlayClassName = '',
}) => {
    return (
        <CleanSlideInPanel
            isOpen={isOpen}
            from='right'
            overlayClassName={overlayClassName}
            header={<OrganismsHeaderSlideIn
                onClose={onClose}
                title={title}
                showRightCloseIcon={false}
            />}
            footer={
                <PanelFooterButton
                    state={footerButtonState}
                    onBackClick={onBackClick}
                    onSaveClick={onSaveClick}
                />
            }
            >

            {children}
        </CleanSlideInPanel>
    )
}

FilterSubPanel.propTypes = {
    children: PropTypes.any.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]).isRequired,
    footerButtonState: PropTypes.string.isRequired,
    onBackClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    overlayClassName: PropTypes.string,
}

export default FilterSubPanel
