import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper } from "three";

const ExistenceLights = () => {
  const pointLight = useRef();

  useHelper(pointLight, PointLightHelper, 10, "blue");

  return (
    <group>
      <pointLight
        castShadow
        ref={pointLight}
        position={[5, 15, 5]}
        intensity={1}
        color={"#FFE2B7"}
      />
    </group>
  );
};

export default ExistenceLights;
