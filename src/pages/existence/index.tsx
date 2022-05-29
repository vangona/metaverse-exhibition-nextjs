import { Canvas } from "@react-three/fiber";
import { NextPage } from "next";
import Lights from "components/existence/Lights";
import Model from "components/existence/Model";
import { OrbitControls } from "@react-three/drei";
import Floor from "components/existence/Floor";
import Writing from "components/existence/Writing";
import { actionCreators, AppDispatch } from "common/redux/store";
import { connect } from "react-redux";

const Existence: NextPage = () => {
  return (
    <div id="three-container" style={{ position: "relative" }}>
      <Canvas camera={{ position: [1, 1, 1] }}>
        <OrbitControls />
        <Model />
        <Writing />
        <Lights />
        <Floor />
      </Canvas>
    </div>
  );
};

interface RootState {
  animateState: boolean[];
  writingState: boolean;
}

function mapStateToProps(state: RootState) {
  return { animateState: state.animateState, writingState: state.writingState };
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    animateModel: (animateState: boolean[]) =>
      dispatch(actionCreators.animateModel(animateState)),
    showWriting: (writingState: boolean) =>
      dispatch(actionCreators.showWriting(writingState)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Existence);
