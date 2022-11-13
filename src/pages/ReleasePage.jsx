import React, {useState} from "react"
import Slider from "../components/Slider"
import { releases } from "../consts"

export default function ReleasePage() {
  return (
    <main>
      <section>
        <h1>Releases</h1>
        <Slider widthPx={1000} heightPx={700} slides={releases}/>
      </section>
    </main>
  )
}
