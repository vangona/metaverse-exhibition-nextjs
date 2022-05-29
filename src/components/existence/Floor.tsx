import * as THREE from "three";

const Floor = () => {
  return (
    <mesh receiveShadow={true} rotation={new THREE.Euler(Math.PI / 2, 0, 0)}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhongMaterial attach="meterial" color={new THREE.Color("black")} />
    </mesh>
  );
};

export default Floor;
