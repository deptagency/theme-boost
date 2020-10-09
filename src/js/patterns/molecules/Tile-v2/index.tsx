import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import Reference from '@frontastic/catwalk/src/js/component/reference'
import useBackgroundImageUrl from '@frontastic/catwalk/src/js/helper/hooks/useBackgroundImageUrl'
import MoleculesHero from '@frontastic/catwalk/src/js/patterns/molecules/heros/hero'
import MediaImage from '@frontastic/catwalk/src/js/mediaImage'

import FullPageWidthWrapper from '../Layout/FullPageWidthWrapper'

import useComponentSize from '@frontastic/catwalk/src/js/helper/hooks/useIsomorphicComponentSize'
import MediaApi from '@frontastic/common/src/js/mediaApi'
import Cloudinary from '@frontastic/common/src/js/mediaApi/cloudinary'

const OrderingEnum = {
    CopyCtaImg: 'copy-cta-img',
    CopyImgCta: 'copy-img-cta',
    ImgCopyCta: 'img-copy-cta',
}

type FgPos = 'left-top' | 'top' | 'right-top' | 'left' | 'center' | 'right' | 'left-bottom' | 'bottom' | 'right-bottom'
type FgSize = '50%' | '60%' | '70%' | '80%' | '90%' | '100%'
type Aspect = '16/9' | '4/3' | '12/9'
type FontSize = 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
type Align = 'left' | 'center' | 'right'
type Theme = 'light' | 'dark'
type CtaColor = 'primary' | 'secondary' | 'neutral'
type Ordering = typeof OrderingEnum[keyof typeof OrderingEnum]

export interface TileTasticData {
    bgColor?: string
    bgImage?: any // TODO
    contentPos: FgPos
    fgImage?: any // TODO
    fgAlign: Align
    fgSize: FgSize
    fgIsFullWidth: boolean
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
    aspect: Aspect
    theme: Theme
    ordering: Ordering
    isFullWidth: boolean
}

const Tile = ({
    aspect,
    bgColor,
    bgImage,
    contentPos,
    fgImage,
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
    ordering,
    fgIsFullWidth,
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
    const fontSizeCss: { [key in FontSize]: string } = {
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-lg md:text-xl',
        '2xl': 'text-lg md:text-2xl',
        '3xl': 'text-xl md:text-3xl',
        '4xl': 'text-2xl md:text-4xl',
        '5xl': 'text-2xl md:text-5xl',
    }

    // Just a little DRY. The copy doesn't
    // technically need that, but this way
    // we have all the elements in one place
    const renderImage = () => <FgImage image={fgImage} />
    // only render Cta when the whole tile is not clickable. Nested a tags are a big No-No!
    const renderCta = () =>
        !isClickable && <Cta label={ctaLabel} reference={reference} color={ctaColor} isButton={ctaIsButton} />
    const renderCopy = () => (
        <>
            {headline && (
                <h2
                    className={`${themeToTextColor[theme]} ${fontSizeCss[headlineSize]} ${
                        isHeadlineBold ? 'font-bold' : ''
                    }`}
                >
                    {headline}
                </h2>
            )}
            {subhead && (
                <h3
                    className={`${themeToTextColor[theme]} ${fontSizeCss[subheadSize]} ${
                        isSubheadBold ? 'font-bold' : ''
                    } leading-tight`}
                >
                    {subhead}
                </h3>
            )}
        </>
    )

    // offloaded here because of conditional rendering
    const content = (
        <DivOrReference
            className='relative block'
            style={{ backgroundColor: bgColor }}
            reference={reference || undefined}
        >
            {/*
             * Background / Aspect Ratio
             */}
            <div className={`relative pb-${aspect}`}>
                {bgImage && (
                    <MediaImage className='absolute h-full w-full object-cover object-center' media={bgImage} />
                )}
            </div>

            {/*
             * Main Content / Foreground
             */}
            <div className={`absolute flex top-0 left-0 ${fgPosCss[contentPos]} h-full w-full overflow-hidden`}>
                <div
                    className={`inline-block ${fgIsFullWidth ? 'w-full' : ''} p-3 md:p-8 flex flex-col ${
                        fgAlignToFlex[fgAlign]
                    } text-${fgAlign}`}
                    style={{ height: fgSize }}
                >
                    {/* rendering the 3 elements copy, img, cta based on the set order */}
                    {ordering === OrderingEnum.ImgCopyCta && renderImage()}
                    {renderCopy()}
                    {ordering === OrderingEnum.CopyCtaImg && renderCta()}
                    {ordering !== OrderingEnum.ImgCopyCta && renderImage()}
                    {ordering !== OrderingEnum.CopyCtaImg && renderCta()}
                </div>
            </div>
        </DivOrReference>
    )

    if (isFullWidth) {
        return <FullPageWidthWrapper>{content}</FullPageWidthWrapper>
    }

    return content
}

function Cta({ label, reference, color, isButton = false }) {
    return (
        <>
            {label && reference && (
                <Reference
                    reference={reference}
                    className={`text-white ${
                        isButton ? 'bg' : 'text'
                    }-${color}-600 text-base font-semibold py-3 px-4 mt-6 rounded`}
                >
                    {label}
                </Reference>
            )}
        </>
    )
}

function FgImage({ image }) {
    const projectConf = useSelector((state) => {
        return state.app.context.project.configuration
    })
    const fgImgRef = useRef(null)
    const mediaApi = new Cloudinary(projectConf.media)
    const fgImgUrl = (fgImage, fgImgRef) => {
        const fgImgSize = useComponentSize(fgImgRef)
        return mediaApi.getImageUrl(fgImage.media, null, fgImgSize.height, {})
    }
    return (
        <>
            {image && image.media && (
                <figure
                    className='flex-1 h-32 w-full bg-no-repeat bg-contain bg-center mt-6'
                    ref={fgImgRef}
                    style={{
                        backgroundImage: `url(${fgImgUrl(image, fgImgRef)})`,
                    }}
                ></figure>
            )}
        </>
    )
}

export default Tile
