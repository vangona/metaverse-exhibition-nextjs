import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D";
import { AnimationClip } from "three/src/animation/AnimationClip";

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

const GLTFModel = () => {
  // Refs
  const group = useRef<group>();
  const actions = useRef<actions>();

  // nodel, animations states
  const [model, setModel] = useState<Object3D | null>(null);
  const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

  // mixer
  const [mixer] = useState(() => new THREE.AnimationMixer(null));

  // Load Model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("existence.gltf", async (gltf) => {
      const nodes = await gltf.parser.getDependencies("node");
      const animations = await gltf.parser.getDependencies("animation");
      setModel(nodes[0]);
      setAnimation(animations);
    });
  }, []);

  // set animation
  useEffect(() => {
    if (animation && actions && typeof group.current != "undefined") {
      actions.current = {
        idle: mixer.clipAction(animation[0], group.current as Object3D),
      };
      actions.current.idle.play();
      return () => animation.forEach((clip) => mixer.uncacheClip(clip));
    }
  }, [animation]);

  // animations update
  useFrame((_, delta) => mixer.update(delta));
  // rotation
  useFrame(() => {
    if (typeof group.current != "undefined")
      return (group.current.rotation.y += 0.01);
  });

  return (
    <>
      {model ? (
        <group ref={group} position={[0, -150, 0]} dispose={null}>
          <primitive ref={group} name="Object_0" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default GLTFModel;
