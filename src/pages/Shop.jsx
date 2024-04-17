import { React, useState } from "react"
import bathroomImage from "../assets/images/bathroom.jpeg"
import Nav from "../components/nav"
import "./shop.css"
import "./index.css"
import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { BannerAnimation } from "../utils/BannerAnimation"
import emptyImage from "../assets/images/empty_image.png"
import logo from "../assets/images/logo.jpeg"
import PopupOrder from "../components/Order"
import { Suspense } from "react"

const Shop = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [currentPrint, setCurrentPrint] = useState("")

  const togglePopup = (e, print) => {
    e.preventDefault()
    setCurrentPrint(print)
    setShowPopup(!showPopup)
  }

  const prints = [
    {
      src: bathroomImage,
      title: "BATHROOM",
      alt: "Sketch of bathroom graphic art",
      size: "6 x 8",
      price: "40$ + shipping",
      class: "",
    },
    {
      src: logo,
      title: "YOUR IMAGINATION",
      alt: "red image",
      size: "Your choice",
      price: "🤨$ depends",
      class: "edit",
    },
  ]
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div class="main">
        <BannerAnimation></BannerAnimation>
        <div class="layout">
          <header>
            <Nav></Nav>
          </header>
          {showPopup ? (
            <PopupOrder artTitle={currentPrint} closePopup={togglePopup} />
          ) : null}
          <ImageList
            variant="masonry"
            style={{ padding: "3vw", marginTop: "12vh" }}
            rows={2}
            cols={4}
            gap={8}>
            {prints.map((item) => (
              <>
                <div class="print-block">
                  <Suspense item key={item.src}>
                    <ImageListItem
                      style={{
                        margin: "0",
                      }}
                      key={item.src}>
                      <img
                        srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.src}?w=248&fit=crop&auto=format`}
                        alt={item.alt}
                        loading="lazy"
                        className={`img-list ${item.class}`}

                        // Add this line
                      />
                      <h2>{item.title}</h2>
                      <p>{item.size}</p>
                      <p>{item.price}</p>
                      <button
                        className="tilt-button"
                        style={{ position: "absolute", top: 10, left: 10 }}
                        onClick={(e) => togglePopup(e, item.title)}>
                        ORDER
                      </button>
                    </ImageListItem>
                  </Suspense>
                </div>
              </>
            ))}
          </ImageList>
        </div>
        <footer style={{ fontSize: "xx-small", padding: "1vh" }}>
          Website made by Nina Rhone ♡
        </footer>
      </div>
    </Suspense>
  )
}

export default Shop
