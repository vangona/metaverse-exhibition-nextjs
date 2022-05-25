import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import Lights from "components/three/Lights";
import Cube from "components/three/Cube";
import GLTFModel from "components/three/GLTFModel";
import { OrbitControls } from "@react-three/drei";

const Existence: NextPage = () => {
  return (
    <div id="three-container">
      <Canvas camera={{ position: [1, 1, 1] }}>
        <OrbitControls />
        <Cube />
        <GLTFModel />
        <Lights />
      </Canvas>
    </div>
  );
};

export default Existence;
