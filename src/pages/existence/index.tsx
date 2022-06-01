import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ExistenceFloor from "components/existence/ExistenceFloor";
import { NextPage } from "next";
import ExistenceLights from "components/existence/ExistenceLights";
import ExistenceModel from "components/existence/ExistenceModel";
import ExistenceWriting from "components/existence/ExistenceWriting";
import { useRef, useState } from "react";

const Existence: NextPage = () => {
  const [writingState, setWritingState] = useState(false);
  const camera = useRef();

  const toggleWritingState = (data) => {
    setWritingState(data);
    console.log(camera);
  };

  return (
    <div id="three-container" style={{ position: "relative" }}>
      <Canvas camera={{ manual: true }}>
        <PerspectiveCamera
          ref={camera}
          position={[9, 5, 2]}
          rotation={[-1, 1.3, 1]}
          quaternion={[-0.1, 0.6, 0.1, 0.8]}
          makeDefault
          manual
        />
        <OrbitControls />
        <ExistenceModel
          toggleWritingState={toggleWritingState}
          writingState={writingState}
        />
        {writingState && <ExistenceWriting />}
        <ExistenceLights />
        <ExistenceFloor />
      </Canvas>
    </div>
  );
};

export default Existence;
