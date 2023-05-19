import { Link } from "react-router-dom"
import "./Navbar.css"
import React, { useState, useEffect } from "react"

const DropdownMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.classList.contains("dropbtn")) {
        setShowDropdown(false)
      }
    }

    window.addEventListener("click", handleOutsideClick)

    return () => {
      window.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        MENU
      </button>
      {showDropdown && (
        <div id="myDropdown" className="dropdown-content">
          <Link className="linkfont" to="/">
            Etusivu
          </Link>
          <Link className="linkfont" to="/about">
            Tietoa kampanjasta
          </Link>
          <Link className="linkfont" to="/game">
            Pelaamaan
          </Link>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
