import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props

  const {projectTitle, description, duration, imageUrl, projectUrl} = eachItem

  return (
    <div className="course-timeline-card">
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="title-section">
        <h1 className="project-title"> {projectTitle} </h1>
        <div className="duration-section">
          <AiFillCalendar />
          <p> {duration}</p>
        </div>
      </div>
      <p className="project-description"> {description}</p>
      <a href={projectUrl} className="project-link">
        {' '}
        Visit{' '}
      </a>
    </div>
  )
}

export default ProjectTimelineCard
