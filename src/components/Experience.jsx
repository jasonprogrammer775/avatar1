

import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useRef } from "react";
import { Avat } from "./Avat"
import { Room } from "./Room";


export const Experience = () => {
  const groupRef = useRef();

  return (
    <>
      <OrbitControls 
        enableDamping 
        dampingFactor={0.1} 
        rotateSpeed={0.5} 
      />


      <directionalLight position={[10, 10, 10]} intensity={1.5} />

      
        <group position={[0, -3.4, 0]} scale={[2.5, 2.5, 2.5]}>
        <Avatar />

        </group>

        {/* <group >
        <Avat position={[2, -0.5, 0]} />



        </group> */}

        <group>
          <Room position={[1, -3, -3]} />
        </group>
      
      <ambientLight intensity={2} />
      
      
    </>
  );
};