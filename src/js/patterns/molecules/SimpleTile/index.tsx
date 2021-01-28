import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import Reference from '@frontastic/catwalk/src/js/component/reference'
import useBackgroundImageUrl from '@frontastic/catwalk/src/js/helper/hooks/useBackgroundImageUrl'
import MediaImage from '@frontastic/catwalk/src/js/mediaImage'
import { Media } from '@frontastic/catwalk/src/js/types/frontend/media'

import FullPageWidthWrapper from '../Layout/FullPageWidthWrapper'

import Cta from './components/CallToAction'
// types

type FgPos = 'left-top' | 'top' | 'right-top' | 'left' | 'center' | 'right' | 'left-bottom' | 'bottom' | 'right-bottom'
type FgSize = '50%' | '60%' | '70%' | '80%' | '90%' | '100%'
type FontSize = 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
type Align = 'left' | 'center' | 'right'
type Theme = 'light' | 'dark'
export type CtaColor = 'primary' | 'secondary' | 'neutral'
type AspectStyle = {} | { paddingBottom: string }

export interface TileTasticData {
    bgColor?: string
    bgImage?: { media: Media }
    contentPos: FgPos
    fgAlign: Align
    fgSize: FgSize
    headline: string
    isHeadlineBold: boolean
    headlineSize: FontSize
    subhead: string
    isSubheadBold: boolean
    subheadSize: FontSize
    ctaLabel: string
    ctaColor: CtaColor
    ctaIsButton: boolean
    reference: any
    isClickable: boolean
    theme: Theme
    isFullWidth: boolean
}

const Tile = ({
    bgColor,
    bgImage,
    contentPos,
    fgAlign,
    fgSize,
    headline,
    isHeadlineBold,
    headlineSize,
    subhead,
    isSubheadBold,
    subheadSize,
    ctaLabel,
    ctaColor,
    ctaIsButton,
    reference,
    isClickable,
    theme,
    isFullWidth,
}: TileTasticData) => {
    const DivOrReference = isClickable && reference ? Reference : 'div'

    // this could've gone easily as values into the schema,
    // but I prefer the schema not having knowledge of
    // which centering mechanism (flex, grid, abs) we use here
    const fgPosCss: { [key in FgPos]: string } = {
        'left-top': 'justify-start items-start',
        top: 'justify-center items-start',
        'right-top': 'justify-end items-start',
        left: 'justify-start items-center',
        center: 'justify-center items-center h-full w-full',
        right: 'justify-end items-center',
        'left-bottom': 'justify-start items-end',
        bottom: 'justify-center items-end',
        'right-bottom': 'justify-end items-end',
    }
    const fgAlignToFlex: { [key in Align]: string } = {
        left: 'items-start',
        center: 'items-center',
        right: 'items-end',
    }
    const themeToTextColor: { [key in Theme]: string } = {
        light: 'text-black',
        dark: 'text-white',
    }
    const fontSizeClass: { [key in FontSize]: string } = {
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-lg md:text-xl',
        '2xl': 'text-lg md:text-2xl',
        '3xl': 'text-xl md:text-3xl',
        '4xl': 'text-2xl md:text-4xl',
        '5xl': 'text-2xl md:text-5xl',
    }

    // this adds the aspect ration based on the original image aspect ratio
    // It is only used if the tastic aspect ratio is set to "original" and
    // if there is a background image (bgImage) present
    const calculateAspectStyle = (img: { media: Media } | undefined): AspectStyle => {
        if (img) {
            return { paddingBottom: `${(img.media.height / img.media.width) * 100}%` }
        }
        return {}
    }

    // Just a little DRY. The copy doesn't
    // technically need it's own render function,
    // but this way we have all the elements in one place

    // only render Cta when the whole tile is not clickable. Nested a tags are a big No-No!
    const renderCta = () =>
        !isClickable && <Cta label={ctaLabel} reference={reference} color={ctaColor} isButton={ctaIsButton} />
    const renderCopy = () => (
        <>
            {headline && (
                <h2
                    className={`${themeToTextColor[theme]} ${fontSizeClass[headlineSize]} ${
                        isHeadlineBold ? 'font-bold' : ''
                    }`}
                >
                    {headline}
                </h2>
            )}
            {subhead && (
                <h3
                    className={`${themeToTextColor[theme]} ${fontSizeClass[subheadSize]} ${
                        isSubheadBold ? 'font-bold' : ''
                    } leading-tight`}
                >
                    {subhead}
                </h3>
            )}
        </>
    )

    // main render offloaded to a function because of conditional rendering (fullwidth yes/no)
    const content = (
        <DivOrReference
            className='relative block'
            style={{ backgroundColor: bgColor }}
            reference={reference || undefined}
        >
            {/*
             * Background / Aspect Ratio
             */}
            <div className={`relative`} style={{ ...calculateAspectStyle(bgImage) }}>
                {bgImage && (
                    <MediaImage className='absolute h-full w-full object-cover object-center' media={bgImage} />
                )}
            </div>

            {/*
             * Main Content / Foreground
             */}
            <div className={`absolute flex top-0 left-0 ${fgPosCss[contentPos]} h-full w-full overflow-hidden`}>
                <div
                    className={`inline-block p-3 md:p-8 flex flex-col ${fgAlignToFlex[fgAlign]} text-${fgAlign}`}
                    style={{ height: fgSize }}
                >
                    {renderCopy()}
                    {renderCta()}
                </div>
            </div>
        </DivOrReference>
    )

    if (isFullWidth) {
        return <FullPageWidthWrapper>{content}</FullPageWidthWrapper>
    }

    return content
}

export default Tile
