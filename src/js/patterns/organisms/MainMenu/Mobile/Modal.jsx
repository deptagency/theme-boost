import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Scrollbars from 'react-custom-scrollbars'
import Translatable from '@frontastic/catwalk/src/js/component/translatable'

import TopCategories from './TopCategories'
import Navigation from './Navigation'
import AccountLinks from './AccountLinks'

import {
    categoryTreeType,
    topCategoryType,
} from '../types'

const Modal = ({
    isOpen,
    level,
    topCategories,
    currentTopCategory,
    handleSelectTopCategory,
    handleSelectNavItem,
    handleGoBack,
    navPath,
    onClose,
    infoHeader,
    infoHeaderIcon,
    aboutHeader,
    aboutHeaderIcon,
    contacHeader,
    contactHeaderIcon,
}) => {
    const currentTree = topCategories[currentTopCategory].tree

    return (
        <div
            className={classnames({
                'fixed inset-0 bg-background-primary overflow-hidden z-20': true,
                'lg:hidden ease-out-expo duration-20': true,
                'translate-right': isOpen,
                'translate-left': !isOpen,
            })}
            >
            <div>
                <TopCategories
                    isOpen={isOpen}
                    level={level}
                    topCategories={topCategories}
                    currentTopCategory={currentTopCategory}
                    handleSelectTopCategory={handleSelectTopCategory}
                    handleGoBack={handleGoBack}
                    navPath={navPath}
                    onClose={onClose}
                />

                <Scrollbars
                    style={{ height: 'calc(100vh - 308px)' }}
                    autoHide
                    // hiding horizontal scrollbar
                    hideTracksWhenNotNeeded
                    renderView={p => { return <div {...p} style={{ ...p.style, overflowX: 'hidden' }} /> }}
                >
                    <div
                        className='w-full ease-out-expo duration-20'
                        style={{ transform: `translateX(${level * -100}%)` }}
                    >
                        {currentTree && <Navigation
                            items={currentTree.children}
                            navPath={navPath}
                            onSelectItem={handleSelectNavItem}
                            isActive={isOpen}
                        />}
                    </div>
                </Scrollbars>
                <AccountLinks
                    closeMobileMenu={onClose}
                    infoHeader={<Translatable value={infoHeader} />}
                    infoHeaderIcon={infoHeaderIcon}
                    aboutHeader={<Translatable value={aboutHeader} />}
                    aboutHeaderIcon={aboutHeaderIcon}
                    contacHeader={<Translatable value={contacHeader} />}
                    contactHeaderIcon={contactHeaderIcon}
                />
            </div>
        </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    level: PropTypes.number.isRequired,
    topCategories: PropTypes.arrayOf(topCategoryType),
    currentTopCategory: PropTypes.number.isRequired,
    handleSelectTopCategory: PropTypes.func.isRequired,
    handleSelectNavItem: PropTypes.func.isRequired,
    handleGoBack: PropTypes.func.isRequired,
    navPath: PropTypes.arrayOf(categoryTreeType),
    onClose: PropTypes.func.isRequired,
    infoHeader: PropTypes.object,
    infoHeaderIcon: PropTypes.string,
    aboutHeader: PropTypes.object,
    aboutHeaderIcon: PropTypes.string,
    contacHeader: PropTypes.object,
    contactHeaderIcon: PropTypes.string,
}

export default Modal
