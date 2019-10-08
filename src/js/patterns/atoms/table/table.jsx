import React, { Component } from 'react'

import ComponentInjector from '../../../app/injector'

class AtomsTable extends Component {
    render () {
        return (<div>
            <table>
                <thead>
                    <tr>
                        <th>Head</th>
                        <th>Head</th>
                        <th>Head</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cell Item</td>
                        <td>Cell Item</td>
                        <td>Cell Item</td>
                    </tr>
                </tbody>
            </table>
        </div>)
    }
}

AtomsTable.propTypes = {
}

AtomsTable.defaultProps = {
}

export default ComponentInjector.return('AtomsTable', AtomsTable)
