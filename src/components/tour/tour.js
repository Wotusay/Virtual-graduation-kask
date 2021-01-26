import React,{Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Model from '../islands/Tour_island/islandOne.js';

const Tour = () => {
    return (
        <>
        <Canvas shadowMap style={{width: 'auto' , height: 1000, zIndex:1}} camera={{position: [-3 , 3 , 3.5]}}>
            <ambientLight intensity={0.4} />
            <directionalLight intensity={0.8} position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <directionalLight intensity={0.8} position={[5, -5, -5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <OrbitControls autoRotate={true}  />
            <Suspense fallback={<Html> loading ... </Html>}>
                <Model></Model>
            </Suspense>
            <mesh rotation={[90, 0, 0]} position={[0, -6, 0]} receiveShadow>
                <planeBufferGeometry args={[10, 10, 1]} />
                <shadowMaterial transparent opacity={0.1} />
            </mesh>
        </Canvas>
        </>
     )
}

export default Tour;