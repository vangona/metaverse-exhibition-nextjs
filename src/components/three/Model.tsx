import { useFBX } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

export default function Model() {
  const threeContainer = document.querySelector("#three-container");
  const div = document.createElement("div");
  div.style.width = "80%";
  div.style.height = "80%";
  div.style.backgroundColor = "white";
  div.style.zIndex = "3";
  div.style.position = "absoluite";
  div.style.top = "0";
  div.style.display = "none";
  threeContainer.appendChild(div);

  const ANIMATION_DURATION: number = 2;

  const fbx = useFBX("withbooks.fbx");
  fbx.scale.multiplyScalar(0.01);

  fbx.children.forEach((mesh) => {
    mesh.receiveShadow = true;
  });

  // setting animation
  const mixer = new THREE.AnimationMixer(fbx);
  const animationAction = mixer.clipAction(
    (fbx as THREE.Object3D).animations[0]
  );
  animationAction.clampWhenFinished = true;
  animationAction.loop = THREE.LoopPingPong;
  animationAction.setDuration(ANIMATION_DURATION);

  const clock = new THREE.Clock();

  let animationState = false;
  let isReverse = false;

  window.addEventListener("click", () => {
    if (!animationAction.isRunning()) clickEvent();
  });

  mixer.addEventListener("loop", () => {
    if (!isReverse) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }

    animationAction.paused = true;
    isReverse != isReverse;
  });
  mixer.addEventListener("finished", () => {
    console.log("finished!");
  });

  function clickEvent() {
    animationState = true;

    if (animationAction.paused) {
      animationAction.paused = false;
    } else {
      animationAction.reset();
    }

    animationAction.play();
  }

  function animate() {
    requestAnimationFrame(animate);

    if (animationState) {
      mixer.update(clock.getDelta());
    }
  }

  animate();

  return <primitive object={fbx} />;
}

useFBX.preload("withbooks.fbx");
