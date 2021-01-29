import React, {Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import { OrbitControls, Html } from '@react-three/drei';
import IslandOne from '../islands/IslandOne.js';
import IslandTwo from '../islands/IslandTwo.js';

const LandingPage = () => {
    return (
        <>
        <Canvas shadowMap style={{width: 'auto' , height: 1000, zIndex:1}} camera={{position: [5.5 , 3.5 ,-2]}}>
            <ambientLight intensity={0.4} />
            <directionalLight intensity={0.8} position={[-5, 5, 5]} castShadow shadow-mapSize-width={2024} shadow-mapSize-height={2024} />
            <directionalLight intensity={0.8} position={[5, -5, -5]} castShadow shadow-mapSize-width={2024} shadow-mapSize-height={2024} />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate={true} autoRotateSpeed={0.5}  />
            <Suspense fallback={<Html> loading ... </Html>}>
                <IslandOne position={[-2, -0.2,2]} scale={[0.75, 0.75, 0.75]}></IslandOne>
                <IslandTwo position={[-2,-0.2, -2.5]} scale={[0.75, 0.75, 0.75]}></IslandTwo>


            </Suspense>
        </Canvas>
        </>
    );
}

export default LandingPage; 