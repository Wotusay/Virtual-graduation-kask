
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useAnimations } from '@react-three/drei/useAnimations'

export default function Island(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../assets/models/island3.glb')
  const { actions,names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].play();
    actions[names[2]].play();
    actions[names[3]].play();
    actions[names[4]].play();
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow material={materials['Material.001']} geometry={nodes.Cube004.geometry} />
      <mesh castShadow receiveShadow material={materials['Material.002']} geometry={nodes.Cube004_1.geometry} />
      <mesh castShadow receiveShadow 
        material={materials['Material.243']}
        geometry={nodes.Cone050.geometry}
        position={[0.79, 0.37, 1.04]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.244']}
        geometry={nodes.Cone051.geometry}
        position={[0.78, 0.37, 1.84]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.244']}
        geometry={nodes.Cone052.geometry}
        position={[1.39, 0.37, 2.24]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.245']}
        geometry={nodes.Cone053.geometry}
        position={[-0.63, 0.37, -1.95]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.245']}
        geometry={nodes.Cone054.geometry}
        position={[1.37, 0.37, -1.21]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.246']}
        geometry={nodes.Cone055.geometry}
        position={[0.84, 0.37, -0.51]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={nodes.Cube046.material}
        geometry={nodes.Cube046.geometry}
        position={[1.04, 0.27, 0.37]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <group position={[-0.37, 0.72, 0.1]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[0.45, 0.45, 0.45]}>
        <mesh castShadow receiveShadow material={materials['Material.208']} geometry={nodes.Cube047_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.207']} geometry={nodes.Cube047_2.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.121']} geometry={nodes.Cube047_3.geometry} />
      </group>
      <mesh castShadow receiveShadow
        material={materials['Material.211']}
        geometry={nodes.Cylinder072.geometry}
        position={[-0.82, 0.29, -1.64]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.218']}
        geometry={nodes.Cylinder073.geometry}
        position={[-0.11, 0.29, 1.91]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.215']}
        geometry={nodes.Cylinder074.geometry}
        position={[-0.09, 0.29, -1.64]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.219']}
        geometry={nodes.Cylinder075.geometry}
        position={[-0.84, 0.29, 1.91]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.222']}
        geometry={nodes.Cylinder076.geometry}
        position={[1.29, 0.28, 0.37]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.230']}
        geometry={nodes.Cylinder077.geometry}
        position={[-2.26, 0.48, 0.16]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.04, 0.29, 0.04]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.233']}
        geometry={nodes.Cylinder078.geometry}
        position={[-2.26, 0.48, -0.72]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.04, 0.29, 0.04]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.235']}
        geometry={nodes.Cylinder079.geometry}
        position={[-2.26, 0.48, 1.04]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.04, 0.29, 0.04]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.242']}
        geometry={nodes.Cylinder080.geometry}
        position={[1.06, 0.29, -0.11]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.185']}
        geometry={nodes.Plane018.geometry}
        position={[-0.27, 0.24, 0.17]}
        rotation={[0, -1.57, 0]}
        scale={[2.17, 1.24, 2.22]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.236']}
        geometry={nodes.Plane019.geometry}
        position={[0.6, 0.25, 0.08]}
        rotation={[0, 0, 0]}
        scale={[0.32, 0.34, 0.34]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.234']}
        geometry={nodes.Plane020.geometry}
        position={[-2.26, 0.25, 1.04]}
        rotation={[0, 1.57, 0]}
        scale={[0.52, 0.56, 0.56]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.247']}
        geometry={nodes.Plane021.geometry}
        position={[0.66, 0.24, -1.13]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.248']}
        geometry={nodes.Plane022.geometry}
        position={[-1.47, 0.24, -1.13]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.249']}
        geometry={nodes.Plane023.geometry}
        position={[-1.49, 0.24, 0.3]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.250']}
        geometry={nodes.Plane024.geometry}
        position={[0.6, 0.25, 0.08]}
        rotation={[0, 0, 0]}
        scale={[0.32, 0.34, 0.34]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.251']}
        geometry={nodes.Plane025.geometry}
        position={[0.66, 0.24, -1.13]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.252']}
        geometry={nodes.Plane026.geometry}
        position={[-0.51, 0.24, -1.45]}
        rotation={[0, 0, 0]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.253']}
        geometry={nodes.Plane027.geometry}
        position={[0.66, 0.24, -1.13]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.254']}
        geometry={nodes.Plane028.geometry}
        position={[-1.18, 0.24, -1.45]}
        rotation={[0, 0, 0]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.255']}
        geometry={nodes.Plane029.geometry}
        position={[-1.23, 0.24, 1.53]}
        rotation={[0, 0, 0]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.256']}
        geometry={nodes.Plane030.geometry}
        position={[-0.56, 0.24, 1.53]}
        rotation={[0, 0, 0]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.257']}
        geometry={nodes.Plane031.geometry}
        position={[-1.49, 0.24, 0.47]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.258']}
        geometry={nodes.Plane032.geometry}
        position={[0.66, 0.24, 0.49]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[0.33, 0.28, 0.28]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.210']}
        geometry={nodes.Sphere093.geometry}
        position={[-0.82, 0.49, -1.63]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.216']}
        geometry={nodes.Sphere096.geometry}
        position={[-0.11, 0.49, 1.91]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.214']}
        geometry={nodes.Sphere097.geometry}
        position={[-0.09, 0.49, -1.63]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.217']}
        geometry={nodes.Sphere098.geometry}
        position={[-0.84, 0.49, 1.91]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.223']}
        geometry={nodes.Sphere099.geometry}
        position={[0.41, 0.23, 0.35]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.224']}
        geometry={nodes.Sphere100.geometry}
        position={[0.46, 0.24, 0.34]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.225']}
        geometry={nodes.Sphere101.geometry}
        position={[0.46, 0.24, -0.11]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.226']}
        geometry={nodes.Sphere102.geometry}
        position={[0.41, 0.23, -0.1]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.234']}
        geometry={nodes.Sphere103.geometry}
        position={[-2.26, 0.82, 0.17]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.234']}
        geometry={nodes.Sphere104.geometry}
        position={[-2.26, 0.82, -0.72]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.234']}
        geometry={nodes.Sphere105.geometry}
        position={[-2.26, 0.82, 1.04]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.26, 0.26, 0.26]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.237']}
        geometry={nodes.Sphere106.geometry}
        position={[1.46, 0.23, -0.1]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.238']}
        geometry={nodes.Sphere107.geometry}
        position={[1.51, 0.24, -0.11]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.239']}
        geometry={nodes.Sphere108.geometry}
        position={[1.51, 0.24, 0.34]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.240']}
        geometry={nodes.Sphere109.geometry}
        position={[1.46, 0.23, 0.35]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.241']}
        geometry={nodes.Sphere110.geometry}
        position={[1.06, 0.49, -0.11]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.004']}
        geometry={nodes.Cone003.geometry}
        position={[2.5, 0.37, 2.22]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.004']}
        geometry={nodes.Cone002.geometry}
        position={[2.86, 0.37, 2.52]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.003']}
        geometry={nodes.Cone001.geometry}
        position={[2.42, 0.37, 2.77]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.006']}
        geometry={nodes.Cone006.geometry}
        position={[-2.56, 0.37, -1.5]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.005']}
        geometry={nodes.Cone005.geometry}
        position={[-1.53, 0.37, -1.99]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.005']}
        geometry={nodes.Cone004.geometry}
        position={[-1.04, 0.37, -2.28]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.010']}
        geometry={nodes.Cylinder002.geometry}
        position={[-1.87, 0.29, 1.89]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.009']}
        geometry={nodes.Sphere002.geometry}
        position={[-1.87, 0.49, 1.89]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.014']}
        geometry={nodes.Cylinder003.geometry}
        position={[-1.87, 0.29, 1.89]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.013']}
        geometry={nodes.Sphere005.geometry}
        position={[-1.87, 0.49, 1.89]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.012']}
        geometry={nodes.Sphere004.geometry}
        position={[1.51, 0.24, 0.34]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.011']}
        geometry={nodes.Sphere003.geometry}
        position={[1.46, 0.23, 0.35]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.016']}
        geometry={nodes.Sphere007.geometry}
        position={[-1.81, 0.24, -0.33]}
        rotation={[0, 1.56, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.015']}
        geometry={nodes.Sphere006.geometry}
        position={[-1.81, 0.23, -0.38]}
        rotation={[0, 1.56, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.018']}
        geometry={nodes.Sphere009.geometry}
        position={[-1.81, 0.23, 0.73]}
        rotation={[0, 1.56, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.017']}
        geometry={nodes.Sphere008.geometry}
        position={[-1.81, 0.24, 0.78]}
        rotation={[0, 1.56, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.021']}
        geometry={nodes.Cylinder004.geometry}
        position={[-0.84, 0.29, 1.91]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.020']}
        geometry={nodes.Plane001.geometry}
        position={[-0.27, 0.24, 0.17]}
        rotation={[0, -1.57, 0]}
        scale={[2.17, 1.24, 2.22]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.019']}
        geometry={nodes.Sphere010.geometry}
        position={[-0.84, 0.49, 1.91]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh castShadow receiveShadow
        material={nodes.Cube001.material}
        geometry={nodes.Cube001.geometry}
        position={[-1.84, 0.27, 0.18]}
        rotation={[-Math.PI, 0.06, -Math.PI]}
        scale={[1.35, 1.35, 1.35]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.022']}
        geometry={nodes.Cylinder005.geometry}
        position={[-1.85, 0.28, 0.43]}
        rotation={[Math.PI, -1.51, Math.PI]}
        scale={[0.03, 0.04, 0.03]}
      />
      <group name="Cone011" position={[-2.79, 0.23, 2.74]} rotation={[0, 0.1, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.041']} geometry={nodes.Cone010_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.076']} geometry={nodes.Cone010_2.geometry} />
      </group>
      <group position={[1.38, 0.32, -1.04]} rotation={[-Math.PI, 1.47, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.033']} geometry={nodes.Cone019_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.035']} geometry={nodes.Cone019_2.geometry} />
      </group>
      <group position={[-1.65, 0.32, 1.94]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.031']} geometry={nodes.Cone009_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.069']} geometry={nodes.Cone009_2.geometry} />
      </group>
      <group position={[1.47, 0.32, 1.07]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.028']} geometry={nodes.Cone008_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.030']} geometry={nodes.Cone008_2.geometry} />
      </group>
      <group position={[1.35, 0.32, 0.91]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.025']} geometry={nodes.Cone007_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.027']} geometry={nodes.Cone007_2.geometry} />
      </group>
      <group position={[-1.53, 0.32, 2.1]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.082']} geometry={nodes.Cone036.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.024']} geometry={nodes.Cone036_1.geometry} />
      </group>
      <mesh castShadow receiveShadow
        material={materials['Material.063']}
        geometry={nodes.Plane004.geometry}
        position={[1.45, 0.26, -1.11]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.023']}
        geometry={nodes.Plane002.geometry}
        position={[-1.57, 0.26, 2.01]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh castShadow receiveShadow
        material={materials.ramen}
        geometry={nodes.Plane003.geometry}
        position={[1.43, 0.26, 0.98]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[-2.15, 0.32, -1.42]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.040']} geometry={nodes.Cone012_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.042']} geometry={nodes.Cone012_2.geometry} />
      </group>
      <group position={[-2.02, 0.32, -1.26]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.037']} geometry={nodes.Cone011_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.039']} geometry={nodes.Cone011_2.geometry} />
      </group>
      <mesh castShadow receiveShadow
        material={materials['ramen.001']}
        geometry={nodes.Plane005.geometry}
        position={[-2.07, 0.26, -1.35]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[-2.26, 0.32, -0.26]} rotation={[-Math.PI, 1.47, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.043']} geometry={nodes.Cone013_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.045']} geometry={nodes.Cone013_2.geometry} />
      </group>
      <group position={[-2.25, 0.32, -0.19]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.049']} geometry={nodes.Cone015_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.051']} geometry={nodes.Cone015_2.geometry} />
      </group>
      <mesh castShadow receiveShadow
        material={materials['Material.007']}
        geometry={nodes.Cylinder061.geometry}
        position={[-2.66, 0.23, 2.83]}
        rotation={[0.02, 0.01, 3.14]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.052']}
        geometry={nodes.Cylinder001.geometry}
        position={[-2.6, 0.21, -3.33]}
        rotation={[0.02, -0.21, -3.14]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.054']}
        geometry={nodes.Plane006.geometry}
        position={[-2.26, 0.25, 0.15]}
        rotation={[0, 1.57, 0]}
        scale={[0.52, 0.56, 0.56]}
      />
      <mesh castShadow receiveShadow
        material={materials['Material.232']}
        geometry={nodes.Plane007.geometry}
        position={[-2.26, 0.25, -0.73]}
        rotation={[0, 1.57, 0]}
        scale={[0.52, 0.56, 0.56]}
      />
      <group position={[-2.71, 0.19, 2.82]} rotation={[-Math.PI, 1.47, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.046']} geometry={nodes.Cone014_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.048']} geometry={nodes.Cone014_2.geometry} />
      </group>
      <group name="Cone018" position={[-2.79, 0.23, 2.84]} rotation={[0, 0.1, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.049']} geometry={nodes.Cone016_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.056']} geometry={nodes.Cone016_2.geometry} />
      </group>
      <group name="Cone020" position={[-2.79, 0.23, 2.74]} rotation={[0, 0.1, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.060']} geometry={nodes.Cone018_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.062']} geometry={nodes.Cone018_2.geometry} />
      </group>
      <group name="Cone019" position={[-2.79, 0.23, 2.84]} rotation={[0, 0.1, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh castShadow receiveShadow material={materials['Material.057']} geometry={nodes.Cone017_1.geometry} />
        <mesh castShadow receiveShadow material={materials['Material.059']} geometry={nodes.Cone017_2.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('../assets/models/island3.glb')
