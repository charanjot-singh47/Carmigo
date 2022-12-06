import React from 'react'
import { Link } from 'react-router-dom'

function Chat({ name, profilePic, message, timestamp }) {
  return (
    <div className="flex w-screen h-[10vh] border flex-row justify-center items-center bg-white">
      <Link to={`/chats/${name}`}>
        <div className="flex w-screen justify-around items-center">
          <img
            className="h-[9vh] w-[7vh] rounded-2xl bg-center m-2"
            src={profilePic}
            alt="profile_photo"
          />

          {/* WILL NEED TO CHANGE THE ROUTE LATER */}

          <div className="justify-self-start font-bold">
            <h2>{name}</h2>
          </div>

          <div className="py-10 text-gray-500">
            <p>{message}</p>
          </div>
          <p className="chat_timestamp gray text-gray-300">{timestamp}</p>
        </div>
      </Link>
    </div>
  )
}

export default Chat
