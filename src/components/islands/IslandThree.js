import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function IslandThree(props) {
  const group = useRef()
  const { nodes} = useGLTF('../assets/models/island4.glb');
  return (
    <group ref={group} {...props} dispose={null}>
    </group>
  )
}

useGLTF.preload('../assets/models/island4.glb')
