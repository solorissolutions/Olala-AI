import { Navigate, Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import StudioPage from './pages/StudioPage'
import PortfolioPage from './pages/PortfolioPage'
import LearnPage from './pages/LearnPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/solution" element={<SolutionsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App

