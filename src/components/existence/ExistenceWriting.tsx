import { Html } from "@react-three/drei";
import React, { FunctionComponent } from "react";

interface State {
  writingState: boolean;
}

const ExistenceWriting: FunctionComponent<State> = ({ writingState }) => {
  console.log(writingState, "뀨");
  return (
    <>
      {writingState && (
        <Html
          className="container"
          center={true}
          style={{
            width: "40vw",
            height: "40vh",
            backgroundColor: "#ebebeb",
          }}
        >
          <div id="description">
            <p>
              텅 빈 냉장고 속에는 음식 대신 생각이 들어있습니다. 하나 꺼내려다가
              다시 제자리에 돌려놓습니다. 생각은 허기를 채워주지 못합니다.
            </p>
            <p>*𝐥`&apos;`𝐞𝐱𝐢𝐬𝐭𝐞𝐧𝐜𝐞 𝐩𝐫é𝐜è𝐝𝐞 𝐥`&apos;`𝐞𝐬𝐬𝐞𝐧𝐜𝐞,</p>
            <p>
              냉장고 문에는 어렵고 읽히지 않아서 실존하지 못하는 말이
              붙어있습니다.
            </p>
            <p>
              냉장고 속 생각들을 꺼내서 조리할 필요가 있다는 생각이 듭니다.
              냉장고 구석에서 떨고 있는 생각들은 유통기한이 지나면 폐기해야
              하지만, 그것들을 모아서 잘 조리하면 배를 채울 수도 있겠습니다.
            </p>
            <p>
              요리책을 폅니다. 책 표지에는 ‘기획과 마케팅, 쇼호스트처럼
              말하기’라는 제목이 적혀있습니다. 충분한 근거에 생각을 올려놓고
              적당한 논리로 자른 뒤, 오븐에 5분 30초 굽습니다. 자르거나 익힐 수
              없는 것들은 집에서 술안주로 쓰기에도 너무 씁쓸하니 쓰레기통에
              집어넣습니다.
            </p>
            <p>
              간을 하지 않은 사유는 이상한 맛이 납니다. 행동 없는 철학은 이상에
              그칩니다. 시장 조사나 통계 자료 같은 것들로 간을 합니다. 아직도
              맛이 없습니다. 내일 점심, 그 내일의 점심, 그 내일의 점심 혹은
              저녁에 제 생각이 실존할 수 있을까 기대합니다.
            </p>
            <p>
              그런 이유로 오늘 메뉴는 아직 간이 덜 된 심리학입니다. 맛있게
              드세요.
            </p>
          </div>
        </Html>
      )}
    </>
  );
};

export default ExistenceWriting;
