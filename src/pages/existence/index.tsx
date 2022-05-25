import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import * as THREE from "three";
import Lights from "components/three/Lights";
import Model from "components/three/Model";
import { OrbitControls, useHelper } from "@react-three/drei";
import Floor from "components/three/Floor";

const Existence: NextPage = () => {
  return (
    <div id="three-container">
      <Canvas camera={{ position: [1, 1, 1] }}>
        <OrbitControls />
        <primitive object={new THREE.AxesHelper(10)} />
        <Model />
        <Lights />
        <Floor />
      </Canvas>
    </div>
  );
};

export default Existence;
