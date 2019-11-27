import React, { Component } from 'react'
import app from 'frontastic-catwalk/src/js/app/app'

import OrganismsFormRegister from '../organisms/form/form-register'
import OrganismsPageHeader from '../organisms/base/header-page'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesRegister extends Component {
    render () {
        return (
            <div className='o-television o-television__display o-container-small'>
                <OrganismsPageHeader
                    title='Benutzerkonto erstellen'
                    handleClick={() => { app.getRouter().history.replace('/') }}
                />
                <OrganismsFormRegister />
            </div>
        )
    }
}

TemplatesRegister.propTypes = {
}

TemplatesRegister.defaultProps = {
}

export default ComponentInjector.return('TemplatesRegister', TemplatesRegister)
