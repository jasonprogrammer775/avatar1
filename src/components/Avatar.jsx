// import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// export function Avatar(props) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("models/jayp2.glb");

//   // Load animations
//   const { animations: standingAnimation } = useFBX("animations/standing.fbx");
//   const { animations: offenseAnimation } = useFBX("animations/offense.fbx");
//   const { animations: yellAnimation } = useFBX("animations/yell.fbx");

//   // Assign unique names to each animation
//   if (standingAnimation.length > 0) standingAnimation[0].name = "standing";
//   if (offenseAnimation.length > 0) offenseAnimation[0].name = "offense";
//   if (yellAnimation.length > 0) yellAnimation[0].name = "yell";

//   // Set up animations
//   const { actions } = useAnimations(
//     [standingAnimation[0], offenseAnimation[0], yellAnimation[0]],
//     group
//   );

//   const animationSequence = ["standing", "offense", "yell"]; // Animation sequence
//   const [currentIndex, setCurrentIndex] = useState(0); // Index for current animation
//   const [isTransitioning, setIsTransitioning] = useState(false); // Control transition
//   const isTransitioningRef = useRef(false); // Use ref for transition state



//   useEffect(() => {
//     const playAnimationSequence = async () => {
//       if (!actions || isTransitioningRef.current ) return;
  
//       // Function to play animations sequentially
//       const playNextAnimation = (index) => {
//         const currentAnimation = animationSequence[index];
//         const nextIndex = (index + 1) % animationSequence.length;
  
//         const currentAction = actions[currentAnimation];
//         const nextAction = actions[animationSequence[nextIndex]];
  
//         if (currentAction && nextAction) {
            
        
//           // Fade in current animation
//           currentAction.reset().fadeIn(0.75).play();
//           currentAction.setLoop(THREE.LoopOnce);

//  // Set transitioning state to true
//           setIsTransitioning(true);
  
//           // Transition to the next animation on finish
//           currentAction.getMixer().addEventListener("finished", () => {
//             // Blend to the next animation
//             nextAction.reset().fadeIn(0.75).play();
//             currentAction.crossFadeTo(nextAction, 0.75, true);

//     // Update the index for the next animation
//       setCurrentIndex(nextIndex);

//       // After the transition is complete, set transitioning state to false
//       nextAction.getMixer().addEventListener("finished", () => {
//         setIsTransitioning(false);
     
//           });
//         });
//       }
  
   
//     };
//     playNextAnimation(currentIndex);
//   };

//   playAnimationSequence();
  
  
//     return () => {
//       // Clean up event listeners
//       Object.values(actions).forEach((action) =>
//         action?.getMixer().removeEventListener("finished", playAnimationSequence)
//       );
//     };
//   }, [actions, animationSequence, currentIndex,isTransitioning]);


//   if (!nodes.Hips) {
//     return null; // or a loading state  new1
//   }

//   return (
//     <group {...props} ref={group} dispose={null}>
//       <group rotation-x={-Math.PI / 2}>
//         <primitive object={nodes.Hips} />
//         <skinnedMesh
//           name="EyeLeft"
//           geometry={nodes.EyeLeft.geometry}
//           material={materials.Wolf3D_Eye}
//           skeleton={nodes.EyeLeft.skeleton}
//           morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
//           morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
//         />
//         <skinnedMesh
//           name="EyeRight"
//           geometry={nodes.EyeRight.geometry}
//           material={materials.Wolf3D_Eye}
//           skeleton={nodes.EyeRight.skeleton}
//           morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
//           morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
//         />
//         <skinnedMesh
//           name="Wolf3D_Head"
//           geometry={nodes.Wolf3D_Head.geometry}
//           material={materials.Wolf3D_Skin}
//           skeleton={nodes.Wolf3D_Head.skeleton}
//           morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//           morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//         />
//         <skinnedMesh
//           name="Wolf3D_Teeth"
//           geometry={nodes.Wolf3D_Teeth.geometry}
//           material={materials.Wolf3D_Teeth}
//           skeleton={nodes.Wolf3D_Teeth.skeleton}
//           morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//           morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//         />
//         <skinnedMesh
//           geometry={nodes.Wolf3D_Glasses.geometry}
//           material={materials.Wolf3D_Glasses}
//           skeleton={nodes.Wolf3D_Glasses.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Wolf3D_Body.geometry}
//           material={materials.Wolf3D_Body}
//           skeleton={nodes.Wolf3D_Body.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
//           material={materials.Wolf3D_Outfit_Bottom}
//           skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
//           material={materials.Wolf3D_Outfit_Footwear}
//           skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Wolf3D_Outfit_Top.geometry}
//           material={materials.Wolf3D_Outfit_Top}
//           skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("models/jayp2.glb");











import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/jayp2.glb");

  // Load the offense animation
  const { animations: offenseAnimation } = useFBX("animations/offense.fbx");
  if (offenseAnimation.length) offenseAnimation[0].name = "offense";

  // Set up animations
  const { actions } = useAnimations([offenseAnimation[0]], group);

  useEffect(() => {
    // Play the offense animation if available
    if (actions?.offense) {
      actions.offense.reset().fadeIn(0.75).play();
    }

    return () => {
      // Cleanup animations on unmount
      actions?.offense?.fadeOut(0.75);
    };
  }, [actions]);

  if (!nodes.Hips) {
    return null; // Handle loading or error state
  }

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        {Object.entries(nodes).map(([name, node]) =>
          node.isSkinnedMesh ? (
            <skinnedMesh
              key={name}
              name={name}
              geometry={node.geometry}
              material={materials[node.material.name]}
              skeleton={node.skeleton}
              morphTargetDictionary={node.morphTargetDictionary}
              morphTargetInfluences={node.morphTargetInfluences}
            />
          ) : null
        )}
      </group>
    </group>
  );
}

useGLTF.preload("models/jayp2.glb");



