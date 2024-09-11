import React from 'react'
import MainCarousel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCersol from '../../components/HomeSectionCarosel/HomeSectionCersol'
import { mens_kurta } from '../../../Data/mens.kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div className='space-y-10 py-26 flex flex-col justify-center px-5 lg:px-10'>  
            <HomeSectionCersol data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCersol data={mens_kurta} sectionName={"Men's Shoes"}/>
            <HomeSectionCersol data={mens_kurta} sectionName={"Men's Shirt"}/>
            <HomeSectionCersol data={mens_kurta} sectionName={"Women's Saree"}/>
            <HomeSectionCersol data={mens_kurta} sectionName={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage