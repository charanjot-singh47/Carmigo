import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

function SwipePage() {
  const db = [
    {
      name: 'Supercar Blondie',
      url: '../../server/public/images/super.jpg',
      details: 'RR Ghost. When you drive, make sure you do it in style.',
    },
    {
      name: 'Kate',
      url: '../../server/public/images/women.jpg',
      details: '1 of 1 collectible',
    },
    {
      name: 'LiL Baby',
      url: '../../server/public/images/baby.jpg',
      details: 'Lambo Urus',
    },
    {
      name: 'Nade',
      url: '../../server/public/images/g63.png',
      details: 'G63 AMG. Love road trips.',
    },
    {
      name: 'Tanner',
      url: '../../server/public/images/gtr.jpg',
      details: 'R35 GTR. Drive the best, or drive nothing.',
    },
    {
      name: 'CR7',
      url: '../../server/public/images/cr7.jpg',
      details: 'SUUUUIIIIIIIII. I like stylish cars.',
    },
    {
      name: 'Drake',
      url: '../../server/public/images/drake.jpg',
      details: "RR Ghost. It's driving time!",
    },
    {
      name: 'Pop Smoke',
      url: '../../server/public/images/pops.jpg',
      details: 'Bentayga. No road is long with good company.',
    },
    {
      name: 'Tate',
      url: '../../server/public/images/ggs.jpg',
      details: 'Ferrari 458. What colour is your Bugatti?',
    },
    {
      name: 'Hasbulla',
      url: '../../server/public/images/hass.jpg',
      details:
        'Lambo Gallardo. Everything in life is somewhere else, and you get there in a car.',
    },
    {
      name: 'Paul',
      url: '../../server/public/images/paul.jpg',
      details:
        'R34 GTR V-Spec. Sometimes, the best therapy is a long drive and music.',
    },
    {
      name: 'Helana',
      url: '../../server/public/images/helana.jpg',
      details: 'Outlander. Driving with style',
    },
    {
      name: 'Krys',
      url: '../../server/public/images/krys.jpg',
      details: 'I love Holdens!',
    },
    {
      name: 'Jared',
      url: '../../server/public/images/jared.jpg',
      details: 'Toyotas are the best!',
    },
    {
      name: 'Johnny',
      url: '../../server/public/images/johnny.jpg',
      details: 'Nissans are the coolest!',
    },
    {
      name: 'Clem',
      url: '../../server/public/images/clem.jpg',
      details: 'Toyota Vitz. Some days, nothing beats a really good drive.',
    },
    {
      name: 'Elvin',
      url: '../../server/public/images/elvin.jpg',
      details: 'Toyota Crown - PinkSlips lol?',
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
      {characters.map((character) => (
        <TinderCard
          className="flex flex-col absolute overflow-hidden"
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name)}
          onCardLeftScreen={() => outOfFrame(character.name)}
        >
          <div
            style={{ backgroundImage: 'url(' + character.url + ')' }}
            className="flex relative w-screen h-[78vh] justify-center bg-cover bg-center rounded-3xl"
          >
            <div className="flex-auto text-left mt-96 ml-5 pt-40 text-white text-3xl">
              <h4 className="flex-auto text-white font-extrabold text-4xl ">
                {character.name}
              </h4>
              <p>{character.details}</p>
            </div>
          </div>
        </TinderCard>
      ))}
      {/* {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )} */}
    </>
  )
}

export default SwipePage
