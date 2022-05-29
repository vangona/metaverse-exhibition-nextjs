import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ExistenceFloor from "components/existence/ExistenceFloor";
import { NextPage } from "next";
import ExistenceLights from "components/existence/ExistenceLights";
import ExistenceModel from "components/existence/ExistenceModel";
import ExistenceWriting from "components/existence/ExistenceWriting";
import wrapper from "common/redux/store";
import { showWriting } from "common/redux/actions/writing";

const Existence: NextPage = (props) => {
  console.log(props);
  return (
    <div id="three-container" style={{ position: "relative" }}>
      <Canvas camera={{ position: [1, 1, 1] }}>
        <OrbitControls />
        <ExistenceModel />
        <ExistenceWriting />
        <ExistenceLights />
        <ExistenceFloor />
      </Canvas>
    </div>
  );
};

export default Existence;
