import { useState, useEffect, Suspense } from "react"
import amy from "../assets/images/amy.png"
import angela from "../assets/images/angela.png"
import bloodorange from "../assets/images/bloodorange.png"
import boys from "../assets/images/boys.png"
import brother from "../assets/images/brother.png"
import lone_sword from "../assets/images/lone_sword.jpg"
import rural_girl from "../assets/images/rural_girl.jpg"
import selfport from "../assets/images/selfport.png"
import the_dinky from "../assets/images/thedinky.png"
import bathroom from "../assets/images/bathroom.jpeg"
import cassie from "../assets/images/cassie.jpeg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import lisa from "../assets/images/lisa.jpeg"
import we from "../assets/images/crayon.jpeg"
import laura from "../assets/images/laurawebber.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Nav from "../components/nav"
import PanComponent from "../utils/pan"
import Popup from "../components/Popup"
import { ImageList } from "@mui/material"
import "./index.css"

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [currentPainting, setCurrentPainting] = useState("")
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)

  const togglePopup = (e, painting) => {
    e.preventDefault()
    setCurrentPainting(painting)
    setShowPopup(!showPopup)
  }
  useEffect(() => {
    const handleResize = () => {
      if (window && document.documentElement) {
        setIsSmallScreen(document.documentElement.clientWidth < 768)
      }
    }

    // Attach event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      {showPopup ? (
        <Popup artTitle={currentPainting} closePopup={togglePopup} />
      ) : null}
      <section class="panner">
        <PanComponent style={showPopup ? { overlay: "blur(10px)" } : {}}>
          <ImageList
            variant="masonry"
            cols={isSmallScreen ? 1 : 3}
            gap={100}
            rowGap={80}>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={bathroom} // use normal <img> attributes as props
              />
              <div class="card-content">
                <a href="/shop" class="sale-button">
                  FOR SALE
                </a>
                <div id="sticker" class="sticker"></div>
                <h2>Bathroom</h2>
                <br></br>
                <p>Graphite on paper</p>
                <p>6 x 8 PRINT</p>
                <p></p>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                src={cassie} // use normal <img> attributes as props
              />
              <div class="card-content">
                <h2>Miss You</h2>
                <p>Graphite on paper</p>
                <button
                  class="print-button"
                  onClick={(e) => togglePopup(e, "'MISS YOU'")}>
                  REQUEST PRINT!
                </button>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                src={lisa}
                effect="blur"
                // use normal <img> attributes as props
              />
              <div class="card-content">
                <h2>Lisa Rinna Pill Bag</h2>
                <p>Graphite on paper</p>
                <button
                  class="print-button"
                  onClick={(e) => togglePopup(e, "'LISA RINNA PILL BAG'")}>
                  REQUEST PRINT!
                </button>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={laura} // use normal <img> attributes as props
              />
              <div class="card-content">
                <a class="sale-button">COMMISSION</a>
                <h2>Laura Webber</h2>
                <p>Graphite on paper</p>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={amy} // use normal <img> attributes as props
              />
              <div class="card-content">
                <h2>Amy and her Guitar</h2>
                <p>Acrylic on Paper</p>
                <button
                  class="print-button"
                  onClick={(e) => togglePopup(e, "'AMY AND HER GUITAR'")}>
                  REQUEST PRINT!
                </button>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={angela} // use normal <img> attributes as props
              />
              <div class="card-content">
                <a class="sale-button">COMMISSION</a>
                <h2>Angela Davis</h2>
                <p>Acrylic on paper</p>
                <button
                  class="print-button"
                  onClick={(e) => togglePopup(e, "'ANGELA DAVIS'")}>
                  REQUEST PRINT!
                </button>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={boys} // use normal <img> attributes as props
              />
              <div class="card-content">
                <h2>Boys</h2>
                <p>Acrylic on paper</p>
                <button
                  class="print-button"
                  onClick={(e) => togglePopup(e, "'Boys'")}>
                  REQUEST PRINT!
                </button>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={brother} // use normal <img> attributes as props
              />
              <div class="card-content">
                <h2>Brother</h2>
                <p>Acrylic on paper</p>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={lone_sword} // use normal <img> attributes as props
              />
              <div class="card-content">
                <a href="/shop" class="sale-button">
                  COMMISSION
                </a>
                <h2>Lone Sword</h2>
                <p>Mixed Media Movie Poster for Desi Rhone</p>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={we} // use normal <img> attributes as props
              />

              <div class="card-content">
                <h2>World's Fair</h2>
                <p>Crayon</p>
                <button
                  class="print-button"
                  onClick={(e) => togglePopup(e, "'WORLD'S FAIR'")}>
                  REQUEST STICKER!
                </button>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={rural_girl} // use normal <img> attributes as props
              />
              <div class="card-content">
                <h2>Rural Girl</h2>
                <p>Mixed Media </p>
                <button
                  class="print-button"
                  onClick={(e) => togglePopup(e, "'RURAL GIRL'")}>
                  REQUEST PRINT!
                </button>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={selfport} // use normal <img> attributes as props
              />
              <div class="card-content">
                <h2>Self Portrait</h2>
                <p>Pen on paper</p>
              </div>
            </div>
            <div class="card">
              <LazyLoadImage
                effect="blur"
                src={the_dinky} // use normal <img> attributes as props
              />
              <div class="card-content">
                <h2>The Great Dinky</h2>
                <p>Acrylic on paper</p>
              </div>
            </div>
          </ImageList>
        </PanComponent>
      </section>
    </div>
  )
}

export default App
