import * as THREE from "three";

const Wall = () => {
  return (
    <mesh rotation={new THREE.Euler(Math.PI / 2, 0, 0)} castShadow={true}>
      <planeBufferGeometry args={[100, 100, 100]} />
      <meshPhongMaterial color={new THREE.Color("navy")} />
    </mesh>
  );
};

export default Wall;
