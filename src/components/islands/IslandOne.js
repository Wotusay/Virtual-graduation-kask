

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { useAnimations } from '@react-three/drei/useAnimations'

export default function IslandOne(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../assets/models/isladn1.glb')
  const { actions,names } = useAnimations(animations, group);
  useEffect(() => {
    actions[names[1]].play();
    actions[names[0]].play();
    actions[names[4]].play();
    actions[names[6]].play();
    actions[names[3]].play();

  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.57, 0.88, 0.91]} rotation={[0, 0.09, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.003']} geometry={nodes.Cone_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.002']} geometry={nodes.Cone_2.geometry} />
      </group>
      <group position={[1.86, 0.88, 0.83]} rotation={[0, 1.27, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.003']} geometry={nodes.Cone002_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.002']} geometry={nodes.Cone002_2.geometry} />
      </group>
      <group position={[1.87, 0.89, -1.67]} rotation={[-3.14, 0.07, 3.14]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.025']} geometry={nodes.Cone007_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.026']} geometry={nodes.Cone007_2.geometry} />
      </group>
      <group position={[-1.1, 0.88, -0.39]} rotation={[0, -1.26, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.032']} geometry={nodes.Cone009_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.033']} geometry={nodes.Cone009_2.geometry} />
      </group>
      <group position={[-0.74, 0.88, 0.85]} rotation={[0, -0.09, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.032']} geometry={nodes.Cone010_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.033']} geometry={nodes.Cone010_2.geometry} />
      </group>
      <group position={[-0.69, 0.89, -1.65]} rotation={[-3.14, -1.25, 3.14]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.035']} geometry={nodes.Cone011_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.036']} geometry={nodes.Cone011_2.geometry} />
      </group>
      <group position={[0.61, 0.89, -1.71]} rotation={[-3.14, -0.07, 3.14]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.035']} geometry={nodes.Cone012_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.036']} geometry={nodes.Cone012_2.geometry} />
      </group>
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone.geometry}
        position={[1.07, 0.37, 0.25]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone001.geometry}
        position={[0.66, 0.37, 0.25]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone002.geometry}
        position={[1.07, 0.37, 0.25]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone003.geometry}
        position={[0.23, 0.37, 0.25]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone004.geometry}
        position={[0.23, 0.37, -1.03]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone005.geometry}
        position={[0.66, 0.37, -1.03]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone006.geometry}
        position={[1.07, 0.37, -1.03]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone007.geometry}
        position={[-0.25, 0.37, -2.12]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone008.geometry}
        position={[-0.67, 0.37, -2.25]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone009.geometry}
        position={[-1.09, 0.37, -2.11]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone010.geometry}
        position={[1.4, 0.37, -2.11]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone011.geometry}
        position={[2.69, 0.37, -1.99]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone013.geometry}
        position={[1.41, 0.37, 1.39]}
        rotation={[Math.PI, -0.01, Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone014.geometry}
        position={[1.82, 0.37, 1.58]}
        rotation={[Math.PI, -0.01, Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone015.geometry}
        position={[2.24, 0.37, 1.37]}
        rotation={[Math.PI, -0.01, Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone016.geometry}
        position={[-0.38, 0.37, 1.32]}
        rotation={[-Math.PI, 0.18, -Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone017.geometry}
        position={[-0.88, 0.37, 1.41]}
        rotation={[-Math.PI, 0.18, -Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Cone018.geometry}
        position={[-1.24, 0.37, 1.18]}
        rotation={[-Math.PI, 0.18, -Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.011']}
        geometry={nodes.Cone019.geometry}
        position={[-1.81, 0.37, -1.9]}
        rotation={[0, 0.74, 0]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.011']}
        geometry={nodes.Cone020.geometry}
        position={[-1.95, 0.37, -2.13]}
        rotation={[0, 0.74, 0]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.011']}
        geometry={nodes.Cone021.geometry}
        position={[-1.7, 0.37, -2.15]}
        rotation={[0, 0.74, 0]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.012']}
        geometry={nodes.Cone022.geometry}
        position={[-1.73, 0.37, -1.65]}
        rotation={[Math.PI, -0.8, Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.012']}
        geometry={nodes.Cone023.geometry}
        position={[-1.47, 0.37, -1.69]}
        rotation={[Math.PI, -0.8, Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.012']}
        geometry={nodes.Cone024.geometry}
        position={[-1.63, 0.37, -1.91]}
        rotation={[Math.PI, -0.8, Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.013']}
        geometry={nodes.Cone025.geometry}
        position={[-1.11, 0.37, 0.44]}
        rotation={[0, 0.74, 0]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.013']}
        geometry={nodes.Cone026.geometry}
        position={[-1.37, 0.37, 0.47]}
        rotation={[0, 0.74, 0]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.013']}
        geometry={nodes.Cone027.geometry}
        position={[-1.22, 0.37, 0.7]}
        rotation={[0, 0.74, 0]}
        scale={[0.1, 0.08, 0.09]}
      />
      <group position={[0.57, 1.11, 1.07]} rotation={[0, 0.09, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.006']} geometry={nodes.Cube001_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.003']} geometry={nodes.Cube001_2.geometry} />
        <mesh receiveShadow castShadow material={materials.ramen} geometry={nodes.Cube001_3.geometry} />
      </group>
      <group name="Cube001" position={[3.32, 0.24, 2.69]} rotation={[0, 1.36, 0]} scale={[0.12, 0.12, 0.12]}>
        <mesh receiveShadow castShadow material={materials['Material.054']} geometry={nodes.Cube022.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.001']} geometry={nodes.Cube022_1.geometry} />
      </group>
      <group name="Cube002" position={[3.31, 0.24, 2.67]} rotation={[0, 1.36, 0]} scale={[0.12, 0.12, 0.12]}>
        <mesh receiveShadow castShadow material={materials['Material.056']} geometry={nodes.Cube023.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.002']} geometry={nodes.Cube023_1.geometry} />
      </group>
      <mesh
        material={nodes.Cube004.material}
        geometry={nodes.Cube004.geometry}
        position={[0.91, 0.27, -1]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <mesh
        material={nodes.Cube005.material}
        geometry={nodes.Cube005.geometry}
        position={[2.22, 0.27, 0.21]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <mesh
        material={nodes.Cube006.material}
        geometry={nodes.Cube006.geometry}
        position={[2.27, 0.27, -1.2]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <group position={[1.87, 1.12, -1.83]} rotation={[-3.14, 0.07, 3.14]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.023']} geometry={nodes.Cube009_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.025']} geometry={nodes.Cube009_2.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.004']} geometry={nodes.Cube009_3.geometry} />
      </group>
      <mesh
        material={nodes.Cube008.material}
        geometry={nodes.Cube008.geometry}
        position={[0.91, 0.27, -0.06]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <group position={[-1.25, 1.11, -0.36]} rotation={[0, -1.26, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.029']} geometry={nodes.Cube011_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.032']} geometry={nodes.Cube011_2.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.005']} geometry={nodes.Cube011_3.geometry} />
      </group>
      <group position={[-0.74, 1.11, 1.01]} rotation={[0, -0.09, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.029']} geometry={nodes.Cube012_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.032']} geometry={nodes.Cube012_2.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.005']} geometry={nodes.Cube012_3.geometry} />
      </group>
      <group position={[-0.84, 1.12, -1.68]} rotation={[-3.14, -1.25, 3.14]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.030']} geometry={nodes.Cube013_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.035']} geometry={nodes.Cube013_2.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.006']} geometry={nodes.Cube013_3.geometry} />
      </group>
      <group position={[0.61, 1.12, -1.86]} rotation={[-3.14, -0.07, 3.14]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.030']} geometry={nodes.Cube014_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.035']} geometry={nodes.Cube014_2.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.006']} geometry={nodes.Cube014_3.geometry} />
      </group>
      <mesh
        material={materials['Material.057']}
        geometry={nodes.Cube013.geometry}
        position={[0.75, 0.27, 1.54]}
        rotation={[0, 1.42, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <mesh
        material={materials['Material.057']}
        geometry={nodes.Cube014.geometry}
        position={[0.88, 0.27, -2.59]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <group position={[0.57, 0.48, 0.91]} rotation={[0, 0.09, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.001']} geometry={nodes.Cylinder_1.geometry} />
        <mesh receiveShadow castShadow material={materials.ramen} geometry={nodes.Cylinder_2.geometry} />
      </group>
      <mesh
        material={materials['Material.005']}
        geometry={nodes.Cylinder001.geometry}
        position={[0.64, 0.26, -0.39]}
        rotation={[Math.PI, -1.45, Math.PI]}
        scale={[0.07, 0.08, 0.07]}
      />
      <group position={[1.86, 0.48, 0.83]} rotation={[0, 1.27, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.001']} geometry={nodes.Cylinder002_1.geometry} />
        <mesh receiveShadow castShadow material={materials.ramen} geometry={nodes.Cylinder002_2.geometry} />
      </group>
      <mesh
        material={materials['Material.016']}
        geometry={nodes.Cylinder003.geometry}
        position={[-1.86, 0.84, 3.87]}
        rotation={[0, 0, 1.54]}
      />
      <mesh
        material={materials['Material.016']}
        geometry={nodes.Cylinder004.geometry}
        position={[2.81, 0.27, -2.93]}
        rotation={[0, 0.26, 1.54]}
        scale={[1, 1.02, 1.22]}
      />
      <mesh
        material={materials['Material.016']}
        geometry={nodes.Cylinder005.geometry}
        position={[1.13, 0.28, -0.03]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        material={materials['Material.016']}
        geometry={nodes.Cylinder006.geometry}
        position={[1.13, 0.28, -1.03]}
        scale={[0.03, 0.04, 0.03]}
      />
      <group position={[1.87, 0.48, -1.67]} rotation={[-3.14, 0.07, 3.14]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.022']} geometry={nodes.Cylinder007_1.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.004']} geometry={nodes.Cylinder007_2.geometry} />
      </group>
      <mesh
        material={materials['Material.018']}
        geometry={nodes.Cylinder008.geometry}
        position={[2.02, 0.29, 0.19]}
        scale={[0.03, 0.18, 0.02]}
      />
      <group position={[-1.1, 0.48, -0.39]} rotation={[0, -1.26, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.027']} geometry={nodes.Cylinder009_1.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.005']} geometry={nodes.Cylinder009_2.geometry} />
      </group>
      <group position={[-0.74, 0.48, 0.85]} rotation={[0, -0.09, 0]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.027']} geometry={nodes.Cylinder010_1.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.005']} geometry={nodes.Cylinder010_2.geometry} />
      </group>
      <group position={[-0.69, 0.48, -1.65]} rotation={[-3.14, -1.25, 3.14]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.028']} geometry={nodes.Cylinder011_1.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.006']} geometry={nodes.Cylinder011_2.geometry} />
      </group>
      <group position={[0.61, 0.48, -1.71]} rotation={[-3.14, -0.07, 3.14]} scale={[0.3, 0.3, 0.3]}>
        <mesh receiveShadow castShadow material={materials['Material.028']} geometry={nodes.Cylinder012_1.geometry} />
        <mesh receiveShadow castShadow material={materials['ramen.006']} geometry={nodes.Cylinder012_2.geometry} />
      </group>
      <mesh
        material={materials['Material.020']}
        geometry={nodes.Cylinder013.geometry}
        position={[2.02, 0.29, -1.21]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.037']}
        geometry={nodes.Cylinder014.geometry}
        position={[-0.39, 0.29, -0.81]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.039']}
        geometry={nodes.Cylinder015.geometry}
        position={[-0.39, 0.29, -0.28]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.050']}
        geometry={nodes.Cylinder016.geometry}
        position={[3.12, 0.29, 0.6]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.052']}
        geometry={nodes.Cylinder017.geometry}
        position={[3.12, 0.29, -1.78]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.017']}
        geometry={nodes.Cylinder018.geometry}
        position={[0.98, 0.28, 1.54]}
        rotation={[0, -0.16, 0]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        material={materials['Material.053']}
        geometry={nodes.Cylinder019.geometry}
        position={[1.1, 0.28, -2.56]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh receiveShadow  material={materials['Material.008']} geometry={nodes.Cube002_1.geometry} />
      <mesh receiveShadow  material={materials['Material.010']} geometry={nodes.Cube002_2.geometry} />
      <mesh receiveShadow castShadow material={materials['Material.007']} geometry={nodes.Plane001.geometry} position={[0.79, 0.86, -0.44]} />
      <mesh
        material={materials['Material.060']}
        geometry={nodes.Plane002.geometry}
        position={[0.9, 0.24, -0.56]}
        scale={[0.28, 0.28, 0.28]}
      />
      <mesh
        material={materials['Material.015']}
        geometry={nodes.Plane003.geometry}
        position={[-0.29, 0.24, -0.56]}
        scale={[0.28, 0.28, 0.28]}
      />
      <mesh
        material={materials['Material.040']}
        geometry={nodes.Plane004.geometry}
        position={[1.5, 0.24, -0.56]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh
        material={materials['Material.005']}
        geometry={nodes.Sphere.geometry}
        position={[0.64, 0.31, -0.39]}
        rotation={[Math.PI, -1.45, Math.PI]}
        scale={[0.08, 0.08, 0.08]}
      />
      <mesh
        material={materials['Material.009']}
        geometry={nodes.Sphere001.geometry}
        position={[2.03, 0.49, 0.19]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.019']}
        geometry={nodes.Sphere002.geometry}
        position={[2.03, 0.49, -1.21]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.021']}
        geometry={nodes.Sphere003.geometry}
        position={[-0.38, 0.49, -0.81]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.038']}
        geometry={nodes.Sphere004.geometry}
        position={[-0.38, 0.49, -0.28]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.041']}
        geometry={nodes.Sphere005.geometry}
        position={[2.03, 0.23, -0.29]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.042']}
        geometry={nodes.Sphere006.geometry}
        position={[1.98, 0.24, -0.29]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.043']}
        geometry={nodes.Sphere007.geometry}
        position={[1.98, 0.24, -0.72]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.044']}
        geometry={nodes.Sphere008.geometry}
        position={[2.03, 0.23, -0.72]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.045']}
        geometry={nodes.Sphere009.geometry}
        position={[0.04, 0.23, -0.72]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.046']}
        geometry={nodes.Sphere010.geometry}
        position={[-0.01, 0.24, -0.72]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.047']}
        geometry={nodes.Sphere011.geometry}
        position={[-0.01, 0.24, -0.34]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.048']}
        geometry={nodes.Sphere012.geometry}
        position={[0.04, 0.23, -0.34]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.049']}
        geometry={nodes.Sphere013.geometry}
        position={[3.13, 0.49, 0.6]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.051']}
        geometry={nodes.Sphere014.geometry}
        position={[3.13, 0.49, -1.78]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.005']}
        geometry={nodes.Torus002.geometry}
        position={[0.64, 0.31, -0.39]}
        rotation={[-Math.PI, -1.45, -2.77]}
        scale={[0.29, 0.11, 0.2]}
      />
      <group name="Cone028" position={[2.33, 0.35, -0.55]} rotation={[0, 1.5, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.059']} geometry={nodes.Cone035.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.058']} geometry={nodes.Cone035_1.geometry} />
      </group>
      <mesh
        material={materials['Material.062']}
        geometry={nodes.Plane005.geometry}
        position={[-0.04, 0.24, 0.19]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh
        material={materials['Material.063']}
        geometry={nodes.Plane006.geometry}
        position={[-0.04, 0.24, -1.31]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[0, 0.31, 0.29]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.071']} geometry={nodes.Cone036.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.065']} geometry={nodes.Cone036_1.geometry} />
      </group>
      <group
        name="Cone029"
        position={[-0.51, 0.31, -0.52]}
        rotation={[Math.PI, -1.51, Math.PI]}
        scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.062']} geometry={nodes.Cone037.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.067']} geometry={nodes.Cone037_1.geometry} />
      </group>
      <group position={[-0.12, 0.31, 0.13]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.070']} geometry={nodes.Cone038.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.069']} geometry={nodes.Cone038_1.geometry} />
      </group>
      <group position={[0.03, 0.31, -1.37]} rotation={[-Math.PI, 1.47, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.074']} geometry={nodes.Cone040.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.076']} geometry={nodes.Cone040_1.geometry} />
      </group>
      <group position={[-0.12, 0.31, -1.24]} rotation={[-Math.PI, 1.47, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.014']} geometry={nodes.Cone019_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.061']} geometry={nodes.Cone019_2.geometry} />
      </group>
      <group position={[2.01, 0.31, -1.11]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.081']} geometry={nodes.Cone042.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.082']} geometry={nodes.Cone042_1.geometry} />
      </group>
      <group name="Cone031" position={[-0.59, 0.35, -0.52]} rotation={[Math.PI, -1.5, Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.083']} geometry={nodes.Cone039.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.084']} geometry={nodes.Cone039_1.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('../assets/models/isladn1.glb');
