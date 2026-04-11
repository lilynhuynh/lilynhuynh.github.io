import Ground from '../components/Ground'
import CharacterDisplay from '../components/CharacterDisplay'
import SpeechBubble from '../components/SpeechBubble'
import Navigation from '../components/Navigation'
import '../styles/pages/Home.css'

export default function Home() {
  return (
    <div className="page home-page">
      <Ground />
      <SpeechBubble position="home">Howdy, my name is Lily!</SpeechBubble>
      <CharacterDisplay />
      <Navigation right={{ label: 'About Me!', path: '/about' }} />
    </div>
  )
}
