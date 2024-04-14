import React from "react"
import { Sticker } from "../assets/sticker.min.js"

function StickerComponent(props) {
  React.useEffect(() => {
    Sticker(props)
  }, [props])

  return <div id="sticker-container" class="sticker"></div>
}

export default StickerComponent
