import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TopCategories from './TopCategories'
import Navigation from './Navigation'
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
}) => {
    const currentTree = topCategories[currentTopCategory].tree

    return (
        <div
            className={classnames({
                'fixed inset-0 bg-white overflow-hidden z-20': true,
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
}

export default Modal
