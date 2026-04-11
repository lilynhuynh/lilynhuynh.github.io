import '../styles/components/ExperienceCard.css'

export default function ExperienceCard({ experience, onClick }) {
  return (
    <button className="experience_card" onClick={onClick}>
      <div className="icon_container">
        <img src={experience.icon} alt={experience.title} />
        <figcaption>{experience.title}</figcaption>
      </div>
    </button>
  )
}
