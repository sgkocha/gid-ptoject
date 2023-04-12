import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Design from '../../pages/Design'
import Renovation from '../../pages/Renovation'

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
    </Routes>
  )
}

export default Main