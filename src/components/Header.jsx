import React from "react"
import classes from "../styles/Header.module.css"
import {MASTER_PATH, routes} from "../consts"
import {Link} from "react-router-dom"
import githubImg from "../assets/github.png"
import eyeImg from "../assets/eye.png"

export default function Header() {
  return (
    <header>
      <div>
        <Link to={MASTER_PATH} className={classes.me}>
          <img src={eyeImg} />
          <span>
            shket<em>@</em>dev
          </span>
        </Link>
      </div>
      <div className={classes.menu}>
        {routes.map(({path, title}) => (
          <Link key={path} to={path}>
            {title}
          </Link>
        ))}
      </div>
      <div>
        <a href={"https://github.com/shket-228"} className={classes.git}>
          <img src={githubImg} />
        </a>
      </div>
    </header>
  )
}
