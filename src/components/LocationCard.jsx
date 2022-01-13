import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const LocationCard = ({loc}) => {

  return (
    <Link to={`/locations/${loc.id}`}>
      <div className="loc-card">
          <div className="loc-info">
              <p>{loc.id}</p>
              <p><strong>Name:</strong><br/> {loc.name}</p>
              <p><strong>Type:</strong><br/> {loc.type}</p>
          </div>
      </div>
    </Link>
  )
}

export default LocationCard
