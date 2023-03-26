import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamList: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const filterTeam = teams.map(item => ({
      name: item.name,
      id: item.id,
      imgUrl: item.team_image_url,
    }))

    this.setState({teamList: filterTeam, isLoading: false})
  }

  render() {
    const {isLoading, teamList} = this.state
    console.log(teamList)
    return (
      <div className="mainCon">
        <div className="logoCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logoImg"
          />
          <h1 className="logoH">IPL Dashboard</h1>
        </div>
        <div className="secondCon">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamList.map(eachItem => (
              <TeamCard key={eachItem.id} itemDetails={eachItem} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
