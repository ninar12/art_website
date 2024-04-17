import React from "react"
import "../pages/index.css"
import { Link } from "react-router-dom"
import instagram from "../assets/images/img_1.png"
import tiktok from "../assets/images/img_2.png"
import { useSpring, animated } from "@react-spring/web"
import header from "../assets/images/header.jpg"
function MyComponent() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  return <animated.div style={props}>Hello World</animated.div>
}
const Nav = () => {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )
  return (
    <header>
      <nav class="nav">
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="/shop">SHOP</a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="/about">ABOUT</a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="mailto:aegis_ingot_0h@icloud.com">CONTACT</a>
          </div>
        </div>
        <a
          class="no-styling"
          style={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: "bold",
            backgroundColor: "none",
            padding: "0",
            textAlign: "center",
          }}
          href="/">
          <img height="40" style={{ mixBlendMode: "multiply" }} src={header} />
        </a>

        <div
          style={{
            display: "flex",
            gap: "4vw",
            alignItems: "center",
            justifyContent: "end",
          }}>
          <div class="social-icons">
            <a
              className="social-icon"
              href="https://www.instagram.com/nrhone_paintings/?hl=en">
              <img height="30" width="30" src={instagram}></img>
            </a>
            <a
              className="social-icon"
              href="https://www.tiktok.com/@nrhone_art?lang=en">
              <img height="30" width="30" src={tiktok}></img>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
