'use client'
import React, { useState } from 'react'

export const HamburgerToggle = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleOpenMenu = (action) =>{
        setMenuOpen(action)
        console.log('toggled')
    }

  return (
    <div className="hamburger-menu">
        <div className={`hamburger ${menuOpen ? 'is-active':''}`} id="hamburger-1" onClick={()=>handleOpenMenu(!menuOpen)}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    </div>
  )
}
