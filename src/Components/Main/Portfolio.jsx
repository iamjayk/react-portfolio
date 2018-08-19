import React, { Component } from 'react';
import ModalImage from 'react-modal-image'

import h2h1 from './imgs/portfolio/h2h1.png';
import h2h2 from './imgs/portfolio/h2h2.png';

import lineups from './imgs/portfolio/lineups.png';

import playerProfile1 from './imgs/portfolio/playerProfile1.png';
import playerProfile2 from './imgs/portfolio/playerProfile2.png';
import playerProfile3 from './imgs/portfolio/playerProfile3.png';
import playerProfile4 from './imgs/portfolio/playerProfile4.png';

import toplist_carries from './imgs/portfolio/toplist_carries.png';
import toplist_carries2 from './imgs/portfolio/toplist_carries_2.png';
import toplist_tackles from './imgs/portfolio/toplist_tackles.png';
import toplist_tackles2 from './imgs/portfolio/toplist_tackles2.png';
import toplist_tackles3 from './imgs/portfolio/toplist_tackles3.png';

import ultrasonicDashboard from './imgs/portfolio/ultrasonic_dashboard.jpg';

import ehub1 from './imgs/portfolio/ehub1.png';
import ehub2 from './imgs/portfolio/ehub2.png';
import ehub3 from './imgs/portfolio/ehub3.png';
import ehub4 from './imgs/portfolio/ehub4.png';
import ehub5 from './imgs/portfolio/ehub5.png';

import droneDashboard from './imgs/portfolio/drone_dashboard1.png';

import pcow1 from './imgs/portfolio/pcow1.png';
import pcow2 from './imgs/portfolio/pcow2.png';
import pcow3 from './imgs/portfolio/pcow3.png';
import pcow4 from './imgs/portfolio/pcow4.png';


export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <h3 className="portfolio-heading">My recent work: </h3>
          <PlayerStats />
      </div>
    )
  }
}

const PlayerStats = () => {
  return(
    <div className="portfolio-player-stats container"  style={{ paddingBottom: 100}}>
    <h2>React Single Page Applications: </h2> <br/>
      <ModalImage small={h2h1} large={h2h1} alt="player stats!" /><br/>
      <ModalImage small={h2h2} large={h2h2} alt="player stats!" /><br/>
      <ModalImage small={lineups} large={lineups} alt="player stats!" /><br/>
      <ModalImage small={playerProfile1} large={playerProfile1} alt="player stats!" /><br/>
      <ModalImage small={playerProfile2} large={playerProfile2} alt="player stats!" /><br/>
      <ModalImage small={playerProfile3} large={playerProfile3} alt="player stats!" /><br/>
      <ModalImage small={playerProfile4} large={playerProfile4} alt="player stats!" /><br/>
      <ModalImage small={toplist_carries} large={toplist_carries} alt="player stats!" /><br/>
      <ModalImage small={toplist_carries2} large={toplist_carries2} alt="player stats!" /><br/>
      <ModalImage small={toplist_tackles} large={toplist_tackles} alt="player stats!" /><br/>
      <ModalImage small={toplist_tackles2} large={toplist_tackles2} alt="player stats!" /><br/>
      <ModalImage small={toplist_tackles3} large={toplist_tackles3} alt="player stats!" /><br/>
      <br/>
      <h2>HTML/CSS /JavaScript /jQuery /Bootstrap:  </h2><br/>
      <ModalImage small={ultrasonicDashboard} large={ultrasonicDashboard} alt="Ultrasonic Dashboard" /><br/>
      <ModalImage small={ehub1} large={ehub1} alt="ehub" /><br/>
      <ModalImage small={ehub2} large={ehub2} alt="ehub" /><br/>
      <ModalImage small={ehub4} large={ehub4} alt="ehub" /><br/>
      <ModalImage small={ehub5} large={ehub5} alt="ehub" /><br/>
      <h2>HTML/CSS /JavaScript /jQuery /Material Design:  </h2><br/>
      <ModalImage small={droneDashboard} large={droneDashboard} alt="droneDashboard" /><br/>
      <h2>WordPress:  </h2><br/>
      <ModalImage small={pcow1} large={pcow1} alt="pcow" /><br/>
      <ModalImage small={pcow2} large={pcow2} alt="pcow" /><br/>
      <ModalImage small={pcow3} large={pcow3} alt="pcow" /><br/>
      <ModalImage small={pcow4} large={pcow4} alt="pcow" /><br/>

    </div>
  )
}
