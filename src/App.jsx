import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/about_me.html" element={<AboutMe />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences.html" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
