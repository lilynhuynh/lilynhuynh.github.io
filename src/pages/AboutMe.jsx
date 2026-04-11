import Ground from '../components/Ground'
import CharacterDisplay from '../components/CharacterDisplay'
import SpeechBubble from '../components/SpeechBubble'
import Navigation from '../components/Navigation'
import '../styles/pages/AboutMe.css'

export default function AboutMe() {
  return (
    <div className="page about-page">
      <Ground />
      <SpeechBubble position="about">
        I'm a Computer Science Major interested in Front-End Development! Check out what I've been working on!
      </SpeechBubble>
      <CharacterDisplay />
      <Navigation
        left={{ label: 'Hi Again!', path: '/' }}
        right={{ label: 'Experiences', path: '/experiences' }}
      />
    </div>
  )
}
