import React, { Component } from 'react';
import Slider from "react-slick";

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

const imgList = [
  h2h1,
  h2h2,
  lineups,
  playerProfile1,
  playerProfile2,
  playerProfile3,
  playerProfile4,
  toplist_carries,
  toplist_carries2,
  toplist_tackles,
  toplist_tackles2,
  toplist_tackles3,
  ultrasonicDashboard,
  ehub1,
  ehub2,
  ehub3,
  ehub4,
  ehub5,
  droneDashboard,
  pcow1,
  pcow2,
  pcow3,
  pcow4
];


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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return(
    <Slider {...settings}>
      {imgList.map((x,key) => (
        <div key={key} >
          <img src={x} alt="player stats!" height="570" /><br/>
        </div>
      ))}
      </Slider>
  )
}
