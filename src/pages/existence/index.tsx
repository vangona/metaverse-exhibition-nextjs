import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import GLTFModel from "components/three/GLTFModel";
import Lights from "components/three/Lights";
import Cube from "components/three/Cube";

const Existence: NextPage = () => {
  return (
    <div id="three-container">
      <Canvas camera={{ position: [1, 1, 1] }}>
        <GLTFModel />
        <Cube />
        <Lights />
      </Canvas>
    </div>
  );
};

export default Existence;
