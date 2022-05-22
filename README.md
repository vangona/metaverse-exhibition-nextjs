Metaverser-Exhibition-with-nextjs

# 1. 개요

심리상담을 전공하고, 그것을 코딩을 통해 녹일 수 있는 방법이 있을거라고 생각했었다.

유저와의 상호작용을 극대화하는 컨텐츠로 가상 현실이 괜찮을 것 같다는 생각을 했었고, threejs 라는 라이브러리가 있어서 비교적 손쉽게 구현할 수 있을거라고 생각해서 시작하게 되었다.

Blender를 통해 만들어진 3D Model과 유저가 상호작용 할 수 있도록 하여서, 말 뿐인 가상 현실이 아니라 UX를 고려한 가상 현실을 구현할 수 있도록 한다.

# 2. 기능 명세서

## 1) 시나리오

### ① 유저 입장

### ② section 방문

- 이동

- Section 입장

- 전시품 상호작용

- Section 퇴장

### ③ 방명록 작성

### ④ 갤러리 통한 전시품 관람

- 몰입도를 깰 수 있으므로 재고 필요함.

### ⑤ 사이트 정보 페이지 방문

## 2) UX 설계 주안점

- 유저가 단순히 온라인 전시회라고 느끼는 것이 아니라, 가상 현실의 장점을 살릴 수 있는 전시회가 될 수 있도록 유저 경험을 살릴 수 있어야함.

## 3) 세부 사항

### ① 유저가 상호작용 할 수 있는 3D 모델과 글

- 3D 모델 상호작용 : 각 전시품마다 유저가 할 수 있는 고유한 상호작용을 넣어서, 단순한 온라인 전시가 아닌 가상현실 전시로 느껴질 수 있도록 함. 또한 단순한 상호작용이 아닌, '가상 현실'에서만 경험해볼 수 있는 상호작용을 할 수 있도록 설계할 필요가 있음.

- NFT 판매 + For sale / Sold out 팻말 : 각 3D 모델을 NFT화하여서 판매, 전시회 관람객과 유사한 타겟층으로 홍보효과 노려볼 수 있음. 또한 For sale / Sold out 팻말 자체로 단순한 전시품이 아닌, 현실감을 줄 수 있는 장치가 될 수 있음.

- 상호작용과 어울리는 글 : 글을 상호작용과 어울리도록 배치함.

### ② 글과 3D 모델을 전시회처럼 느낄 수 있는 동선

- 동선에 맞는 작품 설명 : 3D 모델 작품을 보기 전, 사람들이 작품의 배경을 볼 수 있도록 하여서 작품에 도달했을때 몰입감을 높임.

### ③ 동선 속, 몰입감을 줄 수 있는 장치들

- 문 : threejs의 특성상, 첫 상호작용이 발생할 필요가 있음. 또한, 로딩 이후 바로 전시회장으로 이동되면 몰입감이 깨질 수 있음. 전체적인 전시회의 인상을 보여줄 수 있는 문을 사용.

- 상황에 맞는 배경음악 : 작품을 만났을 때, 감동 혹은 감정을 증폭시킬 수 있도록 상황에 맞는 배경음악 사용이 필요함.

- 테마 : 시간대에 맞는 전시회장의 빛 변화를 주기 위해 테마를 사용함.

### ④ 2차 창작, 혹은 흔적을 남길 수 있는 장치들

- 방명록 : 단순한 관람으로는 유저 경험을 충분히 느끼게 할 수 없음. 댓글을 포스트잇의 형태로 구현, 방명록으로 느껴질 수 있도록 만듬.

## 4) 회피 사항 : 밋밋함

- 단순한 온라인 전시회로 느껴지지 않을 수 있도록 최선을 다해야함.

# 3. 기술 명세서

## 1) SW 구조 : MVC

- 프로젝트에서 서버와 연결될 수 있는 이벤트의 규모가 작기 때문에, MVC 구조를 사용함.

## 2) 사용 기술

### ② 주 언어 : Typescript

- OPP와 에러 핸들링을 용이하게 하기 위해서 Typescript를 사용함,

### ① React + Nextjs

- 각 방을 Component로 나눠서 관리하여 개발이 용이하도록 하고, SEO와 성능을 높이기 위해 Nextjs를 사용함.

### 3D Renderer : Threejs + Cannonjs

- 3D 모델 로딩, 렌더링, 물리효과 적용을 용이하게 하기 위하여 Threejs, Cannonjs 라이브러리를 사용함.

### ③ Css-in-Js : Styled-components

- Semantic Style Component 관리를 위해 Styled-components를 사용함

### ④ 상태관리 : Redux

- 사용자의 시각, 위치, Model, 재생중인 배경음악 등을 관리, theme등을 하고자 Redux로 사용함.

### ⑤ DB : Firebase

- DB가 사용될 부분은 사용자의 방명록 부분으로 사용량이 크지 않기 때문에, Backend의 많은 부분은 담당해줄 수 있는 Firebase를 사용함.

### ⑥ 버젼 관리 : Github

- Github을 통해 버젼을 관리.

### ⑦ 배포 : Vercel

- 무료 + 인적 자원을 최대한 낮출 수 있는 배포 수단 중 선택함. 3D 전시회이기 때문에, 로딩속도를 높일 수 있도록 netlify가 아닌 Vercel을 통해 배포함. 추후 traffic이 더 높아질 경우, AWS로 이동할 수 있도록 함.

# 4. 하고 싶은 말
