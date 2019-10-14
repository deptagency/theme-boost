import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class MoleculesColorSwatch extends Component {
    render () {
        return (<div>
            <h3>Colorswatch</h3>
            <div className='c-colorswatch'>
                <ul className='o-list-bare'>
                    <li className='o-list-bare__item'>
                        <button className='c-colorswatch__item' />
                    </li>
                    <li className='o-list-bare__item'>
                        <button className='c-colorswatch__item is-active' />
                    </li>
                    <li className='o-list-bare__item'>
                        <button className='c-colorswatch__item' />
                    </li>
                    <li className='o-list-bare__item'>
                        <button className='c-colorswatch__item' />
                    </li>
                </ul>
            </div>
            <h3 className='o-distance'>Colorswatch Inline</h3>
            <div className='c-colorswatch'>
                <ul className='o-list-inline'>
                    <li className='o-list-inline__item'>
                        <button className='c-colorswatch__item' />
                    </li>
                    <li className='o-list-inline__item'>
                        <button className='c-colorswatch__item is-active' />
                    </li>
                    <li className='o-list-inline__item'>
                        <button className='c-colorswatch__item' />
                    </li>
                    <li className='o-list-inline__item'>
                        <button className='c-colorswatch__item' />
                    </li>
                </ul>
            </div>
            <h3 className='o-distance'>Colorswatch with small items</h3>
            <div className='c-colorswatch'>
                <ul className='o-list-bare'>
                    <li className='o-list-bare__item'>
                        <button className='c-colorswatch__item c-colorswatch__item--small' />
                    </li>
                    <li className='o-list-bare__item'>
                        <button className='c-colorswatch__item c-colorswatch__item--small is-active' />
                    </li>
                    <li className='o-list-bare__item'>
                        <button className='c-colorswatch__item c-colorswatch__item--small' />
                    </li>
                    <li className='o-list-bare__item'>
                        <button className='c-colorswatch__item c-colorswatch__item--small' />
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
