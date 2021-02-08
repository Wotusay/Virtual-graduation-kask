import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

import { useAnimations } from '@react-three/drei/useAnimations'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../assets/models/island4.glb')
  const { actions,names } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Material.001']} geometry={nodes.Cube003.geometry} />
      <mesh material={materials['Material.020']} geometry={nodes.Cube003_1.geometry} />
      <mesh material={materials.Material} geometry={nodes.Cube003_2.geometry} />
      <mesh material={materials['Material.038']} geometry={nodes.Cube003_3.geometry} />
      <group position={[0.38, 0.32, -0.71]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.029']} geometry={nodes.Cone009_1.geometry} />
        <mesh material={materials['Material.069']} geometry={nodes.Cone009_2.geometry} />
      </group>
      <group position={[0.6, 0.32, -0.48]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.083']} geometry={nodes.Cone036_1.geometry} />
        <mesh material={materials['Material.024']} geometry={nodes.Cone036_2.geometry} />
      </group>
      <mesh
        material={nodes.Cube001.material}
        geometry={nodes.Cube001.geometry}
        position={[-1.01, 0.27, 2.44]}
        rotation={[0, -1.11, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <mesh
        material={materials['Material.022']}
        geometry={nodes.Cylinder005.geometry}
        position={[-0.79, 0.28, 2.33]}
        rotation={[0, 0.47, 0]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        material={materials['Material.036']}
        geometry={nodes.Plane001.geometry}
        position={[-0.12, 0.24, -0.93]}
        rotation={[0, -1.57, 0]}
        scale={[0.75, 0.43, 0.77]}
      />
      <mesh
        material={materials['Material.236']}
        geometry={nodes.Plane019.geometry}
        position={[0.48, 0.23, 0.38]}
        rotation={[0, 0, 0]}
        scale={[0.23, 0.34, 0.44]}
      />
      <group position={[-0.04, 0.5, 0.82]} scale={[0.72, 0.72, 0.72]}>
        <mesh material={materials['Material.001']} geometry={nodes.Cube012.geometry} />
        <mesh material={materials['Material.124']} geometry={nodes.Cube012_1.geometry} />
        <mesh material={materials.ramen} geometry={nodes.Cube012_2.geometry} />
        <mesh material={materials['Material.096']} geometry={nodes.Cube012_3.geometry} />
      </group>
      <mesh
        material={materials['Material.126']}
        geometry={nodes.Cone018.geometry}
        position={[1.64, 0.37, 0.11]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.125']}
        geometry={nodes.Cone011.geometry}
        position={[1.89, 0.37, -0.47]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.125']}
        geometry={nodes.Cone010.geometry}
        position={[1.29, 0.37, -0.42]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.129']}
        geometry={nodes.Cylinder006.geometry}
        position={[-0.85, 0.29, -2.19]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.128']}
        geometry={nodes.Sphere011.geometry}
        position={[-0.85, 0.49, -2.18]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.127']}
        geometry={nodes.Sphere001.geometry}
        position={[-0.85, 0.49, -2.18]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.132']}
        geometry={nodes.Cylinder007.geometry}
        position={[0.65, 0.29, -2.19]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.131']}
        geometry={nodes.Sphere013.geometry}
        position={[0.65, 0.49, -2.18]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.130']}
        geometry={nodes.Sphere012.geometry}
        position={[0.65, 0.49, -2.18]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.136']}
        geometry={nodes.Cylinder008.geometry}
        position={[2.31, 0.29, -2.19]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.135']}
        geometry={nodes.Sphere015.geometry}
        position={[2.3, 0.49, -2.18]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.133']}
        geometry={nodes.Sphere014.geometry}
        position={[2.3, 0.49, -2.18]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.140']}
        geometry={nodes.Sphere019.geometry}
        position={[0.46, 0.23, 0.67]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.139']}
        geometry={nodes.Sphere018.geometry}
        position={[0.51, 0.24, 0.66]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.138']}
        geometry={nodes.Sphere017.geometry}
        position={[0.51, 0.24, 0.22]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.137']}
        geometry={nodes.Sphere016.geometry}
        position={[0.46, 0.23, 0.23]}
        rotation={[Math.PI, -0.19, Math.PI]}
        scale={[0.06, 0.06, 0.06]}
      />
      <mesh
        material={materials['Material.121']}
        geometry={nodes.Plane008.geometry}
        position={[0.51, 0.18, -0.61]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh material={materials.ramen} geometry={nodes.Cylinder.geometry} position={[0.47, 0.3, -0.62]} />
      <mesh material={materials['ramen.002']} geometry={nodes.Cylinder009.geometry} position={[0.54, 0.3, -0.56]} />
      <mesh
        material={materials['ramen.003']}
        geometry={nodes.Cylinder010.geometry}
        position={[0.47, 0.3, -0.65]}
        scale={[0.7, 0.7, 0.7]}
      />
      <group position={[0.62, 0.32, -1.16]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.143']} geometry={nodes.Cone035_1.geometry} />
        <mesh material={materials['Material.145']} geometry={nodes.Cone035_2.geometry} />
      </group>
      <mesh
        material={materials['ramen.006']}
        geometry={nodes.Cylinder013.geometry}
        position={[0.48, 0.3, -1.02]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
      />
      <mesh
        material={materials['ramen.005']}
        geometry={nodes.Cylinder012.geometry}
        position={[0.54, 0.3, -1.09]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
      />
      <mesh
        material={materials['ramen.004']}
        geometry={nodes.Cylinder011.geometry}
        position={[0.46, 0.3, -1.02]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={[0.7, 0.7, 0.7]}
      />
      <mesh
        material={materials['Material.142']}
        geometry={nodes.Plane009.geometry}
        position={[0.49, 0.18, -1.06]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[0.32, 0.32, -1.57]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.153']} geometry={nodes.Cone039_1.geometry} />
        <mesh material={materials['Material.155']} geometry={nodes.Cone039_2.geometry} />
      </group>
      <group position={[0.1, 0.32, -1.34]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.185']} geometry={nodes.Cone038.geometry} />
        <mesh material={materials['Material.152']} geometry={nodes.Cone038_1.geometry} />
      </group>
      <mesh
        material={materials['ramen.009']}
        geometry={nodes.Cylinder016.geometry}
        position={[0.16, 0.3, -1.43]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={[0.7, 0.7, 0.7]}
      />
      <mesh
        material={materials['ramen.008']}
        geometry={nodes.Cylinder015.geometry}
        position={[0.24, 0.3, -1.5]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
      />
      <mesh
        material={materials['ramen.007']}
        geometry={nodes.Cylinder014.geometry}
        position={[0.18, 0.3, -1.43]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
      />
      <mesh
        material={materials['Material.149']}
        geometry={nodes.Plane010.geometry}
        position={[0.2, 0.18, -1.47]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[-0.73, 0.32, -1.34]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.179']} geometry={nodes.Cone041.geometry} />
        <mesh material={materials['Material.162']} geometry={nodes.Cone041_1.geometry} />
      </group>
      <group position={[-0.51, 0.32, -1.57]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.177']} geometry={nodes.Cone040_1.geometry} />
        <mesh material={materials['Material.159']} geometry={nodes.Cone040_2.geometry} />
      </group>
      <mesh
        material={materials['ramen.012']}
        geometry={nodes.Cylinder019.geometry}
        position={[-0.65, 0.3, -1.43]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
      />
      <mesh
        material={materials['ramen.011']}
        geometry={nodes.Cylinder018.geometry}
        position={[-0.59, 0.3, -1.5]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
      />
      <mesh
        material={materials['ramen.010']}
        geometry={nodes.Cylinder017.geometry}
        position={[-0.67, 0.3, -1.43]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={[0.7, 0.7, 0.7]}
      />
      <mesh
        material={materials['Material.156']}
        geometry={nodes.Plane011.geometry}
        position={[-0.63, 0.18, -1.47]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[0.31, 0.32, -0.31]} rotation={[0, 0.04, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.134']} geometry={nodes.Cone043.geometry} />
        <mesh material={materials['Material.169']} geometry={nodes.Cone043_1.geometry} />
      </group>
      <group position={[0.08, 0.32, -0.53]} rotation={[0, 0.04, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.236']} geometry={nodes.Cone042.geometry} />
        <mesh material={materials['Material.166']} geometry={nodes.Cone042_1.geometry} />
      </group>
      <mesh
        material={materials['ramen.015']}
        geometry={nodes.Cylinder022.geometry}
        position={[0.17, 0.3, -0.47]}
        rotation={[0, 0.04, 0]}
        scale={[0.7, 0.7, 0.7]}
      />
      <mesh
        material={materials['ramen.014']}
        geometry={nodes.Cylinder021.geometry}
        position={[0.24, 0.3, -0.39]}
        rotation={[0, 0.04, 0]}
      />
      <mesh
        material={materials['ramen.013']}
        geometry={nodes.Cylinder020.geometry}
        position={[0.17, 0.3, -0.45]}
        rotation={[0, 0.04, 0]}
      />
      <mesh
        material={materials['Material.163']}
        geometry={nodes.Plane012.geometry}
        position={[0.21, 0.18, -0.43]}
        rotation={[0, 0.04, 0]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[0, 0.32, -1.07]} rotation={[0, 0.04, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.168']} geometry={nodes.Cone046.geometry} />
        <mesh material={materials['Material.181']} geometry={nodes.Cone046_1.geometry} />
      </group>
      <group position={[0.23, 0.32, -0.84]} rotation={[0, 0.04, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.185']} geometry={nodes.Cone044.geometry} />
        <mesh material={materials['Material.176']} geometry={nodes.Cone044_1.geometry} />
      </group>
      <mesh
        material={materials['ramen.018']}
        geometry={nodes.Cylinder025.geometry}
        position={[0.09, 0.3, -0.98]}
        rotation={[0, 0.04, 0]}
      />
      <mesh
        material={materials['ramen.017']}
        geometry={nodes.Cylinder024.geometry}
        position={[0.16, 0.3, -0.92]}
        rotation={[0, 0.04, 0]}
      />
      <mesh
        material={materials['ramen.016']}
        geometry={nodes.Cylinder023.geometry}
        position={[0.09, 0.3, -1]}
        rotation={[0, 0.04, 0]}
        scale={[0.7, 0.7, 0.7]}
      />
      <mesh
        material={materials['Material.170']}
        geometry={nodes.Plane013.geometry}
        position={[0.13, 0.18, -0.96]}
        rotation={[0, 0.04, 0]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[-0.51, 0.32, -1.57]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.189']} geometry={nodes.Cone048.geometry} />
        <mesh material={materials['Material.191']} geometry={nodes.Cone048_1.geometry} />
      </group>
      <mesh
        material={materials['Material.182']}
        geometry={nodes.Plane014.geometry}
        position={[-0.63, 0.18, -1.47]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[-0.11, 0.32, -1.37]} rotation={[0, 0.04, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.196']} geometry={nodes.Cone050.geometry} />
        <mesh material={materials['Material.198']} geometry={nodes.Cone050_1.geometry} />
      </group>
      <group position={[-0.34, 0.32, -1.6]} rotation={[0, 0.04, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.196']} geometry={nodes.Cone049.geometry} />
        <mesh material={materials['Material.195']} geometry={nodes.Cone049_1.geometry} />
      </group>
      <mesh
        material={materials['ramen.021']}
        geometry={nodes.Cylinder028.geometry}
        position={[-0.25, 0.3, -1.53]}
        rotation={[0, 0.04, 0]}
        scale={[0.7, 0.7, 0.7]}
      />
      <mesh
        material={materials['ramen.020']}
        geometry={nodes.Cylinder027.geometry}
        position={[-0.18, 0.3, -1.45]}
        rotation={[0, 0.04, 0]}
      />
      <mesh
        material={materials['ramen.019']}
        geometry={nodes.Cylinder026.geometry}
        position={[-0.25, 0.3, -1.51]}
        rotation={[0, 0.04, 0]}
      />
      <mesh
        material={materials['Material.192']}
        geometry={nodes.Plane016.geometry}
        position={[-0.21, 0.18, -1.49]}
        rotation={[0, 0.04, 0]}
        scale={[0.07, 0.07, 0.07]}
      />
      <group position={[2.21, 0.32, -1.51]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.224']} geometry={nodes.Cone052.geometry} />
        <mesh material={materials['Material.205']} geometry={nodes.Cone052_1.geometry} />
      </group>
      <group position={[2.33, 0.32, -1.5]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.232']} geometry={nodes.Cone051.geometry} />
        <mesh material={materials['Material.202']} geometry={nodes.Cone051_1.geometry} />
      </group>
      <mesh material={materials['ramen.024']} geometry={nodes.Cylinder031.geometry} position={[0.51, 0.3, -1.42]} />
      <mesh material={materials['ramen.023']} geometry={nodes.Cylinder030.geometry} position={[0.57, 0.3, -1.36]} />
      <mesh
        material={materials['ramen.022']}
        geometry={nodes.Cylinder029.geometry}
        position={[0.51, 0.3, -1.44]}
        scale={[0.7, 0.7, 0.7]}
      />
      <mesh
        material={materials['Material.199']}
        geometry={nodes.Plane021.geometry}
        position={[0.55, 0.18, -1.4]}
        scale={[0.07, 0.07, 0.07]}
      />
      <mesh
        material={materials['Material.209']}
        geometry={nodes.Cylinder032.geometry}
        position={[-1.7, 0.29, 2.18]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.206']}
        geometry={nodes.Sphere020.geometry}
        position={[-1.7, 0.49, 2.18]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.213']}
        geometry={nodes.Cylinder033.geometry}
        position={[-1.06, 0.29, 1.82]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.212']}
        geometry={nodes.Sphere021.geometry}
        position={[-1.06, 0.49, 1.82]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.221']}
        geometry={nodes.Cylinder034.geometry}
        position={[-0.38, 0.29, 1.43]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.220']}
        geometry={nodes.Sphere022.geometry}
        position={[-0.38, 0.49, 1.43]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.228']}
        geometry={nodes.Cone037.geometry}
        position={[-1.94, 0.37, -1.28]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.228']}
        geometry={nodes.Cone036.geometry}
        position={[-1.58, 0.37, -0.98]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.227']}
        geometry={nodes.Cone035.geometry}
        position={[-2.02, 0.37, -0.73]}
        scale={[0.1, 0.08, 0.09]}
      />
      <mesh
        material={materials['Material.229']}
        geometry={nodes.Plane022.geometry}
        position={[-2.04, 0.23, 0.37]}
        rotation={[0, 0, 0]}
        scale={[0.23, 0.34, 0.44]}
      />
      <mesh
        material={materials['Material.247']}
        geometry={nodes.Cylinder035.geometry}
        position={[0.97, 0.29, 1.22]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.231']}
        geometry={nodes.Sphere023.geometry}
        position={[0.97, 0.49, 1.23]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.100']}
        geometry={nodes.bike001.geometry}
        position={[1.06, 0.33, 0.14]}
        rotation={[0, -0.72, 1.57]}
        scale={[0.05, 0.06, 0.06]}>
        <mesh
          material={materials['Material.099']}
          geometry={nodes.Cube002_1.geometry}
          position={[-1.73, 0, -0.01]}
          scale={[-0.33, -0.33, -0.33]}
        />
        <group position={[-1.74, 0.03, -1.17]} scale={[-0.37, -0.37, -0.37]}>
          <mesh material={materials['Material.023']} geometry={nodes.Cylinder007_1.geometry} />
          <mesh material={materials['Material.008']} geometry={nodes.Cylinder007_2.geometry} />
        </group>
        <group position={[-1.74, 0.03, 1.03]} scale={[-0.37, -0.37, -0.37]}>
          <mesh material={materials['Material.082']} geometry={nodes.Cylinder008_1.geometry} />
          <mesh material={materials['Material.031']} geometry={nodes.Cylinder008_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.160']}
        geometry={nodes.bike002.geometry}
        position={[0.92, 0.33, 0.14]}
        rotation={[0, -0.72, 1.57]}
        scale={[0.05, 0.06, 0.06]}>
        <mesh
          material={materials['Material.157']}
          geometry={nodes.Cube003_4.geometry}
          position={[-1.73, 0, -0.01]}
          scale={[-0.33, -0.33, -0.33]}
        />
        <group position={[-1.74, 0.03, 1.03]} scale={[-0.37, -0.37, -0.37]}>
          <mesh material={materials['Material.122']} geometry={nodes.Cylinder009_1.geometry} />
          <mesh material={materials['Material.120']} geometry={nodes.Cylinder009_2.geometry} />
        </group>
        <group position={[-1.74, 0.03, -1.17]} scale={[-0.37, -0.37, -0.37]}>
          <mesh material={materials['Material.150']} geometry={nodes.Cylinder010_1.geometry} />
          <mesh material={materials['Material.141']} geometry={nodes.Cylinder010_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.186']}
        geometry={nodes.bike003.geometry}
        position={[0.76, 0.33, 0.14]}
        rotation={[0, -0.72, 1.57]}
        scale={[0.05, 0.06, 0.06]}>
        <mesh
          material={materials['Material.186']}
          geometry={nodes.Cube004.geometry}
          position={[-1.73, 0, -0.01]}
          scale={[-0.33, -0.33, -0.33]}
        />
        <group position={[-1.74, 0.03, -1.17]} scale={[-0.37, -0.37, -0.37]}>
          <mesh material={materials['Material.167']} geometry={nodes.Cylinder011_1.geometry} />
          <mesh material={materials['Material.164']} geometry={nodes.Cylinder011_2.geometry} />
        </group>
        <group position={[-1.74, 0.03, 1.03]} scale={[-0.37, -0.37, -0.37]}>
          <mesh material={materials['Material.193']} geometry={nodes.Cylinder012_1.geometry} />
          <mesh material={materials['Material.171']} geometry={nodes.Cylinder012_2.geometry} />
        </group>
      </mesh>
      <mesh
        material={materials['Material.246']}
        geometry={nodes.bike004.geometry}
        position={[1.2, 0.33, 0.14]}
        rotation={[0, -0.72, 1.57]}
        scale={[0.05, 0.06, 0.06]}>
        <mesh
          material={materials['Material.245']}
          geometry={nodes.Cube005_1.geometry}
          position={[-1.73, 0, -0.01]}
          scale={[-0.33, -0.33, -0.33]}
        />
        <group position={[-1.74, 0.03, 1.03]} scale={[-0.37, -0.37, -0.37]}>
          <mesh material={materials['Material.252']} geometry={nodes.Cylinder013_1.geometry} />
          <mesh material={materials['Material.251']} geometry={nodes.Cylinder013_2.geometry} />
        </group>
        <group position={[-1.74, 0.03, -1.17]} scale={[-0.37, -0.37, -0.37]}>
          <mesh material={materials['Material.254']} geometry={nodes.Cylinder014_1.geometry} />
          <mesh material={materials['Material.253']} geometry={nodes.Cylinder014_2.geometry} />
        </group>
      </mesh>
      <group position={[-1.46, 0.32, -0.45]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.260']} geometry={nodes.Cone016.geometry} />
        <mesh material={materials['Material.262']} geometry={nodes.Cone016_1.geometry} />
      </group>
      <group position={[-1.36, 0.32, -0.59]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.263']} geometry={nodes.Cone017.geometry} />
        <mesh material={materials['Material.265']} geometry={nodes.Cone017_1.geometry} />
      </group>
      <mesh
        material={materials['Material.267']}
        geometry={nodes.Cylinder044.geometry}
        position={[2.31, 0.29, -1.29]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.03, 0.18, 0.02]}
      />
      <mesh
        material={materials['Material.266']}
        geometry={nodes.Sphere024.geometry}
        position={[2.3, 0.49, -1.29]}
        rotation={[Math.PI, -1.43, Math.PI]}
        scale={[0.12, 0.12, 0.12]}
      />
      <mesh
        material={materials['Material.269']}
        geometry={nodes.Cylinder046.geometry}
        position={[-2.38, 0.23, -2.81]}
        rotation={[0.02, 0.01, 3.14]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        material={materials['Material.271']}
        geometry={nodes.Cylinder047.geometry}
        position={[-2.38, 0.23, 3.64]}
        rotation={[0.02, 0.55, 3.13]}
        scale={[0.11, 0.11, 0.11]}
      />
      <mesh
        material={nodes.Cube006.material}
        geometry={nodes.Cube006.geometry}
        position={[-0.19, 0.27, 2.02]}
        rotation={[0, -1.11, 0]}
        scale={[1.35, 1.35, 1.35]}
      />
      <mesh
        material={materials['Material.272']}
        geometry={nodes.Cylinder001.geometry}
        position={[0.03, 0.28, 1.91]}
        rotation={[0, 0.47, 0]}
        scale={[0.03, 0.04, 0.03]}
      />
      <group name="Cone002" position={[-2.5, 0.23, -2.79]} rotation={[0, -1.57, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.276']} geometry={nodes.Cone019_1.geometry} />
        <mesh material={materials['Material.278']} geometry={nodes.Cone019_2.geometry} />
      </group>
      <group position={[0.39, 0.32, -0.93]} rotation={[-Math.PI, 1.54, -Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.273']} geometry={nodes.Cone018_1.geometry} />
        <mesh material={materials['Material.275']} geometry={nodes.Cone018_2.geometry} />
      </group>
      <group name="Cone003" position={[-2.5, 0.23, -2.79]} rotation={[0, -1.57, 0]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.273']} geometry={nodes.Cone020.geometry} />
        <mesh material={materials['Material.281']} geometry={nodes.Cone020_1.geometry} />
      </group>
      <group name="Cone004" position={[-0.54, 0.3, -0.95]} rotation={[Math.PI, -0.01, Math.PI]} scale={[0.4, 0.4, 0.4]}>
        <mesh material={materials['Material.282']} geometry={nodes.Cone021_1.geometry} />
        <mesh material={materials['Material.284']} geometry={nodes.Cone021_2.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('../assets/models/island4.glb')
