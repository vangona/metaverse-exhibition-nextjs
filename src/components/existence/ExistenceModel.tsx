import { useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FunctionComponent, useEffect } from "react";
import * as THREE from "three";
import { AnimationAction } from "three";

interface State {
  writingState: boolean;
  toggleWritingState: Function;
}

const ExistenceModel: FunctionComponent<State> = ({
  writingState,
  toggleWritingState,
}) => {
  let isReverse = false;
  let isRunning = false;
  const ANIMATION_DURATION: number = 2;

  const clock = new THREE.Clock();
  const fbx = useFBX("existence.fbx");
  fbx.scale.x = 0.01;
  fbx.scale.y = 0.01;
  fbx.scale.z = 0.01;

  // setting animation
  const mixer = new THREE.AnimationMixer(fbx);
  const animationActions: AnimationAction[] = [];
  (fbx as THREE.Object3D).animations.forEach((animationAction) => {
    const clipAction = mixer.clipAction(animationAction);
    clipAction.setDuration(ANIMATION_DURATION);
    clipAction.clampWhenFinished = true;
    clipAction.repetitions = 1;
    animationActions.push(clipAction);
  });

  function clickEvent() {
    isRunning = true;
    animateAction();
    setTimeout(() => {
      isRunning = false;
      toggleWritingState(!writingState);
    }, ANIMATION_DURATION * 1000);
  }

  function animateAction() {
    if (isReverse) {
      animationActions[0].play();
    } else {
      animationActions[1].play();
    }
  }

  useFrame(() => {
    mixer.update(clock.getDelta());
  });

  useEffect(() => {
    window.addEventListener("click", () => {
      if (!isRunning) clickEvent();
    });
  });

  return (
    <>
      <primitive object={fbx} />
    </>
  );
};

useFBX.preload("existence.fbx");

export default ExistenceModel;
