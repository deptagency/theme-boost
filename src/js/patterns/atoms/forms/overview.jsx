import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Input from 'js/patterns/atoms/forms/input'
import Checkbox from 'js/patterns/atoms/forms/checkbox'
import Radiobutton from 'js/patterns/atoms/forms/radiobutton'
import Selectbox from 'js/patterns/atoms/forms/select'
import Textarea from 'js/patterns/atoms/forms/textarea'
import Fieldset from 'js/patterns/atoms/forms/fieldset'
import Label from 'js/patterns/atoms/forms/label'

class Overview extends Component {
    render () {
        return (<div>
            <label>Input Text Placeholder</label>
            <Input placeholder='Text' />
            <br />
            <label>Input Number</label>
            <Input type='number' placeholder='Number' />
            <br />
            <label>Input Date</label>
            <Input type='date' placeholder='Date' />
            <br />
            <label>Input Color</label>
            <Input type='color' placeholder='Color' />
            <br />
            <label>Input Range</label>
            <Input type='range' min={0} max={100} value={90} step={10} />
            <br />
            <label>Input Text</label>
            <Input type='text' value='Value' />
            <br />
            <label>Input Tel</label>
            <Input type='tel' placeholder='Tel' />
            <br />
            <label>Input Mail</label>
            <Input type='email' placeholder='Email' />
            <br />
            <label>Input Mail Disabled</label>
            <Input type='email' value='Email Disabled' disabled />
            <br />
            <label>Input Mail Required</label>
            <Input type='email' value='Email Required' required />
            <br />
            <label>Input Mail Hidden</label>
            <Input type='email' value='Email hidden' hidden />
            <br />
            <label>Input Password</label>
            <Input type='password' />
            <br />

            <label>Checkbox Default</label>
            <Checkbox value='VAL' />
            <br />
            <label>Checkbox Checked</label>
            <Checkbox value='VAL' checked />
            <br />
            <label>Checkbox Disabled</label>
            <Checkbox value='VAL' disabled />
            <br />
            <label>Checkbox Required</label>
            <Checkbox value='VAL' required />
            <br />

            <label>Radio Default</label>
            <Radiobutton value='val' />
            <br />
            <label>Radio Checked</label>
            <Radiobutton value='val' checked />
            <br />
            <label>Radio Disabled</label>
            <Radiobutton value='val' disabled />
            <br />
            <label>Radio Required</label>
            <Radiobutton value='val' required />

            <br />
            <label>Selectbox</label>
            <Selectbox name='select_1' options={[
                    { key: '', value: '-- Bitte wählen --' },
                    { key: 'val_1', value: 'Value 1' },
                    { key: 'val_2', value: 'Value 2' },
                    { key: 'val_3', value: 'Value 3' },
                    { key: 'val_4', value: 'Value 4' },
                ]} />

            <br />
            <label>Select Multiple</label>
            <Selectbox name='select_2' multiple options={[
                    { key: 'val_1', value: 'Value 1' },
                    { key: 'val_2', value: 'Value 2' },
                    { key: 'val_3', value: 'Value 3' },
                    { key: 'val_4', value: 'Value 4' },
                ]} />

            <br />
            <label>Select only key</label>
            <Selectbox name='select_3' options={['1', '2', '3']} />

            <br />
            <label>Textarea</label>
            <Textarea name='myText' />

            <br />
            <Label value='Test-Label' />

            <br />
            <label>Fieldset</label>
            <Fieldset legend='Fieldset-Legend'>
                <Input placeholder='Vorname' />
                <Input placeholder='Nachname' />
            </Fieldset>

        </div>)
    }
}

Overview.propTypes = {
}

Overview.defaultProps = {
}

export default ComponentInjector.return('Overview', Overview)
