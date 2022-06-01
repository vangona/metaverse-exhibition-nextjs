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
        position={[3, 7, 3]}
        color={"#FFAC67"}
      />
      <ambientLight color={"#f5d4ba"} intensity={0.1} />
    </group>
  );
};

export default ExistenceLights;
