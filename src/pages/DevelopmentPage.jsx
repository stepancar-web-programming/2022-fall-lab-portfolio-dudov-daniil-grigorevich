import React from "react"
import devPageImg from "../assets/development.png"

export default function DevelopmentPage() {
  return (
    <main>
      <section>
        <h3 style={{marginBottom: "1.2em"}}>This page in development:</h3>
        <img src={devPageImg} />
      </section>
    </main>
  )
}
