import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class AtomsForms extends Component {
    render () {
        return (<div>
            <label>Input Text Placeholder</label>
            <input type='text' name='input' placeholder='Text' />
            <br />
            <label>Input Number</label>
            <input type='number' name='input' placeholder='Number' />
            <br />
            <label>Input Date</label>
            <input type='date' name='input' placeholder='date' />
            <br />
            <label>Input Color</label>
            <input type='color' name='input' placeholder='color' />
            <br />
            <label>Input Range</label>
            <input type='range' name='range' min='0' max='100' value='90' step='10' />
            <br />
            <label>Input Text</label>
            <input type='text' name='input' value='Value' />
            <br />
            <label>Input Tel</label>
            <input type='tel' name='input' placeholder='tel' />
            <br />
            <label>Input Mail</label>
            <input type='email' name='input' placeholder='email' />
            <br />
            <label>Input Mail Disabled</label>
            <input type='email' name='input' value='tel Disabled' disabled />
            <br />
            <label>Input Mail Required</label>
            <input type='email' name='input' value='tel Required' required />
            <br />
            <label>Input Mail Hidden</label>
            <input type='email' name='input' value='Email hidden' hidden />
            <br />
            <label>Input Password</label>
            <input type='password' name='input' />
            <br />
            <label>Checkbox Default</label>
            <input type='checkbox' name='checkbox' value='Value' />
            <br />
            <label>Checkbox Checked</label>
            <input type='checkbox' name='checkbox' value='Value' checked />
            <br />
            <label>Checkbox Disabled</label>
            <input type='checkbox' name='checkbox' value='Value' disabled />
            <br />
            <label>Checkbox Required</label>
            <input type='checkbox' name='checkbox' value='Value' required />
            <br />
            <label>Radio Default</label>
            <input type='radio' name='radio' value='Value' />
            <br />
            <label>Radio Checked</label>
            <input type='radio' name='radio' value='Value' checked />
            <br />
            <label>Radio Disabled</label>
            <input type='radio' name='radio' value='Value' disabled />
            <br />
            <label>Radio Required</label>
            <input type='radio' name='radio' value='Value' required />

            <br />
            <label>Select</label>
            <select id='' name='select'>
                <option>Bitte auswählen</option>
                <option value='Value A'>Value A</option>
                <option value='Value B'>Value B</option>
                <option value='Value C'>Value C</option>
                <option value='Value D'>Value D</option>
            </select>

            <br />
            <label>Select Multiple</label>
            <select id='' name='select' multiple>
                <option>Bitte auswählen</option>
                <option value='Value A'>Value A</option>
                <option value='Value B'>Value B</option>
                <option value='Value C'>Value C</option>
                <option value='Value D'>Value D</option>
            </select>

            <br />
            <label>Textarea</label>
            <textarea />

            <label>Label</label>

            <br />
            <label>Fieldset</label>
            <fieldset>
                <legend>Legend</legend>
                <input type='text' />
            </fieldset>

        </div>)
    }
}

AtomsForms.propTypes = {
}

AtomsForms.defaultProps = {
}

export default ComponentInjector.return('AtomsForms', AtomsForms)
