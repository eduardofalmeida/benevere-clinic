import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ImplantesPage from './pages/ImplantesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/implantes" element={<ImplantesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
