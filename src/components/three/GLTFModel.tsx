import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function GLTFModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("existence.gltf");

  console.log(nodes, materials);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.냉장고_공간.geometry}
        material={materials["매테리얼"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper_door.geometry}
        material={materials["매테리얼"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper_space.geometry}
        material={materials["매테리얼"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lower_door.geometry}
        material={materials["매테리얼"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.refrifdgerator.geometry}
        material={materials["매테리얼"]}
      />
    </group>
  );
}

useGLTF.preload("existence.gltf");
