import React from 'react'
import './AnimationTools.css'
import PortalGun from '../assets/img/portal-gun.svg'
import MeeseeksBox from '../assets/img/meeseeks-box.svg'
import Pickle from '../assets/img/pickle.svg'
import Flask from '../assets/img/flask.svg'

function AnimationTools() {
  return (
    <div className='tools-container'>
        <h3 className="tools-title">Animation Tools</h3>
        <ul className="tools-list">
            <li className="tools-list_item"><img src={PortalGun} alt="Rick's portal gun"/></li>
            <li className="tools-list_item"><img src={MeeseeksBox} alt="Meeseeks Box" /></li>
            <li className="tools-list_item"><img src={Pickle} alt="Pickle"/></li>
            <li className="tools-list_item"><img src={Flask} alt="Flask" /></li>
        </ul>
    </div>
  )
}

export default AnimationTools