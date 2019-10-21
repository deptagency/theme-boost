import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import { thisTypeAnnotation } from '../../../../../../../../../../../Library/Caches/typescript/3.6/node_modules/@babel/types/lib'

const MoleculesReferalBordered = ({ selected, title }) => {
    return (
        <div>
            <a href='' title='' className='c-referal c-referal--bordered is-active'>
              <h3 className='c-title-level-4 c-referal__body u-text-bold'>{title}</h3>
              <div className='c-referal__offset'>
                <span class="u-text-s u-text-one-liner t-text-quiet">
                  {selected.map((item, i) => {
                      return <span>{item}, </span>
                  })}
                </span>
                <svg className='c-icon c-icon--s c-referal__icon t-text-quiet' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z' />
                </svg>
              </div>
            </a>
        </div>
    )
}

MoleculesReferalBordered.propTypes = {
  title: PropTypes.string,
  selected: PropTypes.array
}

MoleculesReferalBordered.defaultProps = {
  title: 'Nav Item',
  selected: ['Abercrombie', 'Jack&Jones', 'Esprit', 'Tommy Hilfiger']
}

export default ComponentInjector.return('MoleculesReferalBordered', MoleculesReferalBordered)
