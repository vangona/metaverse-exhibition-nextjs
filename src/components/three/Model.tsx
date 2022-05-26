import { useFBX } from "@react-three/drei";
import * as THREE from "three";

export default function Model() {
  const fbx = useFBX("withbooks.fbx");
  console.log(fbx);
  fbx.castShadow = true;
  fbx.scale.multiplyScalar(0.01);

  const mixer = new THREE.AnimationMixer(fbx);
  const animationAction = mixer.clipAction(
    (fbx as THREE.Object3D).animations[0]
  );
  animationAction.loop = THREE.LoopOnce;
  animationAction.clampWhenFinished = true;

  const clock = new THREE.Clock();

  let animationState = false;

  window.addEventListener("click", clickEvent);

  function clickEvent() {
    animationAction.reset();
    animationAction.play();
    animationState = true;
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
