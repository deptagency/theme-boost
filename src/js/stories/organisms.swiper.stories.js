import React from 'react'

import OrganismsImageColorSwiper from 'js/patterns/organisms/swiper/image-color-swiper'
import OrganismsProductSwiper from 'js/patterns/organisms/swiper/product-swiper'
import OrganismsColorSwiper from 'js/patterns/organisms/swiper/color-swiper'
import OrganismsSizeSwiper from 'js/patterns/organisms/swiper/size-swiper'
import OrganismsCategorySwiper from 'js/patterns/organisms/swiper/category-swiper'

export default {
    title: '3.Organisms|Swiper',
}

export const imageColorSwiper = () => {
    return (
        <OrganismsImageColorSwiper />
    )
}

imageColorSwiper.story = {
    name: 'Image Color Swiper',
}

export const productSwiper = () => {
    return (
        <OrganismsProductSwiper />
    )
}

productSwiper.story = {
    name: 'Product Swiper',
}

export const colorSwiper = () => {
    return (
        <OrganismsColorSwiper />
    )
}

colorSwiper.story = {
    name: 'Color Swiper',
}

export const sizeSwiper = () => {
    return (
        <OrganismsSizeSwiper />
    )
}

sizeSwiper.story = {
    name: 'Size Swiper',
}

export const categorySwiper = () => {
    return (
        <OrganismsCategorySwiper />
    )
}

categorySwiper.story = {
    name: 'Category Swiper',
}
