import {AiFillClockCircle} from 'react-icons/ai'

import Tags from '../Tags'

import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, tagsList, duration} = eachItem
  console.log(tagsList)
  const renderTags = () => (
    <div className="tags-section">
      {tagsList.map(eachTag => (
        <Tags key={eachTag.id} eachTag={eachTag} />
      ))}
    </div>
  )

  return (
    <div className="course-timeline-card">
      <div className="title-section">
        <h1 className="course-title"> {courseTitle} </h1>
        <div className="duration-section">
          <AiFillClockCircle />
          <p> {duration}</p>
        </div>
      </div>
      <p className="course-description"> {description}</p>
      {renderTags()}
    </div>
  )
}

export default CourseTimelineCard
