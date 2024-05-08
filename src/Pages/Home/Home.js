import React from 'react'
import Banner from '../../Components/Banner/Banner'
import HAbout from '../../Components/HAbout/HAbout'
import HService from '../../Components/HService/HService'
import HLanguages from '../../Components/HLanguages/HLanguages'

const Home = () => {
  return (
    <div className='Home'>
      <Banner/>
      <HAbout/>
      <HService/>
      <HLanguages/>
    </div>
  )
}

export default Home
