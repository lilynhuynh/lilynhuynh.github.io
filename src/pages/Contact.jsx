import Ground from '../components/Ground'
import CharacterDisplay from '../components/CharacterDisplay'
import SpeechBubble from '../components/SpeechBubble'
import Navigation from '../components/Navigation'
import '../styles/pages/Contact.css'

export default function Contact() {
  return (
    <div className="page contact-page">
      <Ground />
      <SpeechBubble position="contact">
        Thanks for visiting!
        <br />
        Contact & Socials:
      </SpeechBubble>
      <CharacterDisplay />
      <Navigation left={{ label: 'Experiences', path: '/experiences' }} />

      <div className="socials_container">
        <div className="socials_row">
          <a href="https://www.linkedin.com/in/lily-nhuynh/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/lilynhuynh" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  )
}
