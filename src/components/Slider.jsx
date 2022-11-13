import React, {useState} from "react"
import classes from "../styles/Slider.module.css"
import {mod} from "../utils"

export default function Slider({widthPx, heightPx, slides, ...props}) {
  const [slideIndex, setSlideIndex] = useState(0)

  function getSlideStyles(index) {
    if (index < slideIndex) return {left: "-100%"}
    else if (index === slideIndex) return {left: 0}
    else return {left: "100%"}
  }

  function getIndicatorClasses(index) {
    return index === slideIndex ? classes.active : null
  }

  return (
    <div {...props}>
      <div className={classes.slider} style={{height: `${heightPx}px`}}>
        <div
          className={[classes.arrow, classes.left].join(" ")}
          onClick={() => setSlideIndex(mod(slideIndex - 1, slides.length))}
        ></div>
        <div className={classes.slideSet} style={{width: `${widthPx}px`}}>
          {slides.map(({name, image, description}, index) => (
            <div key={index} style={getSlideStyles(index)}>
              {name && <h3>{name}</h3>}
              <img style={{width: `${widthPx}px`}} src={image} />
              {description && <p>{description}</p>}
            </div>
          ))}
        </div>
        <div
          className={[classes.arrow, classes.right].join(" ")}
          onClick={() => setSlideIndex(mod(slideIndex + 1, slides.length))}
        ></div>
      </div>
      <div className={classes.indicators}>
        {slides.map(({}, index) => (
          <div
            key={index}
            className={getIndicatorClasses(index)}
            onClick={() => setSlideIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
