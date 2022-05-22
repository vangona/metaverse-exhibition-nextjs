// styled-components 타입 정의
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    dark: {
      mainColor: string;
      sideColor: string;
      pointColor: string;
    };
    light: {
      mainColor: string;
      sideColor: string;
      pointColor: string;
    };
    response: {};
  }
}
