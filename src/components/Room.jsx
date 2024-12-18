

import React, { useRef } from 'react'
import { Environment,useGLTF,Html } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('models/jroom.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-3.882, 1.509, -2.596]} scale={0.12}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials['Material.002']}
        />
      </group>

         {/* Annotation for a Poster */}
         <mesh
        position={[-4.092, 4.196, 0.549]} // Position of the first poster
        rotation={[1.569, -0.017, -1.647]}
        scale={1.765}
      >


 {/* HDR Background */}
 
           
      
        <Html
          position={[0, 0.5, 0]} // Adjust relative position for the annotation
          center
          distanceFactor={5} // Scales with camera distance
        >
          <a
            href="https://jport1.netlify.app/" // Replace with your desired URL
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              background: 'rgba(128, 128, 128, 0.9)', // Gray background with slight transparency
              color: 'white',
              padding: '16px', // Increased padding for readability
              borderRadius: '10px',
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: '1.2em', // Increased font size
              fontWeight: 'bold', // Bold for better readability
              maxWidth: '200px', // Restrict width to avoid too large UI
              margin: '0 auto',
            }}
          >
            <strong>Portfolio</strong>
            <p>AboutMe.</p>
           </a> 
        </Html>
      </mesh>



 {/* Annotation for another Poster */}
 <mesh
        position={[-4.043, 4.437, -1.655]} // Position of the second poster
        rotation={[1.568, -0.033, -1.662]}
        scale={1.876}
      >
        <Html
          position={[0, 0.5, 0]} // Adjust relative position for the annotation
          center
          distanceFactor={5}
        >
          <a
            href="https://github.com/jasonprogrammer775" // Replace with your desired URL
            target="_blank"
            rel="noopener noreferrer"
            style={{
             display: 'block',
              background: 'rgba(128, 128, 128, 0.9)', // Gray background with slight transparency
              color: 'white',
              padding: '16px', // Increased padding for readability
              borderRadius: '10px',
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: '1.2em', // Increased font size
              fontWeight: 'bold', // Bold for better readability
              maxWidth: '200px', // Restrict width to avoid too large UI
              margin: '0 auto',
            }}
          >
            <strong>Projects</strong>
            <p>Work</p>
          </a>
        </Html>
      </mesh>


























      <group position={[-1.049, -0.692, 1.149]} scale={1.419}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.base_cama}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.colchon}
        />
      </group>
      <group position={[0.095, -0.373, 0.14]} scale={4.819}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.pared}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.suelo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.afuera}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.puerta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.negro}
        />
      </group>
      <group position={[0.245, 1.026, -3.312]} scale={[0.316, 0.045, 0.316]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials.lamapra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.negro}
        />
      </group>
      <group
        position={[-2.771, 4.559, -3.744]}
        rotation={[Math.PI, 0, 2.849]}
        scale={[0.085, 0.433, 0.303]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.pages}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.libro}
        />
      </group>
      <group position={[0.261, 0.659, -2.511]} scale={[-0.296, -0.034, -0.034]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.base_cama}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.gris}
        />
      </group>
      <group position={[-3.958, 1.431, -3.489]} scale={0.077}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.negro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.pcinsidenormal}
        />
      </group>
      <group position={[-3.781, 2.47, -1.132]} scale={1.456}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.negro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.screen}
          scale={[1, 1.047, 1]}
        />
      </group>
      <group position={[-2.793, 1.422, -2.237]} scale={[0.137, 0.04, 0.083]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.negro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.light}
        />
      </group>
      <group position={[-2.859, 1.4, -1.158]} scale={[0.266, 0.019, 0.797]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.negro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.negro}
        position={[-2.845, 1.371, -1.386]}
        scale={1.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.sabanas}
        position={[3.11, 0.988, -3.333]}
        rotation={[0.604, 0, 0]}
        scale={[1.205, 1.596, 1.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials.base_cama}
        position={[-2.92, 4.041, -3.764]}
        scale={[1.205, 0.086, 0.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.base_cama}
        position={[-2.943, 1.349, -2.506]}
        scale={[1.205, 0.12, 1.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.material_0}
        position={[-3.66, 0.011, 1.339]}
        scale={0.577}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.negro}
        position={[-3.58, 0.515, 1.407]}
        scale={0.394}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material_0}
        position={[-3.492, 0.078, 1.435]}
        rotation={[0, 0, -0.878]}
        scale={0.577}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.gris}
        position={[-4.157, 2.42, 4.442]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.111}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.sabanas}
        position={[3.211, 1.29, -0.072]}
        scale={[2.502, 1.205, 3.534]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_39.geometry}
        material={materials.silla2}
        position={[-2.496, -0.292, -0.907]}
        rotation={[-0.498, -1.215, 1.1]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['ReadyPlayerMe-Avatar'].geometry}
        material={materials['ReadyPlayerMe-Avatar']}
        position={[-4.028, 3.803, 3.322]}
        rotation={[1.598, 0.005, 1.651]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['DALL·E_2024-11-28_051635_-_A_stylish_and_artistic_image_feat'].geometry}
        material={materials['DALL·E 2024-11-28 05.16.35 - A stylish and artistic image feat']}
        position={[-4.092, 4.196, 0.549]}
        rotation={[1.569, -0.017, -1.647]}
        scale={1.765}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['DALL·E_2024-11-28_052030_-_A_stylish_and_artistic_image_feat'].geometry}
        material={materials['DALL·E 2024-11-28 05.20.30 - A stylish and artistic image feat']}
        position={[-4.043, 4.437, -1.655]}
        rotation={[1.568, -0.033, -1.662]}
        scale={1.876}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.render1cr.geometry}
        material={materials.render1cr}
        position={[3.294, 3.813, -4.17]}
        rotation={[1.588, 0, 0]}
        scale={1.665}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['mohammad-rahmani-oXlXu2qukGE-unsplash'].geometry}
        material={materials['mohammad-rahmani-oXlXu2qukGE-unsplash']}
        position={[-3.7, 2.533, -1.094]}
        rotation={[1.571, -0.001, -1.63]}
        scale={[1.655, 1.553, 1.24]}
      />
    </group>
  )
}

useGLTF.preload('models/jroom.glb')
























// import React from 'react';
// import { useGLTF, Html } from '@react-three/drei';

// export function Room(props) {
//   const { nodes, materials } = useGLTF('models/jroom.glb');
//   return (
//     <group {...props} dispose={null}>
//       {/* Existing room objects */}
//       <group position={[-3.882, 1.509, -2.596]} scale={0.12}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_25.geometry}
//           material={materials['Material.001']}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_26.geometry}
//           material={materials['Material.002']}
//         />
//       </group>

//       {/* Annotation for a Poster */}
//       <mesh
//         position={[-4.092, 4.196, 0.549]} // Position of the first poster
//         rotation={[1.569, -0.017, -1.647]}
//         scale={1.765}
//       >
//         <Html
//           position={[0, 0.5, 0]} // Adjust relative position for the annotation
//           center
//           distanceFactor={5} // Scales with camera distance
//         >
//           <div
//             style={{
//               background: 'rgba(0, 0, 0, 0.7)',
//               color: 'white',
//               padding: '8px',
//               borderRadius: '5px',
//               textAlign: 'center',
//             }}
//           >
//             <strong>Poster Title</strong>
//             <p>Description of the poster goes here.</p>
//           </div>
//         </Html>
//       </mesh>

//       {/* Annotation for another Poster */}
//       <mesh
//         position={[-4.043, 4.437, -1.655]} // Position of the second poster
//         rotation={[1.568, -0.033, -1.662]}
//         scale={1.876}
//       >
//         <Html
//           position={[0, 0.5, 0]} // Adjust relative position for the annotation
//           center
//           distanceFactor={5}
//         >
//           <div
//             style={{
//               background: 'rgba(255, 255, 255, 0.8)',
//               color: 'black',
//               padding: '8px',
//               borderRadius: '5px',
//               textAlign: 'center',
//             }}
//           >
//             <strong>Second Poster</strong>
//             <p>Additional details about this poster.</p>
//           </div>
//         </Html>
//       </mesh>
      
//       {/* Remaining room objects */}
//       {/* Add similar annotations for other objects as needed */}
//     </group>
//   );
// }

// useGLTF.preload('models/jroom.glb');
