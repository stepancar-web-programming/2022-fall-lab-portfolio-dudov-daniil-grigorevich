import React from "react"
import classes from "../styles/Modal.module.css"

export default function Modal({active, children}) {
  const activeClass = active ? classes.active : classes.notActive
  const overlayClasses = [activeClass, classes.overlay].join(" ")
  const contentClasses = [activeClass, classes.content].join(" ")

  return (
    <div className={overlayClasses}>
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  )
}
