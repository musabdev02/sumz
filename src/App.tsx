import { Routes, Route } from 'react-router-dom'
// pages
import Layout from './components/Layout'
import Summarizearticle from './pages/Summarizearticle'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
       <Route index element={<Summarizearticle />} />
      </Route>
    </Routes>
  )
}

export default App