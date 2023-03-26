// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {itemDetails} = props
  const {id, name, imgUrl} = itemDetails

  return (
    <Link to={`/team-matches/${id}`} className="TeamLink">
      <div className="TeamCon">
        <img src={imgUrl} alt={name} className="teamImg" />
        <div className="pCon">
          <p className="teamCardH">{name}</p>
        </div>
      </div>
    </Link>
  )
}
export default TeamCard
