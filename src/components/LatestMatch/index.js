// Write your code here
import './index.css'

const LatestMatch = props => {
  const {lMd} = props

  const newDet = {
    umpires: lMd.umpires,
    result: lMd.result,
    manOfTheMatch: lMd.man_of_the_match,
    id: lMd.id,
    date: lMd.date,
    venue: lMd.venue,
    competingTeam: lMd.competing_team,
    competingTeamLogo: lMd.competing_team_logo,
    firstInnings: lMd.first_innings,
    secondInnings: lMd.second_innings,
    matchStatus: lMd.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = newDet

  return (
    <div className="cardCon">
      <div className="imgCon">
        <div className="oneCon">
          <p className="latestH">{competingTeam}</p>
          <p className="dateH">{date}</p>
          <p className="latestP">{venue}</p>
          <p className="latestP">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="teamLogo"
        />
      </div>
      <div className="twoCon">
        <p className="latestP">First Innings</p>
        <p className="inningsP">{firstInnings}</p>
        <p className="latestP">Second Innings</p>
        <p className="inningsP">{secondInnings}</p>
        <p className="latestP">Man Of The Match</p>
        <p className="inningsP">{manOfTheMatch}</p>
        <p className="latestP">Umpires</p>
        <p className="inningsP">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
