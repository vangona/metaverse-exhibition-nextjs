import * as THREE from "three";

const Wall = () => {
  return (
    <mesh receiveShadow={true} rotation={new THREE.Euler(Math.PI / 2, 0, 0)}>
      <planeBufferGeometry args={[100, 100, 100]} />
      <meshLambertMaterial color={new THREE.Color("navy")} />
    </mesh>
  );
};

export default Wall;
