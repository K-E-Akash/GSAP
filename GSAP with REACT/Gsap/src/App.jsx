import { useGSAP } from '@gsap/react'
import { Stack } from '@mui/material'
import gsap from 'gsap'
import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const [R, setR] = useState(0)

  const valX = gsap.utils.random(-400, 400, 50)
  const valY = gsap.utils.random(-400, 400, 50)
  const valR = gsap.utils.random(-360, 360, 5)

  useGSAP(()=> {
    gsap.to('.fly', {
      x: X,
      y: Y,
      rotate: R
    })
  }, [X, Y, R])

  function flyFlies() {
    console.log(X, Y, R)
  }

  return (
    <>
      <Stack sx={{
        width: '100vw',
        minHeight: '100vh'
      }}>
        <img className='fly' src="../../images/housefly.webp" alt=""
          onClick={() => {
            setX(valX)
            setY(valY)
            setR(valR)
            flyFlies()
          }} />
      </Stack>
    </>
  )
}

export default App