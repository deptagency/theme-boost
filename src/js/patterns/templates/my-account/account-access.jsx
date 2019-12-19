import React, { Component } from 'react'
import Grow from 'frontastic-catwalk/src/js/component/grow'
import TemplatesRegister from '../../../patterns/templates/register'
import TemplatesLogin from '../../../patterns/templates/login'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'
import Button from '../../../patterns/atoms/buttons/button'
import { FormattedMessage } from 'react-intl'

class AccountAccessForms extends Component {
    constructor (props) {
        super(props)

        this.state = {
            form: 'login',
        }
    }

    render () {
        return (
            <div className='o-layout'>
                <Grow in={(this.state.form === 'login')}>
                    <TemplatesLogin />
                    <section className='o-television o-television__display o-container-small o-distance-m'>
                        <h2 className='c-title-level-4 u-text-center'>
                            <FormattedMessage id='account.newHere' />
                        </h2>
                        <Button
                            type='quiet'
                            size='boss'
                            className='o-distance-m'
                            onClick={() => {
                                this.setState({ form: 'register' })
                            }}
                        >
                            <FormattedMessage id='account.register.register' />
                        </Button>
                    </section>
                </Grow>
                <Grow in={(this.state.form === 'register')}>
                    <TemplatesRegister />
                    <section className='o-television o-television__display o-container-small o-distance-m'>
                        <h2 className='c-title-level-4 u-text-center'>
                            <FormattedMessage id='account.login.welcomeBack' />
                        </h2>
                        <Button
                            type='quiet'
                            size='boss'
                            className='c-button o-distance-m c-button--quiet c-button--boss'
                            onClick={() => {
                                this.setState({ form: 'login' })
                            }}
                        >
                            <FormattedMessage id='account.login.login' />
                        </Button>
                    </section>
                </Grow>
            </div>
        )
    }
}

AccountAccessForms.propTypes = {
}

AccountAccessForms.defaultProps = {
}

export default ComponentInjector.return('AccountAccessForms', AccountAccessForms)
