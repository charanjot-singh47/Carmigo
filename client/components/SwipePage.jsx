import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

function SwipePage() {
  const db = [
    {
      name: 'Richard Hendricks',
      url: '../../server/public/images/1.jpeg',
    },
    {
      name: 'Erlich Bachman',
      url: '../../server/public/images/2.jpeg',
    },
    {
      name: 'Monica Hall',
      url: '../../server/public/images/3.jpeg',
    },
    {
      name: 'CJ',
      url: '../../server/public/images/4.jpg',
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
    <>
      <div className="w-80 h-4/5 justify-center items-center overflow-hidden bg-blue-500">
        {characters.map((character) => (
          <TinderCard
            className="absolute w-full h-5/6 overflow-hidden"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className="relative w-80 h-4/5 bg-cover bg-center rounded-3xl"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {/* {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )} */}
    </>
  )
}

export default SwipePage
