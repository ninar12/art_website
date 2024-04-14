import React, { useEffect, useCallback, useRef } from "react"

const PanComponent = ({ children }) => {
  const panTag = useRef(null)
  const handleMouseMove = useCallback((event) => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const worldWidth = panTag.current.clientWidth
    const worldHeight = panTag.current.clientHeight

    const mouseX = event.pageX
    const mouseY = event.pageY

    const panWidth = worldWidth - windowWidth
    const panHeight = worldHeight - windowHeight

    const percentageX = mouseX / windowWidth
    const percentageY = mouseY / windowHeight

    const aimX = -1 * panWidth * percentageX
    const aimY = -1 * panHeight * percentageY

    panTag.current.style.left = aimX + "px"
    panTag.current.style.top = aimY + "px"
  }, [])
  useEffect(() => {
    // Add any dependencies here

    document.addEventListener("mousemove", handleMouseMove)
    //animate()
    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, []) // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="world" ref={panTag}>
      {children}
    </div>
  )
}

export default PanComponent
