import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard eachItem={eachItem} key={eachItem.id} />
    }

    return <ProjectTimelineCard eachItem={eachItem} key={eachItem.id} />
  }
  return (
    <div className="timeline-view-bcg-container">
      <h1> MY JOURNEY OF CCBP 4.0</h1>

      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
