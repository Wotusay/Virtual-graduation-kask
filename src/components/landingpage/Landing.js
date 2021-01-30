import React, {Suspense, useState} from 'react';
import { Canvas } from 'react-three-fiber';
import { Html } from '@react-three/drei';
import IslandOne from '../islands/IslandOne.js';
import IslandTwo from '../islands/IslandTwo.js';
import IslandThree from '../islands/IslandThree.js';
import IslandFour from '../islands/IslandFour.js';
import {useSpring, animated} from 'react-spring-three';
import Loading from '../uiElements/Loading/index.js';
import Tour from '../uiElements/TourUI/tour'
import LandingUI from '../uiElements/LandingUI/index.js';
import ThreeBasicsItems from '../uiElements/ThreeBasicsItems/index.js';
import Favourite from '../uiElements/FavouritesUI/index.js';

 
const LandingPage = () => {
    const [hoverOne, setHoverOne ] = useState(false);
    const [hoverTwo, setHoverTwo ] = useState(false);
    const [clickOne, setClickOne] = useState(false);
    const [clickTwo, setClickTwo] = useState(false);
    const [hoverItem, setHoverdItem] = useState('');
    const scaleAnimationOne = useSpring({
        // Scale animation for the islands 
        // And Click animations 
        scale: hoverOne && !clickOne  ? [1.05,1.05,1.05] : clickOne ? [1.2,1.2,1.2] : [1, 1, 1],
        position: clickOne ? [-1,0,-2] : clickTwo ? [0.5,0.1,500] : [-3, -0.2,2],
        positionIslandTwo: clickOne && !clickTwo ? [-500,-0.2, -3.5] : clickTwo && !clickOne ? [-1,0,-2] : [-3,-0.2, -2.5],
        scaleTwo: hoverTwo && !clickTwo ? [1.05,1.05,1.05] : clickTwo ? [1.2,1.2,1.2] : [1, 1, 1],
        positionIslandThree: clickOne || clickTwo  ? [500, -0.2, 2.5] : [1.8,-0.2,1.5] ,
        positionIslandFour: clickOne  || clickTwo  ?  [2,-0.2, -500.1] : [2, -0.2, -3.1],
    });




    const hoverItemOneIn = (e) => {
        // Here we get the hover input from the first item
        setHoverOne(true)
        setHoverdItem('The Tour 2021');
    };

    const hoverItemOneOut = (e) => {
        // Here we  get the input when we got out of the hover
        setHoverOne(false)
        setHoverdItem('');
    };

    const hoverItemTwoIn = (e) => {
        setHoverTwo(true)
        setHoverdItem('Your favourites');

    };

    const hoverItemTwoOut = (e) => {
        setHoverTwo(false)
        setHoverdItem('');

    };

    const handleClickOne = e  => {
        setClickOne(true)
        if (clickOne) {
            setClickOne(false);
        }
    }


    const handleClickTwo = e  => {
        setClickTwo(true)
        if (clickTwo) {
            setClickTwo(false);
        }
    }


    return  ( 
        <>

        {clickOne ? <Tour></Tour> : 
        clickTwo ? <Favourite></Favourite> : <LandingUI hoverItem={hoverItem} ></LandingUI>}

        <Canvas id="test" shadowMap resize={{scroll:false}} style={{width: 'auto', zIndex:1}} camera={{position: [1,6.5,1], fov:100, near: 0.1, far: 20}}>
            <ThreeBasicsItems></ThreeBasicsItems>
            <Suspense fallback={<Html> 
                    <Loading></Loading>
                 </Html>}>

                <animated.group position={[0.5,0,1.6]}>

                <animated.group scale={scaleAnimationOne.scale} position={scaleAnimationOne.position} >
                <IslandOne onClick={(e) => handleClickOne(e) } onPointerOver={(e) => hoverItemOneIn(e)}
                onPointerOut={(e) => hoverItemOneOut(e)} scale={[0.75, 0.75, 0.75]}></IslandOne>
                </animated.group>

                <animated.group position={scaleAnimationOne.positionIslandTwo} scale={scaleAnimationOne.scaleTwo} >
                <IslandTwo onClick={(e) => handleClickTwo(e)} onPointerOver={(e) => hoverItemTwoIn(e)}
                onPointerOut={(e) => hoverItemTwoOut(e)} scale={[0.75, 0.75, 0.75]}></IslandTwo>
                </animated.group>

                <animated.group position={scaleAnimationOne.positionIslandThree}>
                <IslandThree scale={[0.75, 0.75, 0.75]} ></IslandThree>
                </animated.group>

                <animated.group position={scaleAnimationOne.positionIslandFour}>
                <IslandFour 
                 scale={[0.75, 0.75, 0.75]} ></IslandFour>
                </animated.group>

                </animated.group>
                
            </Suspense>
        </Canvas>
        </>
    );
}

export default LandingPage; 