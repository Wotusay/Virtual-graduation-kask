import React,{Suspense} from 'react';
import {Canvas} from 'react-three-fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Model from '../islands/Tour_island/islandOne.js';
import styles from './tour.module.css';
import Button from '../uiElements/Button/index.js';
import { ROUTES } from '../../consts/index.js';
import Nav from '../nav/nav.js';

const Tour = () => {
    return (
        <>
        <Nav></Nav>
        <h2 className={styles.title}>The <span>Tour</span> 2021</h2>

        <Button text={'Ontdek'} pathDefiner={ROUTES.input}></Button>

        <Canvas shadowMap style={{width: 'auto' , height: 1000, zIndex:1}} camera={{position: [-2 , 2 , 3]}}>
            <ambientLight intensity={0.4} />
            <directionalLight intensity={0.8} position={[-5, 5, 5]} castShadow shadow-mapSize-width={2024} shadow-mapSize-height={2024} />
            <directionalLight intensity={0.8} position={[5, -5, -5]} castShadow shadow-mapSize-width={2024} shadow-mapSize-height={2024} />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate={true} autoRotateSpeed={0.5}  />
            <Suspense fallback={<Html> loading ... </Html>}>
                <Model position={[0, -0.2,0]} scale={[0.75, 0.75, 0.75]}></Model>
            </Suspense>
        </Canvas>


        </>
     )
}

export default Tour;