import { OrbitControls } from '@react-three/drei';
import React from 'react'; 

const ThreeBasicsItems = () => {
    // The basic lighting and orbit controls for the project
    return (
        <>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={0.8} position={[-5, 5, 5]} castShadow shadow-mapSize-width={2024} shadow-mapSize-height={2024} />
        <directionalLight intensity={0.8} position={[5, -5, -5]} castShadow shadow-mapSize-width={2024} shadow-mapSize-height={2024} />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate={true} autoRotateSpeed={0.2}  />
        </>
    )
}

export default ThreeBasicsItems;