import React, {Suspense, useEffect, useState} from 'react';
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
import Instutions from '../uiElements/InstitutionUI/index.js';
import Students from '../uiElements/StudentsUI/index.js';


 
const LandingPage = () => {
    const [hoverOne, setHoverOne ] = useState(false);
    const [hoverTwo, setHoverTwo ] = useState(false);
    const [hoverThree, setHoverThree ] = useState(false);
    const [hoverFour, setHoverFour ] = useState(false);
    
    const [clickOne, setClickOne] = useState(false);
    const [clickTwo, setClickTwo] = useState(false);
    const [clickThree, setClickThree ] = useState(false);
    const [clickFour, setClickFour] = useState(false);


    const [hoverItem, setHoverdItem] = useState('');
    const scaleAnimationOne = useSpring({
        // Scale animation for the islands 
        // And Click animations 
        scale: hoverOne && !clickOne  ? [1.05,1.05,1.05] : clickOne ? [1.2,1.2,1.2] : [1, 1, 1],
        position: clickOne ? [-1,0,-2] : clickTwo || clickFour || clickThree ? [0.5,0.1,500] : [-3, -0.2,2],
        positionIslandTwo: clickOne || clickFour || clickThree ? [-500,-0.2, -3.5] : clickTwo && !clickOne && !clickFour  && !clickThree? [-1,0,-2] : [-3,-0.2, -2.5],
        scaleTwo: hoverTwo && !clickTwo ? [1.05,1.05,1.05] : clickTwo ? [1.2,1.2,1.2] : [1, 1, 1],
        scaleFour: hoverFour && !clickFour ? [1.05,1.05,1.05] : clickFour ? [1.2,1.2,1.2] : [1, 1, 1] ,
        scaleThree: hoverThree && !clickThree ? [1.05,1.05,1.05] : clickThree ? [1.2,1.2,1.2] : [1, 1, 1] ,
        positionIslandThree: clickOne || clickTwo || clickFour  ?  [500, -0.2, 2.5] : clickThree && !clickOne && !clickTwo && !clickFour ? [-1,0,-2]  : [1.8,-0.2,1.5] ,
        positionIslandFour: clickOne  || clickTwo || clickThree  ?  [2,-0.2, -500.1] : clickFour && !clickOne && !clickTwo && !clickThree ? [-1,0,-2] : [2, -0.2, -3.1],
    });

    const hoverItemOneIn = (e) => {
        // Here we get the hover input from the first item
        setHoverOne(true)
        if (clickOne) {
            setHoverdItem('Click to close');

        } else {
            setHoverdItem('The Tour 2021');
        }

    };

    const hoverItemOneOut = (e) => {
        // Here we  get the input when we got out of the hover
        setHoverOne(false)
        setHoverdItem('');
    };

    const hoverItemTwoIn = (e) => {
        // Here we get the hover input from the first item
        setHoverTwo(true);
        if (clickTwo) {
            setHoverdItem('Click to close');
        } else {
            setHoverdItem('Your favourites');
        }

    };

    const hoverItemFourOut = (e) => {
        // Here we  get the input when we got out of the hover
        setHoverFour(false)
        setHoverdItem('');
    };

    const hoverItemFourIn = (e) => {
        // Here we get the hover input from the first item
        setHoverFour(true);
        if (clickFour) {
            setHoverdItem('Click to close');
        } else {
            setHoverdItem('The Institutions');
        }

    };


    const hoverItemThreeOut = (e) => {
        // Here we  get the input when we got out of the hover
        setHoverThree(false)
        setHoverdItem('');
    };

    const hoverItemThreeIn = (e) => {
        // Here we get the hover input from the first item
        setHoverThree(true);
        if (clickThree) {
            setHoverdItem('Click to close');
        } else {
            setHoverdItem('The Students');
        }

    };
    

    const hoverItemTwoOut = (e) => {
        // Here we  get the input when we got out of the hover
        setHoverTwo(false)
        setHoverdItem('');

    };

    const handleClickOne = e  => {
        // Here we triggerr the animations by setting the clicked on true or revert the animation
        setClickOne(true)
        if (clickOne) {
            setClickOne(false);
        }
    }


    const handleClickTwo = e  => {
        // Here we triggerr the animations by setting the clicked on true or revert the animation
        setClickTwo(true)
        if (clickTwo) {
            setClickTwo(false);
        }
    };

    const handleClickThree = e  => {
        // Here we triggerr the animations by setting the clicked on true or revert the animation
        setClickThree(true)
        if (clickThree) {
            setClickThree(false);
        }
    };


    const handleClickFour = e  => {
        // Here we triggerr the animations by setting the clicked on true or revert the animation
        setClickFour(true)
        if (clickFour) {
            setClickFour(false);
        }
    };
    useEffect(() => {
        // To display the cursor as a pointer when hovering over an 3d object
        document.body.style.cursor = hoverOne || hoverTwo || hoverThree || hoverFour? 'pointer' : 'auto';
    })
    
    // Instead of using onclick i use onpointerdown
    // This is because on mobile there is no onclick and this doesnt support onTouch
    // See line 91
    return  ( 
        <>

        {clickOne ? <Tour hoverItem={hoverItem}></Tour> : 
        clickTwo ? <Favourite hoverItem={hoverItem} ></Favourite> : clickThree ? <Students hoverItem={hoverItem}></Students> : clickFour ? <Instutions hoverItem={hoverItem} ></Instutions> : <LandingUI hoverItem={hoverItem} ></LandingUI>}

        <Canvas id="test" shadowMap resize={{scroll:false}} style={{width: 'auto', zIndex:1}} camera={{position: [1,6.5,1], fov:100, near: 0.1, far: 20}}>
            <ThreeBasicsItems></ThreeBasicsItems>
            <Suspense fallback={<Html> 
                    <Loading></Loading>
                 </Html>}>


                <animated.group  position={[0.5,0,1.6]}>

                <animated.group scale={scaleAnimationOne.scale} position={scaleAnimationOne.position} >
                <IslandOne onPointerDown={(e) => handleClickOne(e) } onPointerOver={(e) => hoverItemOneIn(e)}
                onPointerOut={(e) => hoverItemOneOut(e)} scale={[0.75, 0.75, 0.75]}></IslandOne>
                </animated.group>

                <animated.group position={scaleAnimationOne.positionIslandTwo} scale={scaleAnimationOne.scaleTwo} >
                <IslandTwo onPointerDown={(e) => handleClickTwo(e)} onPointerOver={(e) => hoverItemTwoIn(e)}
                onPointerOut={(e) => hoverItemTwoOut(e)} scale={[0.75, 0.75, 0.75]}></IslandTwo>
                </animated.group>

                <animated.group scale={scaleAnimationOne.scaleThree} position={scaleAnimationOne.positionIslandThree}>
                <IslandThree onPointerDown={(e) => handleClickThree(e)} onPointerOver={(e) => hoverItemThreeIn(e)}
                onPointerOut={(e) => hoverItemThreeOut(e)} scale={[0.75, 0.75, 0.75]} ></IslandThree>
                </animated.group>

                <animated.group  scale={scaleAnimationOne.scaleFour} position={scaleAnimationOne.positionIslandFour}>
                <IslandFour onPointerDown={(e) => handleClickFour(e)} onPointerOver={(e) => hoverItemFourIn(e)}
                onPointerOut={(e) => hoverItemFourOut(e)}
                 scale={[0.75, 0.75, 0.75]} ></IslandFour>
                </animated.group>

                </animated.group>

                
            </Suspense>
        </Canvas>
        </>
    );
}

export default LandingPage; 