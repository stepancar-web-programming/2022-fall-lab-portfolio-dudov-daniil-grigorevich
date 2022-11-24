import React from "react"
import classes from "../../styles/buttons/HardChoiceButton.module.css"

export default function HardChoiceButton(props) {
  return <button {...props} className={classes.base}>{props.children}</button>
}
