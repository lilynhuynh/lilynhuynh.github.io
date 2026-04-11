import { useState } from 'react'
import Ground from '../components/Ground'
import CharacterDisplay from '../components/CharacterDisplay'
import SpeechBubble from '../components/SpeechBubble'
import Navigation from '../components/Navigation'
import ExperienceCard from '../components/ExperienceCard'
import ExperienceModal from '../components/modal/ExperienceModal'
import { experiencesData } from '../data/experiences'
import '../styles/pages/Experiences.css'

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState(null)

  return (
    <div className="page experiences-page">
      <Ground />
      <SpeechBubble position="experience">
        Click to learn more about my experiences!
      </SpeechBubble>
      <CharacterDisplay />
      <Navigation
        left={{ label: 'About Me!', path: '/about' }}
        right={{ label: 'Contact', path: '/contact' }}
      />

      <div className="experiences_container">
        <div className="experiences_grid">
          {experiencesData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onClick={() => setSelectedExperience(experience)}
            />
          ))}
        </div>
      </div>

      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          isOpen={true}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  )
}
