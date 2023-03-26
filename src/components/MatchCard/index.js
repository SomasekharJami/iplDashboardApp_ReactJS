// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props

  const newData = {
    result: details.result,
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    matchStatus: details.match_status,
  }

  const {result, competingTeam, competingTeamLogo, matchStatus} = newData

  const statusClass = matchStatus === 'Won' ? 'wonClass' : 'lostClass'

  return (
    <div className="listCon">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="oppLogo"
      />
      <p className="listH">{competingTeam}</p>
      <p className="listP">{result}</p>
      <p className={`listP ${statusClass}`}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
