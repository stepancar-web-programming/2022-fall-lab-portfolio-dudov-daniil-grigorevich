import React from "react";
import classes from "../../styles/buttons/CloseButton.module.css"

export default function CloseButton(props) {
  return <button {...props} className={classes.base}>X</button>
}
