import * as THREE from 'three'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Effects from './effects/Chaos'

import Boxes from './components/Boxes'

import './styles.css'


export default function App() {
  return (
    <Canvas
      flat
      gl={{ antialias: false, alpha: false }}
      camera={{ position: [0, 0, 15], near: 5, far: 20 }}
      onCreated={({ gl }) => gl.setClearColor('#f0f0f0')}>
      <ambientLight />
      <pointLight position={[150, 150, 150]} intensity={0.55} />
      <Boxes />
      <Effects />
    </Canvas>
  )
}


