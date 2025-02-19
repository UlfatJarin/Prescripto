import React from 'react'
import Banner from '../components/Banner'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner2 from '../components/Banner2'

const Home = () => {
  return (
    <div>
      <Banner/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner2/>
    </div>
  )
}

export default Home