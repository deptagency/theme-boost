import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsChiplist extends Component {
    render () {
        return (<div>
            <div className='o-chiplist'>
                <div className='c-chip o-chiplist__item'>
                    <span>Blau</span>
                    <button className='c-chip__trigger'>
                        <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <title>cross</title>
                            <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                        </svg>
                    </button>
                </div>
                <div className='c-chip o-chiplist__item'>
                    <span>Tommy Hilfiger</span>
                    <button className='c-chip__trigger'>
                        <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <title>cross</title>
                            <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                        </svg>
                    </button>
                </div>
                <div className='c-chip o-chiplist__item'>
                    <span>Grö0e 46</span>
                    <button className='c-chip__trigger'>
                        <svg className='c-icon c-icon--s' version='1.1' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <title>cross</title>
                            <path d='M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z' />
                        </svg>
                    </button>
                </div>
            </div>
        </div>)
    }
}

OrganismsChiplist.propTypes = {
}

OrganismsChiplist.defaultProps = {
}

export default ComponentInjector.return('OrganismsChiplist', OrganismsChiplist)
