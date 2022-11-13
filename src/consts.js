import MasterPage from "./pages/MasterPage"
import DevelopmentPage from "./pages/DevelopmentPage"
import ReleasePage from "./pages/ReleasePage"

import shketDevImg from "./assets/shket-dev.png"
import narutoModImg from "./assets/naruto-mod.jpg"
import engRefImg from "./assets/english-grammar-reference.png"
import dsImg from "./assets/data-science.png"

import pythonImg from "./assets/python.png"
import networkImg from "./assets/network.png"
import databaseImg from "./assets/database.png"
import monkeyImg from "./assets/monkey.png"

import blueScreenImg from "./assets/error.png"
import verstalshikImg from "./assets/verstalshik.jpg"
import jizaImg from "./assets/jiza.jpg"

export const MASTER_PATH = "/master"
export const DEVELOPMENT_PATH = "/development"
export const RELEASE_PATH = "/release"

export const routes = [
  {path: MASTER_PATH, Component: MasterPage, title: "master/"},
  {path: DEVELOPMENT_PATH, Component: DevelopmentPage, title: "development/"},
  {path: RELEASE_PATH, Component: ReleasePage, title: "release/"},
]

export const releases = [
  {name: "shket-dev", image: shketDevImg, description: "My epic website"},
  {
    name: "Naruto-mod",
    image: narutoModImg,
    description: "Minecraft. Naruto. Legendary compilation. 1.15.2",
  },
  {
    name: "english-grammar-reference",
    image: engRefImg,
    description: "Latex? No, LaTeX! Speak proper, seem smart.",
  },
  {name: "DS Researches", image: dsImg, description: "And some beautiful plots"},
]

export const skills = [
  {name: "Python", image: pythonImg, description: "Backend services on Django, popular libraries for Data Science and scripts for automation"},
  {name: "Machine Learning", image: networkImg, description: "Really?"},
  {name: "Database", image: databaseImg, description: "PostgreSQL, MySQL. Design, optimization, complex queries, providing data integrity"},
  {name: "Verstalshik", image: monkeyImg, description: "HTML, CSS, etc."},
]

export const myPhotos = [{image: blueScreenImg}, {image: verstalshikImg}, {image: jizaImg}]

export const colors = {
  base: {color: "#191724"},
  surface: {color: "#1f1d2e"},
  overlay: {color: "#26233a"},
  muted: {color: "#6e6a86"},
  subtle: {color: "#908caa"},
  text: {color: "#e0def4"},
  love: {color: "#eb6f92"},
  gold: {color: "#f6c177"},
  rose: {color: "#ebbcba"},
  pine: {color: "#31748f"},
  foam: {color: "#9ccfd8"},
  iris: {color: "#c4a7e7"},
  highlightLow: {color: "#21202e"},
  highlightLowAlpha: {color: "#6e6a861a"},
  highlightMed: {color: "#403d52"},
  highlightMedAlpha: {color: "#6e6a8633"},
  highlightHigh: {color: "#524f67"},
  highlightHighAlpha: {color: "#6e6a8666"},
}
