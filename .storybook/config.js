import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';
import StoryRouter from 'storybook-react-router'
import { create } from '@storybook/theming'
import { withFrontasticRedux } from 'frontastic-catwalk/src/js/helper/storybook/redux'

import Container from './Container'
import '../src/scss/app.scss'

import en from 'catwalk/src/js/app/i18n/en'
import de from 'catwalk/src/js/app/i18n/de'

addParameters({
    viewport: {
        viewports: {
            full: {
                name: 'Full',
                styles: {
                    width: '100%',
                    height: '100%',
                },
            },
            desk: {
                name: 'Desk',
                styles: {
                    width: '1280px',
                    height: '100%',
                },
            },
            LapSmall: {
                name: 'Lap Small',
                styles: {
                    width: '769px',
                    height: '100%',
                },
            },
            LapBig: {
                name: 'Lap Big',
                styles: {
                    width: '1280px',
                    height: '100%',
                },
            },
            handSmall: {
                name: 'Hand Small',
                styles: {
                    width: '360px',
                    height: '800px',
                    // height: '100%',
                },
            },
            handBig: {
                name: 'Hand Big',
                styles: {
                    width: '768px',
                    height: '100%',
                },
            },
        },
        defaultViewport: 'handSmall',
    },
})

addParameters({
    options: {
       storySort: (a, b) =>
        a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, {
           numeric: true
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
addLocaleData(enLocaleData);
addLocaleData(deLocaleData);

const messages = { en, de };
const getMessages = (locale) => messages[locale];

setIntlConfig({
    locales: ['en', 'de'],
    defaultLocale: 'en',
    getMessages,
});

addDecorator(withIntl);
// END OF SETTING UP TRANSLATIONS

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
