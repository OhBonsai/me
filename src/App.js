import * as THREE from 'three'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Effects from './effects/Chaos'
import styled, { css, createGlobalStyle } from 'styled-components'
import { a as aDom } from '@react-spring/web'

import Boxes from './components/Boxes'
import useStore from './store'

import './styles.css'
import useYScroll from './useYScroll'




const UpperRight = styled.div`
  position: absolute;
  //text-transform: uppercase;
  font-weight: 900;
  text-align: right;
  top: 40px;
  right: 50px;
  font-size: 2em;
  transform: skew(-1deg, -1deg);
  pointer-events: all;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    font-size: 1.5em;
  }
`



const Hub = function() {
  const curSlide = useStore((state)=>state.curSlide)
  const changeSlide = useStore((state) => state.actions.changeSlide)

  return (
    <>
      <UpperRight>
        <div>CurSlide: {curSlide}</div>
        <div onClick={()=>changeSlide(2)}>Give shape</div>
      </UpperRight>
    </>
  )
}





export default function App() {
  const [y] = useYScroll([-100, 2400], { domTarget: window })


  return (
    <>
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
      <aDom.div className="bar" style={{ height: y.interpolate([-100, 2400], ['0%', '100%']) }} />
      <Hub/>
    </>

  )
}


