import { useFBX } from "@react-three/drei";
import { FunctionComponent } from "react";
import * as THREE from "three";

interface State {
  writingState: boolean;
  showWriting;
}

const ExistenceModel: FunctionComponent<State> = ({
  writingState,
  showWriting,
}) => {
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

  window.addEventListener("click", () => {
    if (!animationAction.isRunning()) clickEvent();
  });

  mixer.addEventListener("loop", () => {
    animationAction.paused = true;
  });

  function clickEvent() {
    showWriting(!writingState);
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

  return (
    <>
      <primitive object={fbx} />
    </>
  );
};

useFBX.preload("withbooks.fbx");

export default ExistenceModel;
