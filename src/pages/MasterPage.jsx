import React, {useState} from "react"
import classes from "../styles/MasterPage.module.css"
import HardChoiceButton from "../components/buttons/HardChoiceButton"
import Modal from "../components/Modal"
import Slider from "../components/Slider"
import TerminalForm from "../components/TerminalForm"
import shketImg from "../assets/shket.jpg"
import {myPhotos, skills, colors} from "../consts"

export default function MasterPage() {
  const [modalActive, setModalActive] = useState(false)
  const [intention, setIntention] = useState(null)

  function giveBream() {
    setIntention("give me a bream")
    setModalActive(true)
  }

  function breakKnees() {
    setIntention("break my knees")
    setModalActive(true)
  }

  return (
    <main>
      <section>
        <div className={classes.horizontalContainer}>
          <div className={classes.smallFlex} style={{padding: "2em"}}>
            <img src={shketImg} className={classes.niceFrames} />
          </div>
          <div className={classes.bigFlex}>
            <h3>Shket Developer</h3>
            <p className={classes.myName}>Danya Dudov</p>
            <p>
              C, C++, Java, Kotlin, JavaScript, React, Bash, Linux, Python, Machine Learning, Data
              Science, Assembler, LaTeX, Vim{" "}
              <span style={{...colors.pine, fontWeight: "bold"}}>enjoyer</span>
            </p>
            <div className={classes.hardChoice}>
              <HardChoiceButton onClick={giveBream}>Give a bream</HardChoiceButton>
              <HardChoiceButton onClick={breakKnees}>Break knees</HardChoiceButton>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1>Skills</h1>
        <div className={classes.skillGrid}>
          {skills.map(({name, image, description}) => (
            <div key={name}>
              <img src={image} />
              <div>
                <h4>{name}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1>About me</h1>
        <div className={classes.horizontalContainer}>
          <div className={classes.bigFlex}>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore
              culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim
              cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
              amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
              officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
              dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id
              nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
              ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
              consectetur et est culpa et culpa duis.
            </p>
            <p style={{...colors.love, fontStyle: "italic", paddingLeft: "50%"}}>"quote"</p>
          </div>
          <div className={classes.smallFlex}>
            <Slider heightPx={500} widthPx={500} slides={myPhotos} className={classes.niceFrames} />
          </div>
        </div>
      </section>
      <Modal active={modalActive} setActive={(arg) => setModalActive(arg)}>
        <TerminalForm
          active={modalActive}
          intention={intention}
          close={() => setModalActive(false)}
        />
      </Modal>
    </main>
  )
}
