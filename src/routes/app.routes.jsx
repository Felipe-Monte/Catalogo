import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { AddCard } from '../pages/AddCard'

export function AppRoutes(){
  return(
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/details/:code' element={<Details />} />
       <Route path='/add' element={<AddCard />} />
    </Routes>
  )
}