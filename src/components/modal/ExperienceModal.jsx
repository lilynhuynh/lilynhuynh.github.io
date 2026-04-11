import '../../styles/components/ExperienceModal.css'

export default function ExperienceModal({ experience, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className={`modal ${experience.id}_modal`} onClick={onClose}>
      <div
        className={`modal_content_wrapper ${experience.id}_modal_content`}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal_content">
          {experience.link ? (
            <a href={experience.link} className="experience_link" target="_blank" rel="noopener noreferrer">
              <h3>{experience.title}</h3>
            </a>
          ) : (
            <h3>{experience.title}</h3>
          )}
          <p className="role">{experience.role}</p>
          <p className="duration">{experience.duration}</p>
          <br />
          <div className="modal_row">
            <div className="column skills_column">
              <p className="column_title">SKILLS</p>
              <ul>
                {experience.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="column achievements_column">
              <ul>
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
