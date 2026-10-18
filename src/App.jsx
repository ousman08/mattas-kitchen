import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './components/Home'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import './App.css'

export default function App() {
    const location = useLocation()

    // Al cambiar de página, subir al principio o a la sección del hash (#menu, etc.)
    useEffect(() => {
        if (location.hash) {
            document.getElementById(location.hash.slice(1))?.scrollIntoView()
        } else {
            window.scrollTo(0, 0)
        }
    }, [location.pathname, location.hash])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        </Routes>
    )
}
