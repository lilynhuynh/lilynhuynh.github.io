import '../styles/components/SpeechBubble.css'

export default function SpeechBubble({ children, position = 'home' }) {
  return (
    <div className={`speech speech-${position}`} id={position}>
      <p>{children}</p>
    </div>
  )
}
