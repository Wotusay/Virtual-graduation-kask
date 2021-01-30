import React, {Suspense, useState} from 'react';
import {Canvas} from 'react-three-fiber';
import { OrbitControls, Html } from '@react-three/drei';
import IslandOne from '../islands/IslandOne.js';
import IslandTwo from '../islands/IslandTwo.js';
import IslandThree from '../islands/IslandThree.js';
import IslandFour from '../islands/IslandFour.js';
import {useSpring, animated} from 'react-spring-three';
import styles from './Landing.module.css'
import Rotate from '../uiElements/Rotate/index.js';
import Loading from '../uiElements/Loading/index.js';
import HoverItem from '../uiElements/HoverItem/index.js';

 
const LandingPage = () => {
    const [hoverOne, setHoverOne ] = useState(false);
    const [hoverTwo, setHoverTwo ] = useState(false);
    const [removeRotate,setRemoveRotate] = useState(false);
    const [hoverItem, setHoverdItem] = useState('');
    
    const scaleAnimationOne = useSpring({
        scale: hoverOne ? [1.05,1.05,1.05] : [1, 1, 1]
    });

    const scaleAnimationTwo = useSpring({
        scale: hoverTwo ? [1.05,1.05,1.05] : [1, 1, 1]
    });


    const hoverItemOneIn = () => {
        setHoverOne(true)
        setHoverdItem('The Tour');
    };

    const hoverItemOneOut = () => {
        setHoverOne(false)
        setHoverdItem('');
    };

    const hoverItemTwoIn = () => {
        setHoverTwo(true)
        setHoverdItem('Your Favourites');

    };

    const hoverItemTwoOut = () => {
        setHoverTwo(false)
        setHoverdItem('');

    };

    return  ( 
        <>
        <h2 className={styles.title}>The Virtual <span>Graduation</span> </h2>
        <HoverItem name={hoverItem}></HoverItem>
        <Rotate clicked={removeRotate} ></Rotate>
        <Canvas onClick={(e) => setRemoveRotate(true)} shadowMap resize={{scroll:false}} style={{width: 'auto', zIndex:1}} camera={{position: [1 , 6.5 ,1], fov:100}}>
            <ambientLight intensity={0.4} />
            <directionalLight intensity={0.8} position={[-5, 5, 5]} castShadow shadow-mapSize-width={2024} shadow-mapSize-height={2024} />
            <directionalLight intensity={0.8} position={[5, -5, -5]} castShadow shadow-mapSize-width={2024} shadow-mapSize-height={2024} />
            <OrbitControls enablePan={false} enableZoom={false} autoRotate={true} autoRotateSpeed={0.2}  />
            <Suspense fallback={<Html> 
                    <Loading></Loading>
                 </Html>}>
                <group position={[0.5,0,1.6]}>
                <animated.group scale={scaleAnimationOne.scale} >
                <IslandOne onPointerOver={(e) => hoverItemOneIn(e)}
                onPointerOut={(e) => hoverItemOneOut(e)} position={[-3, -0.2,2]} scale={[0.75, 0.75, 0.75]}></IslandOne></animated.group>
                <animated.group scale={scaleAnimationTwo.scale} >
                <IslandTwo onPointerOver={(e) => hoverItemTwoIn(e)}
                onPointerOut={(e) => hoverItemTwoOut(e)} position={[-3,-0.2, -2.5]} scale={[0.75, 0.75, 0.75]}></IslandTwo>
                </animated.group>
                <IslandThree 
                position={[1.8,-0.2,1.5]} scale={[0.75, 0.75, 0.75]} ></IslandThree>
                <IslandFour 
                position={[2,-0.2,-3.1]} scale={[0.75, 0.75, 0.75]} ></IslandFour>
                </group>
            </Suspense>
        </Canvas>
        </>
    );
}

export default LandingPage; 