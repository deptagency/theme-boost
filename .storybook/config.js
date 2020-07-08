import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { setIntlConfig, withIntl } from 'storybook-addon-intl'
import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import deLocaleData from 'react-intl/locale-data/de'
import StoryRouter from 'storybook-react-router'
import { create } from '@storybook/theming'
import { withFrontasticRedux } from '@frontastic/catwalk/src/js/helper/storybook/redux'
import flatten from 'flat'

import Container from './Container'
import '../src/scss/app.scss'

//import en from '@frontastic/catwalk/src/js/app/i18n/en'
//import de from '@frontastic/catwalk/src/js/app/i18n/de'
import en from '../../../../catwalk/src/js/app/i18n/en'
import de from '../../../../catwalk/src/js/app/i18n/de'

addParameters({
    viewport: {
        viewports: {
            xi: {
                name: 'xi',
                styles: {
                    width: '1280px',
                    height: '100%',
                },
            },
            lg: {
                name: 'lg',
                styles: {
                    width: '1024px',
                    height: '100%',
                },
            },
            md: {
                name: 'md',
                styles: {
                    width: '768px',
                    height: '100%',
                },
            },
            sm: {
                name: 'sm',
                styles: {
                    width: '640px',
                    height: '100%',
                },
            },
            mobile: {
                name: 'mobile',
                styles: {
                    width: '320px',
                    height: '800px',
                },
            },
        },
        defaultViewport: 'mobile',
    },
})

addParameters({
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, {
                      numeric: true,
                  }),
        theme: create({
            base: 'light',
            brandTitle: 'Frontastic',
            brandUrl: 'https://frontastic.cloud',
            brandImage: 'https://www.frontastic.cloud/wp-content/uploads/2017/08/frontastic-logo-space-2-300x66.png',
        }),
        isFullscreen: false,
        panelPosition: 'right',
    },
})

addDecorator(StoryRouter())
addDecorator(withFrontasticRedux)
// When the Story is rendered as a React component, and not
// a function (which is the default) you can use react
// features inside stories, state or hooks for example.
addDecorator((Story) => (
    <Container>
        <Story />
    </Container>
))

// SETTING UP TRANSLATIONS
addLocaleData(enLocaleData)
addLocaleData(deLocaleData)

const messages = { en: flatten(en), de: flatten(de) }

const getMessages = (locale) => messages[locale]

setIntlConfig({
    locales: ['en', 'de'],
    defaultLocale: 'en',
    getMessages,
})

addDecorator(withIntl)
// END OF SETTING UP TRANSLATIONS

// automatically import all file  stories.js|stories.jsx
configure(require.context('../src', true, /stories\.(js|jsx|mdx)$/), module)
