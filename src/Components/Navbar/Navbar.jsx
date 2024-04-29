import React from 'react'
import css from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={css.container}>
      <div className={css.row}>
        {/* First Row */}
        <div className={css.first}>
          <span className={css.alientTxt}>Play</span>
        </div>
        {/* Second Row */}
        <div className={css.second}></div>
        {/* Third Row */}
        <div className={css.third}></div>
      </div>
    </div>
  )
}

export default Navbar
