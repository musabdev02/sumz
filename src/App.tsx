import { Routes, Route } from 'react-router-dom'
// pages
import Layout from './components/Layout'
// tools
import Summarizearticle from './pages/Summarizearticle'
import Texttweaker from './pages/Texttweaker'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
       <Route index element={<Summarizearticle />} />
       <Route path='text-tweaker' element={<Texttweaker />} />
      </Route>
    </Routes>
  )
}

export default App