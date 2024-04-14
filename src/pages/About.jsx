import React from "react"
import Nav from "../components/nav.jsx"
import about from "../assets/images/about.jpeg"
import Scene from "../utils/image_effect.js"
import "./about.css"

const About = () => (
  <div class="main">
    <Nav></Nav>
    <div>
      <h1 class="text">
        Nina Rhone is an artist based in LA. She's been doing art since 5 years
        old, and specializes in any medium, but loves acrylic and oil. Contact
        her about anything. Thanks for visiting!
      </h1>
    </div>
    <Scene></Scene>
  </div>
)

export default About
