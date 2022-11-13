import React from "react"
import classes from "../styles/Footer.module.css"
import blueEndImg from "../assets/blue-end.jpg"

export default function Footer() {
  return (
    <footer>
      <div className={classes.gigaGap}>
        <p className={classes.singleLabel}>{"<footer></footer>"}</p>
      </div>
      <img src={blueEndImg} />
    </footer>
  )
}
