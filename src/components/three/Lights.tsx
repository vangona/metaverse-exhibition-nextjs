import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
  const directionalLight = useRef();
  useHelper(directionalLight, DirectionalLightHelper, 10, "blue");

  return (
    <group>
      <directionalLight
        ref={directionalLight}
        castShadow
        position={[5, 30, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </group>
  );
};

export default Lights;
