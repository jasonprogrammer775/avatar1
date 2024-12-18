import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader } from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace this with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 80 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      )}
    </>
  );
}

export default App;


