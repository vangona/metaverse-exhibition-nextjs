import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import { lazy } from "react";
import * as THREE from "three";
import GLTFModel from "../../components/three/GLTFModel";

const Existence: NextPage = () => {
  return (
    <div id="three-container">
      <Canvas camera={{ position: [1, 1, 1] }}>
        <GLTFModel />
        <color attach="background" args={["hotpink"]} />
      </Canvas>
    </div>
  );
};

export default Existence;
