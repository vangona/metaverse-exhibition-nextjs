import { useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FunctionComponent, useEffect, useState } from "react";
import * as THREE from "three";

interface State {
  writingState: boolean;
  toggleWritingState: Function;
}

const ExistenceModel: FunctionComponent<State> = ({
  writingState,
  toggleWritingState,
}) => {
  const [isAnimationReady, setIsAnimationReady] = useState(false);
  const [animationAction, setAnimationAction] = useState(null);
  const ANIMATION_DURATION: number = 2;

  const clock = new THREE.Clock();
  const fbx = useFBX("existence.fbx");
  fbx.scale.x = 0.01;
  fbx.scale.y = 0.01;
  fbx.scale.z = 0.01;

  // setting animation
  const mixer = new THREE.AnimationMixer(fbx);
  const openAnimation = mixer.clipAction((fbx as THREE.Object3D).animations[0]);
  openAnimation.setDuration(ANIMATION_DURATION);
  const closeAnimation = mixer.clipAction(
    (fbx as THREE.Object3D).animations[1]
  );
  closeAnimation.setDuration(ANIMATION_DURATION);

  window.addEventListener("click", () => {
    if (!animationAction.isRunning() && isAnimationReady) clickEvent();
  });

  mixer.addEventListener("loop", () => {
    if (animationAction === openAnimation) {
      setAnimationAction(closeAnimation);
    } else {
      setAnimationAction(openAnimation);
    }

    setIsAnimationReady(true);
    animationAction.paused = true;
  });

  function clickEvent() {
    setIsAnimationReady(false);
    animationAction.paused = false;
    animationAction.play();
    setTimeout(() => {
      toggleWritingState(!writingState);
    }, ANIMATION_DURATION * 1000);
  }

  function setAnimation(animation) {
    setAnimationAction(animation);
    setIsAnimationReady(true);
    console.log(animation);
  }

  useFrame(() => {
    mixer.update(clock.getDelta());
  });

  useEffect(() => {
    setAnimation(openAnimation);
  }, []);

  return (
    <>
      <primitive object={fbx} />
    </>
  );
};

useFBX.preload("withbooks.fbx");

export default ExistenceModel;
