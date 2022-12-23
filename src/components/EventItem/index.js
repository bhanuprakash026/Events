// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    setActiveEventId(id)
  }
  console.log(isActive)

  return (
    <li className="list-item-container">
      <button type="button" onClick={onClickEvent} className="btn">
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
