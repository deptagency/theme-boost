  import React, { Component } from 'react'

import ComponentInjector from '../../../../app/injector'

class MoleculesColorSwatch extends Component {
    render () {
        return (<div>
          <h3>Colorswatch</h3>
          <div className="c-colorswatch">
            <ul className="o-list-bare">
              <li className="o-list-bare__item">
                <button class="c-colorswatch__item"></button>
              </li>
              <li className="o-list-bare__item">
                <button class="c-colorswatch__item is-active"></button>
              </li>
              <li className="o-list-bare__item">
                <button class="c-colorswatch__item"></button>
              </li>
              <li className="o-list-bare__item">
                <button class="c-colorswatch__item"></button>
              </li>
            </ul>
          </div>
          <h3 className='o-distance'>Colorswatch Inline</h3>
          <div className="c-colorswatch">
            <ul className="o-list-inline">
              <li className="o-list-inline__item">
                <button class="c-colorswatch__item"></button>
              </li>
              <li className="o-list-inline__item">
                <button class="c-colorswatch__item is-active"></button>
              </li>
              <li className="o-list-inline__item">
                <button class="c-colorswatch__item"></button>
              </li>
              <li className="o-list-inline__item">
                <button class="c-colorswatch__item"></button>
              </li>
            </ul>
          </div>
          <h3 className='o-distance'>Colorswatch with small items</h3>
          <div className="c-colorswatch">
            <ul className="o-list-bare">
              <li className="o-list-bare__item">
                <button class="c-colorswatch__item c-colorswatch__item--small"></button>
              </li>
              <li className="o-list-bare__item">
                <button class="c-colorswatch__item c-colorswatch__item--small is-active"></button>
              </li>
              <li className="o-list-bare__item">
                <button class="c-colorswatch__item c-colorswatch__item--small"></button>
              </li>
              <li className="o-list-bare__item">
                <button class="c-colorswatch__item c-colorswatch__item--small"></button>
              </li>
            </ul>
          </div>
        </div>)
    }
}

MoleculesColorSwatch.propTypes = {
}

MoleculesColorSwatch.defaultProps = {
}

export default ComponentInjector.return('MoleculesColorSwatch', MoleculesColorSwatch)
