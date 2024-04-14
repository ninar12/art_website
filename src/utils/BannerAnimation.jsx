// https://cydstumpel.nl/

import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Image,
  Environment,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei"
import { easing } from "maath"
import "../pages/index.css"
import "./util"
import work from "../assets/images/work_.png"
import img_1 from "../assets/images/img_1.png"
import img_2 from "../assets/images/img_2.png"
import img_3 from "../assets/images/img_3.png"

export const BannerAnimation = () => (
  <Canvas
    className="banner-canvas"
    background="white"
    camera={{ position: [0, 0, 5], fov: 15 }}>
    <fog attach="fog" args={["white", 8.5, 12]}></fog>
    <Banner position={[0, -0.15, 0]} />
  </Canvas>
)

function Banner(props) {
  const ref = useRef()
  const texture = useTexture(work)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  useFrame((state, delta) => {
    if (ref.current && ref.current.material && ref.current.material.map) {
      ref.current.material.time.value += 1 * delta

      // Adjust the texture offset for folding effect
      const maxOffsetX = 1 // Maximum offset before folding
      ref.current.material.map.offset.x += delta / 2
      if (ref.current.material.map.offset.x >= maxOffsetX) {
        ref.current.material.map.offset.x = 0 // Reset offset after reaching the threshold
      }
    }
  })

  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[14, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  )
}
