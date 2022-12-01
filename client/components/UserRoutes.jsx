import React, { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
import TinderCard from 'react-tinder-card'

function UserRoutes() {
  const db = [
    {
      name: 'Richard Hendricks',
      url: './images/1.jpeg',
    },
    {
      name: 'Erlich Bachman',
      url: './images/2.jpeg',
    },
    {
      name: 'Monica Hall',
      url: './images/3/jpeg',
    },
  ]
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1>React Tinder Card</h1>
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  )
}



export default UserRoutes

