import React from 'react'
import Banner from '../../Components/Banner/Banner'
import HService from '../../Components/HService/HService'
import HLanguages from '../../Components/HLanguages/HLanguages'
import HClients from '../../Components/HClients/HClients'
import ChooseUs from '../../Components/ChooseUs/ChooseUs'
import Needs from '../../Components/Needs/Needs'
import Wave from '../../Components/Wave/Wave'
import PresClients from '../../Components/PresClients/PresClients'

const Home = () => {
  return (
    <div className='Home'>
      <Banner/>
      <ChooseUs/>
      <HService/>
      {/* <HLanguages/> */}
      <Needs/>
      <PresClients/>
      <HClients/>
      <Wave/>
    </div>
  )
}

export default Home
