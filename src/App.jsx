import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ImplantesPage from './pages/ImplantesPage'
import ClareamentoPage from './pages/ClareamentoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/implantes" element={<ImplantesPage />} />
        <Route path="/clareamento" element={<ClareamentoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
