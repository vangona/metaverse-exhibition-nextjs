import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="yellow" />
    </mesh>
  );
};

export default Cube;
