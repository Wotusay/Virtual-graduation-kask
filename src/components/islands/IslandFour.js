import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function IslandFour(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../assets/models/island4.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh receiveShadow material={nodes.island_opleidingen.material} geometry={nodes.island_opleidingen.geometry} />
    </group>
  )
}

useGLTF.preload('../assets/models/island4.glb')
