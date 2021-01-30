import React, { useRef,useEffect } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { useAnimations } from '@react-three/drei/useAnimations'

export default function IslandTwo(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../assets/models/island2.glb')
  const { actions,names } = useAnimations(animations, group);
  useEffect(() => {
    actions[names[0]].play();
    actions[names[1]].play();
    actions[names[2]].play();
    actions[names[3]].play();
    actions[names[4]].play();
    actions[names[5]].play();
    actions[names[6]].play();
    
    actions[names[9]].play();
    actions[names[11]].play();
    actions[names[12]].play();
    actions[names[13]].play();
    actions[names[14]].play();
    actions[names[10]].play();
    actions[names[16]].play();
    actions[names[17]].play();
    actions[names[18]].play();
    actions[names[19]].play();
    actions[names[20]].play();
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh receiveShadow castShadow
        material={materials['Material.086']}
        geometry={nodes.Cone030.geometry}
        position={[2.43, 0.37, -0.57]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.086']}
        geometry={nodes.Cone031.geometry}
        position={[1.78, 0.37, -1.3]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.086']}
        geometry={nodes.Cone032.geometry}
        position={[0.96, 0.37, -1.3]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.087']}
        geometry={nodes.Cone033.geometry}
        position={[1.35, 0.37, 1.26]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.160']}
        geometry={nodes.Cone034.geometry}
        position={[0.47, 0.37, 0.81]}
        rotation={[-Math.PI, 0.23, -Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.160']}
        geometry={nodes.Cone035.geometry}
        position={[-1.17, 0.37, 0.18]}
        rotation={[-Math.PI, 0.23, -Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.160']}
        geometry={nodes.Cone040.geometry}
        position={[-0.02, 0.37, -0.05]}
        rotation={[-Math.PI, 0.23, -Math.PI]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.151']}
        geometry={nodes.Cone041.geometry}
        position={[0.89, 0.37, 1.76]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.161']}
        geometry={nodes.Cone043.geometry}
        position={[-1.09, 0.37, -0.32]}
        rotation={[0, -0.29, 0]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.053']}
        geometry={nodes.Cube017.geometry}
        position={[1.09, 0.28, -0.02]}
        scale={[0.14, 0.14, 0.14]}
      />
      <group position={[1.2, 0.52, -0.1]} scale={[0.29, 0.29, 0.29]}>
        <mesh receiveShadow castShadow material={materials['Material.068']} geometry={nodes.Cube017_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.001']} geometry={nodes.Cube017_2.geometry} />
      </group>
      <group position={[1.49, 0.5, 0.47]} scale={[0.29, 0.29, 0.29]}>
        <mesh receiveShadow castShadow material={materials['Material.068']} geometry={nodes.Cube025_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.001']} geometry={nodes.Cube025_2.geometry} />
      </group>
      <group position={[1.43, 0.75, -0.91]} scale={[0.53, 0.53, 0.53]}>
        <mesh receiveShadow castShadow material={materials['Material.068']} geometry={nodes.Cube001.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.001']} geometry={nodes.Cube001_1.geometry} />
        <mesh receiveShadow castShadow material={materials.ramen} geometry={nodes.Cube001_2.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.070']} geometry={nodes.Cube001_3.geometry} />
      </group>
      <mesh receiveShadow castShadow
        material={nodes.Cube022.material}
        geometry={nodes.Cube022.geometry}
        position={[0.18, 0.27, -0.69]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.103']}
        geometry={nodes.Cube023.geometry}
        position={[1.99, 0.28, -0.21]}
        rotation={[0, -1.57, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.103']}
        geometry={nodes.Cube024.geometry}
        position={[1.99, 0.37, -0.21]}
        rotation={[0, -1.57, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.104']}
        geometry={nodes.Cube025.geometry}
        position={[2.29, 0.37, -0.21]}
        rotation={[0, -1.57, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.104']}
        geometry={nodes.Cube026.geometry}
        position={[2.29, 0.28, -0.21]}
        rotation={[0, -1.57, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.055']}
        geometry={nodes.Cube027.geometry}
        position={[2.29, 0.28, 0.33]}
        rotation={[0, -1.57, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.065']}
        geometry={nodes.Cube028.geometry}
        position={[2.29, 0.37, 0.33]}
        rotation={[0, -1.57, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.037']}
        geometry={nodes.Cube029.geometry}
        position={[1.99, 0.37, 0.33]}
        rotation={[0, -1.57, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.072']}
        geometry={nodes.Cube030.geometry}
        position={[1.99, 0.28, 0.33]}
        rotation={[0, -1.57, 0]}
        scale={[0.13, 0.13, 0.13]}
      />
      <group position={[2.16, 0.43, -0.64]} rotation={[0, 1.55, 0]} scale={[0.2, 0.2, 0.2]}>
        <mesh receiveShadow castShadow material={materials['Material.091']} geometry={nodes.Cube028_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.092']} geometry={nodes.Cube028_2.geometry} />
      </group>
      <mesh receiveShadow castShadow
        material={materials['Material.116']}
        geometry={nodes.Cube036.geometry}
        position={[-2.04, 0.27, 1.11]}
        rotation={[0, -0.53, 0]}
      />
      <mesh receiveShadow castShadow material={materials['Material.121']} geometry={nodes.Cube037.geometry} position={[-1.19, 0.27, 1.14]} />
      <mesh receiveShadow castShadow
        material={materials['Material.122']}
        geometry={nodes.Cube038.geometry}
        position={[-1.87, 0.27, 0.97]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.123']}
        geometry={nodes.Cube039.geometry}
        position={[-1.87, 0.27, 1.87]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh receiveShadow castShadow
        material={nodes.Cube040.material}
        geometry={nodes.Cube040.geometry}
        position={[-0.31, 0.27, 1.11]}
        rotation={[0, -0.03, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <mesh receiveShadow castShadow
        material={nodes.Cube041.material}
        geometry={nodes.Cube041.geometry}
        position={[0.54, 0.27, 1.94]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.017']}
        geometry={nodes.Cylinder004.geometry}
        position={[3.21, 0.24, -4.09]}
        rotation={[1.57, 0, 1.12]}
        scale={[0.2, 0.24, 0.19]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.062']}
        geometry={nodes.Cylinder021.geometry}
        position={[2.02, 0.29, -3.08]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.074']}
        geometry={nodes.Cylinder023.geometry}
        position={[0.61, 0.29, -0.42]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.159']}
        geometry={nodes.Cylinder024.geometry}
        position={[0.62, 0.29, 0.2]}
        rotation={[0, 1.5, 0]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.084']}
        geometry={nodes.Cylinder025.geometry}
        position={[0.43, 0.28, -0.69]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.110']}
        geometry={nodes.Cylinder026.geometry}
        position={[0.45, 0.29, -2.23]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.112']}
        geometry={nodes.Cylinder027.geometry}
        position={[1.21, 0.29, -2.65]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.130']}
        geometry={nodes.Cylinder032.geometry}
        position={[-1.84, 0.24, 1.31]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.130']}
        geometry={nodes.Cylinder033.geometry}
        position={[-1.88, 0.24, 1.31]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.130']}
        geometry={nodes.Cylinder034.geometry}
        position={[-1.88, 0.24, 1.28]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.130']}
        geometry={nodes.Cylinder035.geometry}
        position={[-1.84, 0.24, 1.29]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.133']}
        geometry={nodes.Cylinder036.geometry}
        position={[-1.62, 0.24, 1.61]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.133']}
        geometry={nodes.Cylinder037.geometry}
        position={[-1.66, 0.24, 1.6]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.133']}
        geometry={nodes.Cylinder038.geometry}
        position={[-1.66, 0.24, 1.63]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.133']}
        geometry={nodes.Cylinder039.geometry}
        position={[-1.62, 0.24, 1.63]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.136']}
        geometry={nodes.Cylinder040.geometry}
        position={[-1.65, 0.24, 1.22]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.136']}
        geometry={nodes.Cylinder041.geometry}
        position={[-1.65, 0.24, 1.18]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.136']}
        geometry={nodes.Cylinder042.geometry}
        position={[-1.62, 0.24, 1.19]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.136']}
        geometry={nodes.Cylinder043.geometry}
        position={[-1.63, 0.24, 1.22]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.139']}
        geometry={nodes.Cylinder044.geometry}
        position={[-2.03, 0.24, 1.6]}
        rotation={[0, 0.75, 0]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.139']}
        geometry={nodes.Cylinder045.geometry}
        position={[-2.06, 0.24, 1.62]}
        rotation={[0, 0.75, 0]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.139']}
        geometry={nodes.Cylinder046.geometry}
        position={[-2.04, 0.24, 1.64]}
        rotation={[0, 0.75, 0]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.139']}
        geometry={nodes.Cylinder047.geometry}
        position={[-2.01, 0.24, 1.61]}
        rotation={[0, 0.75, 0]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.142']}
        geometry={nodes.Cylinder048.geometry}
        position={[-1.39, 0.24, 1.42]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.142']}
        geometry={nodes.Cylinder049.geometry}
        position={[-1.38, 0.24, 1.38]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.142']}
        geometry={nodes.Cylinder050.geometry}
        position={[-1.41, 0.24, 1.38]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.142']}
        geometry={nodes.Cylinder051.geometry}
        position={[-1.41, 0.24, 1.42]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0, -0.01, -0.01]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.146']}
        geometry={nodes.Cylinder056.geometry}
        position={[-0.31, 0.28, 0.87]}
        rotation={[0, 1.54, 0]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.163']}
        geometry={nodes.Cylinder058.geometry}
        position={[1.03, 0.29, 2.06]}
        rotation={[0, 1.5, 0]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.164']}
        geometry={nodes.Cylinder059.geometry}
        position={[0.79, 0.28, 1.94]}
        rotation={[0, 0, 0]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.016']}
        geometry={nodes.Cylinder061.geometry}
        position={[2.64, 0.73, 2.29]}
        scale={[0.12, 0.12, 0.12]}
      />
      <group position={[0.75, 0, -0.46]}>
        <mesh receiveShadow material={materials['Material.002']} geometry={nodes.Cube005.geometry} />
        <mesh receiveShadow material={materials['Material.007']} geometry={nodes.Cube005_1.geometry} />
        <mesh receiveShadow material={materials['Material.090']} geometry={nodes.Cube005_2.geometry} />
        <mesh receiveShadow material={materials['Material.113']} geometry={nodes.Cube005_3.geometry} />
      </group>
      <mesh receiveShadow castShadow
        material={materials['Material.082']}
        geometry={nodes.Plane005.geometry}
        position={[-0.18, 0.24, -0.94]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.083']}
        geometry={nodes.Plane006.geometry}
        position={[1.31, 0.24, -0.1]}
        scale={[0.41, 0.41, 0.41]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.088']}
        geometry={nodes.Plane007.geometry}
        position={[-0.47, 0.24, 0.65]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.093']}
        geometry={nodes.Plane009.geometry}
        position={[2.15, 0.24, -0.6]}
        scale={[0.17, 0.26, 0.58]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.095']}
        geometry={nodes.Plane011.geometry}
        position={[-0.21, 0.24, 1.7]}
        rotation={[0, -0.02, 0]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.096']}
        geometry={nodes.Plane012.geometry}
        position={[1.17, 0.24, 1.73]}
        rotation={[0, -0.02, 0]}
        scale={[0.26, 0.28, 0.28]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.097']}
        geometry={nodes.Plane013.geometry}
        position={[2.18, 0.24, 0.7]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.099']}
        geometry={nodes.Plane014.geometry}
        position={[-0.17, 0.24, -0.15]}
        rotation={[0, -0.02, 0]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.061']}
        geometry={nodes.Sphere015.geometry}
        position={[2.03, 0.49, -3.08]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.073']}
        geometry={nodes.Sphere019.geometry}
        position={[0.62, 0.49, -0.42]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.077']}
        geometry={nodes.Sphere021.geometry}
        position={[0.78, 0.23, -1.1]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.078']}
        geometry={nodes.Sphere022.geometry}
        position={[0.73, 0.24, -1.1]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.079']}
        geometry={nodes.Sphere023.geometry}
        position={[0.72, 0.24, -0.74]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.080']}
        geometry={nodes.Sphere024.geometry}
        position={[0.77, 0.23, -0.74]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.109']}
        geometry={nodes.Sphere029.geometry}
        position={[0.46, 0.49, -2.23]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.111']}
        geometry={nodes.Sphere030.geometry}
        position={[1.21, 0.49, -2.65]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.129']}
        geometry={nodes.Sphere042.geometry}
        position={[-1.89, 0.26, 1.3]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.132']}
        geometry={nodes.Sphere043.geometry}
        position={[-1.85, 0.26, 1.3]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.129']}
        geometry={nodes.Sphere044.geometry}
        position={[-1.87, 0.26, 1.3]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.129']}
        geometry={nodes.Sphere045.geometry}
        position={[-1.85, 0.26, 1.3]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.130']}
        geometry={nodes.Sphere046.geometry}
        position={[-1.82, 0.26, 1.3]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.133']}
        geometry={nodes.Sphere047.geometry}
        position={[-1.6, 0.26, 1.62]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.132']}
        geometry={nodes.Sphere048.geometry}
        position={[-1.65, 0.26, 1.62]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.129']}
        geometry={nodes.Sphere049.geometry}
        position={[-1.63, 0.26, 1.62]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.132']}
        geometry={nodes.Sphere050.geometry}
        position={[-1.67, 0.26, 1.62]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.135']}
        geometry={nodes.Sphere051.geometry}
        position={[-1.63, 0.26, 1.17]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.132']}
        geometry={nodes.Sphere052.geometry}
        position={[-1.64, 0.26, 1.21]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.135']}
        geometry={nodes.Sphere053.geometry}
        position={[-1.64, 0.26, 1.19]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.136']}
        geometry={nodes.Sphere054.geometry}
        position={[-1.65, 0.26, 1.24]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.139']}
        geometry={nodes.Sphere055.geometry}
        position={[-2.01, 0.26, 1.59]}
        rotation={[0, 0.75, 0]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.138']}
        geometry={nodes.Sphere056.geometry}
        position={[-2.05, 0.26, 1.63]}
        rotation={[0, 0.75, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.132']}
        geometry={nodes.Sphere057.geometry}
        position={[-2.03, 0.26, 1.61]}
        rotation={[0, 0.75, 0]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.138']}
        geometry={nodes.Sphere058.geometry}
        position={[-2.06, 0.26, 1.64]}
        rotation={[0, 0.75, 0]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.142']}
        geometry={nodes.Sphere059.geometry}
        position={[-1.41, 0.26, 1.44]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.141']}
        geometry={nodes.Sphere060.geometry}
        position={[-1.4, 0.26, 1.39]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.141']}
        geometry={nodes.Sphere061.geometry}
        position={[-1.4, 0.26, 1.41]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0.03, 0.03, 0.03]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.141']}
        geometry={nodes.Sphere062.geometry}
        position={[-1.39, 0.26, 1.37]}
        rotation={[Math.PI, -1.38, Math.PI]}
        scale={[0.02, 0.02, 0.02]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.147']}
        geometry={nodes.Sphere067.geometry}
        position={[-0.26, 0.23, 0.59]}
        rotation={[0, 1.5, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.148']}
        geometry={nodes.Sphere068.geometry}
        position={[-0.27, 0.24, 0.64]}
        rotation={[0, 1.5, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.158']}
        geometry={nodes.Sphere075.geometry}
        position={[0.62, 0.49, 0.2]}
        rotation={[0, 1.5, 0]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.162']}
        geometry={nodes.Sphere076.geometry}
        position={[1.03, 0.49, 2.05]}
        rotation={[0, 1.5, 0]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh receiveShadow castShadow
        name="Text"
        material={materials['Material.068']}
        geometry={nodes.Text.geometry}
        position={[1.43, 3.16, -0.89]}
        rotation={[Math.PI / 2, 0, -0.05]}
        scale={[0.28, 0.28, 0.28]}
      />
      <group position={[0.24, 0.31, 0.29]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.082']} geometry={nodes.Cone036.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.013']} geometry={nodes.Cone036_1.geometry} />
      </group>
      <group position={[0.13, 0.31, 0.13]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.015']} geometry={nodes.Cone002_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.069']} geometry={nodes.Cone002_2.geometry} />
      </group>
      <group position={[-0.12, 0.31, -1.24]} rotation={[-Math.PI, 1.47, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.017']} geometry={nodes.Cone019.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.009']} geometry={nodes.Cone019_1.geometry} />
      </group>
      <group position={[0.03, 0.31, -1.37]} rotation={[-Math.PI, 1.47, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.002']} geometry={nodes.Cone001_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.076']} geometry={nodes.Cone001_2.geometry} />
      </group>
      <group name="Cone001" position={[1.11, 0.31, -0.88]} rotation={[0, 1.5, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.006']} geometry={nodes.Cone042.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.005']} geometry={nodes.Cone042_1.geometry} />
      </group>
      <mesh receiveShadow castShadow
        material={materials['Material.006']}
        geometry={nodes.Plane002.geometry}
        position={[0.2, 0.24, 0.19]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.063']}
        geometry={nodes.Plane001.geometry}
        position={[-0.04, 0.24, -1.31]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[-1.2, 0.31, -0.08]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.024']} geometry={nodes.Cone004_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.023']} geometry={nodes.Cone004_2.geometry} />
      </group>
      <group position={[-1.08, 0.31, 0.08]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.018']} geometry={nodes.Cone003_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.020']} geometry={nodes.Cone003_2.geometry} />
      </group>
      <mesh receiveShadow castShadow
        material={materials.ramen}
        geometry={nodes.Plane003.geometry}
        position={[-1.12, 0.24, -0.01]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh receiveShadow castShadow
        material={materials['Material.004']}
        geometry={nodes.bike001.geometry}
        position={[0.18, 0.33, -1.21]}
        rotation={[0, -0.72, 1.57]}
        scale={[0.05, 0.06, 0.06]}>
        <mesh receiveShadow castShadow
          material={materials['Material.008']}
          geometry={nodes.Cube001_4.geometry}
          position={[-1.73, 0, -0.01]}
          scale={[-0.33, -0.33, -0.33]}
        />
        <group position={[-1.74, 0.03, 1.03]} scale={[-0.37, -0.37, -0.37]}>
          <mesh receiveShadow castShadow material={materials['Material.043']} geometry={nodes.Cylinder004_1.geometry} />
          <mesh receiveShadow castShadow material={materials['Material.042']} geometry={nodes.Cylinder004_2.geometry} />
        </group>
        <group position={[-1.74, 0.03, -1.17]} scale={[-0.37, -0.37, -0.37]}>
          <mesh receiveShadow castShadow material={materials['Material.045']} geometry={nodes.Cylinder005_1.geometry} />
          <mesh receiveShadow castShadow material={materials['Material.044']} geometry={nodes.Cylinder005_2.geometry} />
        </group>
      </mesh>
      <group name="Cone013" position={[3.22, 0.26, -4.12]} rotation={[Math.PI, -0.51, Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.050']} geometry={nodes.Cone010.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.059']} geometry={nodes.Cone010_1.geometry} />
      </group>
      <mesh receiveShadow castShadow
        name="Cube003"
        material={materials['Material.073']}
        geometry={nodes.Cube003.geometry}
        position={[3.21, 0.27, -4.11]}
        rotation={[-Math.PI, 1.15, -1.58]}
        scale={[0.05, 0.06, 0.06]}
      />
      <mesh receiveShadow castShadow
        name="bike"
        material={materials['Material.073']}
        geometry={nodes.bike.geometry}
        position={[3.21, 0.18, -4.11]}
        rotation={[Math.PI, 1.15, -1.58]}
        scale={[-0.02, -0.02, -0.02]}
      />
      <group
        name="Cylinder005"
        position={[3.26, 0.18, -4.14]}
        rotation={[-Math.PI, 1.15, -1.58]}
        scale={[-0.02, -0.02, -0.02]}>
        <mesh receiveShadow castShadow material={materials['Material.052']} geometry={nodes.Cylinder007_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.051']} geometry={nodes.Cylinder007_2.geometry} />
      </group>
      <group
        name="Cylinder002"
        position={[3.15, 0.18, -4.09]}
        rotation={[-Math.PI, 1.15, -1.58]}
        scale={[-0.02, -0.02, -0.02]}>
        <mesh receiveShadow castShadow material={materials['Material.050']} geometry={nodes.Cylinder006_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.049']} geometry={nodes.Cylinder006_2.geometry} />
      </group>
      <mesh receiveShadow castShadow
        material={materials['Material.014']}
        geometry={nodes.Plane015.geometry}
        position={[2.19, 0.24, 0.12]}
        scale={[0.69, 0.58, 0.57]}
      />
      <group name="Cone014" position={[1.11, 0.31, -0.88]} rotation={[0, 1.5, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.003']} geometry={nodes.Cone011.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.010']} geometry={nodes.Cone011_1.geometry} />
      </group>
      <mesh receiveShadow castShadow
        name="bike002"
        material={materials['Material.055']}
        geometry={nodes.bike002.geometry}
        position={[3.21, 0.18, -4.11]}
        rotation={[Math.PI, 1.15, -1.58]}
        scale={[-0.02, -0.02, -0.02]}
      />
      <group name="Cone015" position={[3.22, 0.26, -4.12]} rotation={[Math.PI, -0.51, Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.033']} geometry={nodes.Cone012_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.039']} geometry={nodes.Cone012_2.geometry} />
      </group>
      <mesh receiveShadow castShadow
        name="Cube002"
        material={materials['Material.055']}
        geometry={nodes.Cube002.geometry}
        position={[3.21, 0.27, -4.11]}
        rotation={[-Math.PI, 1.15, -1.58]}
        scale={[0.05, 0.06, 0.06]}
      />
      <group
        name="Cylinder007"
        position={[3.15, 0.18, -4.09]}
        rotation={[-Math.PI, 1.15, -1.58]}
        scale={[-0.02, -0.02, -0.02]}>
        <mesh receiveShadow castShadow material={materials['Material.031']} geometry={nodes.Cylinder002_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.028']} geometry={nodes.Cylinder002_2.geometry} />
      </group>
      <group
        name="Cylinder006"
        position={[3.26, 0.18, -4.14]}
        rotation={[-Math.PI, 1.15, -1.58]}
        scale={[-0.02, -0.02, -0.02]}>
        <mesh receiveShadow castShadow material={materials['Material.021']} geometry={nodes.Cylinder001.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.012']} geometry={nodes.Cylinder001_1.geometry} />
      </group>
      <mesh receiveShadow castShadow
        name="bike003"
        material={materials['Material.063']}
        geometry={nodes.bike003.geometry}
        position={[3.21, 0.18, -4.11]}
        rotation={[Math.PI, 1.15, -1.58]}
        scale={[-0.02, -0.02, -0.02]}
      />
      <group name="Cone016" position={[3.22, 0.26, -4.12]} rotation={[Math.PI, -0.51, Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh receiveShadow castShadow material={materials['Material.073']} geometry={nodes.Cone013_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.085']} geometry={nodes.Cone013_2.geometry} />
      </group>
      <mesh receiveShadow castShadow
        name="Cube004"
        material={materials['Material.063']}
        geometry={nodes.Cube004.geometry}
        position={[3.21, 0.27, -4.11]}
        rotation={[-Math.PI, 1.15, -1.58]}
        scale={[0.05, 0.06, 0.06]}
      />
      <group
        name="Cylinder009"
        position={[3.26, 0.18, -4.14]}
        rotation={[-Math.PI, 1.15, -1.58]}
        scale={[-0.02, -0.02, -0.02]}>
        <mesh receiveShadow castShadow material={materials['Material.060']} geometry={nodes.Cylinder008_1.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.057']} geometry={nodes.Cylinder008_2.geometry} />
      </group>
      <group
        name="Cylinder008"
        position={[3.15, 0.18, -4.09]}
        rotation={[-Math.PI, 1.15, -1.58]}
        scale={[-0.02, -0.02, -0.02]}>
        <mesh receiveShadow castShadow material={materials['Material.066']} geometry={nodes.Cylinder003.geometry} />
        <mesh receiveShadow castShadow material={materials['Material.056']} geometry={nodes.Cylinder003_1.geometry} />
      </group>
      <mesh receiveShadow castShadow
        material={materials['Material.098']}
        geometry={nodes.Plane010.geometry}
        position={[-0.46, 0.24, -0.6]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
    </group>
  )
}

useGLTF.preload('../assets/models/island2.glb')
