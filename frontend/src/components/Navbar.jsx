import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user }) => {
  const profileId = user?._id
  return (
    <header className="bg-white sticky top-0 z-50 bg-base-300 border-b border-base-content/10">
    <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
            <Link to=""><h1 className="text-3xl font-bold text-primary font-mono tracking-tight cursor-pointer">Logo</h1></Link>
            <Link to={`profile/${profileId}`}>Profile</Link>
        </div>
    </div>
  </header>
  )
}

export default Navbar