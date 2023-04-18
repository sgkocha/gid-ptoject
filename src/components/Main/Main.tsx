import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Design from '../../pages/Design'
import Renovation from '../../pages/Renovation'
import Projects from '../../pages/Projects'
import Project from '../../pages/Project'
import Services from '../../pages/Services'
import Contacts from '../../pages/Contacts'
import OurTeam from '../../pages/OurTeam'
import OurBlog from '../../pages/OurBlog'

const Main = () => {
  return (
    <Routes>
        <Route
            path='/'
            element={<Home/>}
        />
        <Route
          path='design'
          element={<Design/>}
        />
        <Route
         path='renovation'
         element={<Renovation/>}
        />
        <Route
          path='projects'
          element={<Projects/>}
        />
        <Route
          path = 'project'
          element={<Project/>}
        />
        <Route
          path='services'
          element={<Services/>}
        /> 
        <Route
          path='contacts'
          element={<Contacts/>}
        /> 
        <Route
          path='team'
          element={<OurTeam/>}
        />
        <Route
          path='blog'
          element={<OurBlog/>}
        />  
    </Routes>
  )
}

export default Main