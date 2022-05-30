import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ExistenceFloor from "components/existence/ExistenceFloor";
import { NextPage } from "next";
import ExistenceLights from "components/existence/ExistenceLights";
import ExistenceModel from "components/existence/ExistenceModel";
import ExistenceWriting from "components/existence/ExistenceWriting";
import { connect } from "react-redux";
import wrapper, {
  actionCreators,
  AppDispatch,
  SHOW_WRITING,
} from "common/redux/store";
import { AnyAction, Dispatch } from "redux";

interface State {
  writingState: boolean;
  animateState: boolean[];
  showWriting;
}

const Existence: NextPage<State> = ({
  writingState,
  animateState,
  showWriting,
}) => {
  return (
    <div id="three-container" style={{ position: "relative" }}>
      <Canvas camera={{ position: [1, 1, 1] }}>
        <OrbitControls />
        <ExistenceModel showWriting={showWriting} writingState={writingState} />
        <ExistenceWriting writingState={writingState} />
        <ExistenceLights />
        <ExistenceFloor />
      </Canvas>
    </div>
  );
};

export const getInitialProps = wrapper.getInitialPageProps((store) => () => {
  store.dispatch({
    type: SHOW_WRITING,
    payload: false,
  });
});

const mapStateToProps = (state: State) => state;
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    showWriting: (payload: boolean) =>
      dispatch(actionCreators.showWriting(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Existence);
