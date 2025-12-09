import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function RootLayout() {
  return (
    <div className="relative min-h-screen bg-background text-white">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,122,31,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(247,37,133,0.14),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.2),transparent_35%)]" />
      </div>

      <Navbar />
      <ScrollToTop />

      <div className="relative pt-28">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
