import { Routes, Route } from 'react-router-dom'
// pages
import Layout from './components/Layout'
// tools
import Summarizearticle from './pages/Summarizearticle'
import Texttweaker from './pages/Texttweaker'
import Bloggenerator from './pages/Bloggenerator'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
       <Route index element={<Summarizearticle />} />
       <Route path='text-tweaker' element={<Texttweaker />} />
       <Route path='blog-generator' element={<Bloggenerator />} />
      </Route>
    </Routes>
  )
}

export default App