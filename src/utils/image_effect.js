import React, { useRef } from "react"
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing"
import { useThree } from "@react-three/fiber"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import profile from "../assets/images/about.jpeg"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import * as THREE from "three"
import { Suspense } from "react"

import "../pages/about.css"

const Box = () => {
  const texture = useLoader(TextureLoader, profile)
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh ref={mesh} position={[0, -0.15, 3]}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  )
}

const Scene = () => {
  const mouse = new THREE.Vector2()
  const mouseVelocity = new THREE.Vector2()

  return (
    <Canvas class="about" height="1000">
      <ambientLight position={[0, 5, 5]} />
      <pointLight position={[5, 5, 5]} />
      <Box />
    </Canvas>
  )
}

export default Scene
