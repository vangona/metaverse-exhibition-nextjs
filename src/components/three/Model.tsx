import { useFBX } from "@react-three/drei";

export default function Model() {
  const fbx = useFBX("existence.fbx");
  fbx.scale.multiplyScalar(0.003);
  return <primitive object={fbx} />;
}

useFBX.preload("existence.fbx");
