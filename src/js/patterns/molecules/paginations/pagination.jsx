import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class MoleculesPagination extends Component {
    render () {
        return (<div>
            <div className='c-pagination'>
                <a href='' title='Page 1' className='c-pagination__item'>1</a>
                <a href='' title='Page 2' className='c-pagination__item'>2</a>
                <a href='' title='Page 3' className='c-pagination__item'>3</a>
                <a href='' title='Page 4' className='c-pagination__item is-active'>4</a>
                <a href='' title='Page 5' className='c-pagination__item'>5</a>
            </div>
        </div>)
    }
}

MoleculesPagination.propTypes = {
}

MoleculesPagination.defaultProps = {
}

export default ComponentInjector.return('MoleculesPagination', MoleculesPagination)
