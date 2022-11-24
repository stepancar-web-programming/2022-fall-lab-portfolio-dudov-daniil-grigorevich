import React, {useEffect, useRef, useState} from "react"
import {colors} from "../consts"
import classes from "../styles/TerminalForm.module.css"
import CloseButton from "./buttons/CloseButton"
import terminalImg from "../assets/utilities-terminal.svg"

export default function TerminalForm({active, intention, close}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const formRef = useRef(null)
  const [sure, setSure] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    if (active) {
      setCurrentIndex(0)
      setData({})
      formRef.current.reset()
    }
  }, [active])

  useEffect(() => {
    if (active && currentIndex < lines.length) {
      formRef.current[currentIndex].focus()
    }
  }, [active, currentIndex])

  const lines = [
    {prompt: "Your name: ", handler: (e) => setData({...data, name: e.target.value})},
    {prompt: "Your phone: ", handler: (e) => setData({...data, phone: e.target.value})},
    {prompt: "Your email adress: ", handler: (e) => setData({...data, email: e.target.value})},
    {prompt: "Your adress: ", handler: (e) => setData({...data, adress: e.target.value})},
    {
      prompt: `Are you sure you wanna ${intention}? [y/n] `,
      handler: (e) => {
        const answer = e.target.value
        setSure(answer === "y" || answer === "Y" || answer === "yes")
      },
    },
  ]

  function displayResult() {
    if (currentIndex === lines.length) {
      if (sure)
        return (
          <p>
            <span style={colors.foam}>Ok, your request was heard:</span>
            <br />
            {JSON.stringify(data, null, 1)}
          </p>
        )
      return (
        <p>
          <em>Abort.</em>
        </p>
      )
    }
  }

  return (
    <div className={classes.window}>
      <div className={classes.topBar}>
        <img src={terminalImg} />
        <CloseButton onClick={close} />
      </div>
      <form ref={formRef}>
        {lines.map(({prompt, handler}, index) => (
          <p key={index} style={{display: index > currentIndex && "none"}}>
            guest<em>$</em> <span style={colors.foam}>{prompt}</span>
            <input
              disabled={index !== currentIndex && "disabled"}
              autoComplete="new-password"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setCurrentIndex(index + 1)
                  handler(event)
                }
              }}
            />
          </p>
        ))}
      </form>
      {displayResult()}
    </div>
  )
}
