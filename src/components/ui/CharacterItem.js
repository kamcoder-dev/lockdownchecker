import React from 'react'

const CharacterItem = ({ items }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
       
          <ul>
            <li>
              <strong>Name of the administrative district:</strong> {items.admindistrictname}
            </li>
            <li>
              <strong>Name of the local council authority:</strong> {items.councilname}
            </li>
            <li>
              <strong>Indicates the current status of the area as provided by the UK government:</strong> {items.lockdownstatus}
            </li>
           
          </ul>
        </div>
      </div>
    
  )
}

export default CharacterItem