import React, { useEffect, useRef } from "react"
import "./image.css"
const ImageComponent = ({ id, src }) => {
  const imageRef = useRef(null)

  useEffect(() => {
    const handleMouseOver = (event) => {
      const x = event.pageX
      const y = event.pageY

      const targetCoords = imageRef.current.getBoundingClientRect()

      const targetX = targetCoords.left + imageRef.current.offsetWidth / 2
      const targetY = targetCoords.top + imageRef.current.offsetHeight / 2

      const angleX = (targetY - y) / 25
      const angleY = (targetX - x) / -25

      event.target.style.transform =
        "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)"
    }

    // Check if the image element exists
    if (imageRef.current) {
      // Add the mouseover event listener to the image element
      imageRef.current.addEventListener("mouseover", handleMouseOver)
      console.log(imageRef)
    } else {
      console.log("Image element not found")
    }

    // Cleanup function to remove event listener when component unmounts
    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("mouseover", handleMouseOver)
      }
    }
  }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return <img id={id} src={src} ref={imageRef} style={{ zIndex: 999 }} />
}

export default ImageComponent
