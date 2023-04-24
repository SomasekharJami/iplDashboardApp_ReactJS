// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isGetting: true, matchData: {}}

  componentDidMount() {
    this.gettingMatch()
  }

  gettingMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formatData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({matchData: formatData, isGetting: false})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isGetting, matchData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchData
    const className = `team-matches-container ${this.getRouteClassName()}`
    return (
      <div className={className}>
        {isGetting ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="innerCon">
            <img src={teamBannerUrl} alt="team banner" className="teamImage" />
            <div className="firCon">
              <h1 className="subH">Latest Matches</h1>
              <LatestMatch lMd={latestMatchDetails} />
            </div>
            <div className="secCon">
              {recentMatches.map(eachList => (
                <MatchCard key={eachList.id} details={eachList} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
