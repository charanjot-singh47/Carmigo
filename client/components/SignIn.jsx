import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const { logout, loginWithRedirect, user, isLoading } = useAuth0()

  function handleLogoff(e) {
    e.preventDefault()
    logout({ returnTo: `${window.location.origin}/signin` })
  }

  function handleRegister(e) {
    e.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/profile`,
    })
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <>
      <section className="h-screen flex flex-col bg-blue-500 text-white flex justify-between items-center pt-44">
        <img className="object-contain h-52 w-96 mt-4" src="logo.png" />
        <nav className="flex flex-col justify-end  gap-4 mb-8">
          <IfAuthenticated>
            s
            <Link
              to="/"
              onClick={handleLogoff}
              className="border-solid border-2 px-8 py-2 border-blue-600 rounded-3xl hover:bg-zinc-600"
            >
              Sign Out
            </Link>
          </IfAuthenticated>
        </nav>
      </section>
    </>
  )
}

export default Nav

///////SIGN IN PAGE///////////////////////
