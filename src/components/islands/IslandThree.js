import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function IslandThree(props) {
  const group = useRef()
  const { nodes} = useGLTF('../assets/models/island3.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh receiveShadow material={nodes.island_richtingen.material} geometry={nodes.island_richtingen.geometry} />
    </group>
  )
}

useGLTF.preload('../assets/models/island3.glb')
