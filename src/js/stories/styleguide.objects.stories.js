import React from 'react'

export default {
    title: '5.Styleguide|Objects',
}

export const headUp = () => {
    return (
        <div>
            <div className='o-head-up' style={{ minHeight: '200px', border: '2px solid' }}>
                <p className='o-head-up__item o-head-up__item--bottom-left'>Bottom Left</p>
                <p className='o-head-up__item o-head-up__item--bottom-right'>Bottom Right</p>
                <p className='o-head-up__item o-head-up__item--middle'>Middle</p>
                <p className='o-head-up__item o-head-up__item--top-left'>Top Left</p>
                <p className='o-head-up__item o-head-up__item--top-right'>Top Right</p>
            </div>
        </div>
    )
}

headUp.story = {
    name: 'Head Up',
}
