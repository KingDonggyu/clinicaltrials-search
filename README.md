# clinicaltrials-search

> [한국임상정보](https://clinicaltrialskorea.com/) 검색 영역 클론

## Usage

### Server

```
git clone https://github.com/walking-sunset/assignment-api.git

npm install

npm start
```

### Client

> 환경 변수 설정 필수 (`.env.example` 참고)

```
git clone https://github.com/KingDonggyu/clinicaltrials-search.git

npm install

npm start
```

## Tech Stack

- 코어: React, TypeScript
- 스타일링: Emotion
- 빌드: Vite
- 패키지 매니저: npm

## Requirements

### API 호출 별 로컬 캐싱 구현

> [`react-cache`](https://github.com/KingDonggyu/clinicaltrials-search/tree/main/src/lib/react-cache) 라이브러리 구현

1. LRU 알고리즘을 적용한 `ClientSideCache` 클래스 모듈 구현

   - **Doubly Linked List**를 사용하여 빠른 삽입, 삭제 수행
   - LinkedList의 단점인 접근속도를 개선하기 위해 접근 시 **Map**을 함께 사용
   - 설정한 최대 캐시 데이터 수를 넘으면 가장 오랫동안 사용되지 않았던 데이터 삭제
   - 캐시 내 존재하는 데이터 접근시 expire time을 먼저 확인 후, 만료되었으면 해당 데이터 삭제 및 캐시 miss 처리

2. Context API를 이용한 `ClientSideCache` 인스턴스 관리

3. `ClientSideCache` 인스턴스를 활용하여 API 호출에 대한 캐싱을 제공하는 커스텀 Hooks 구현

   - `useQuery` Hook: 특정 함수(주로 GET API 호출 함수)를 실행 후 결과를 expire time과 함께 캐시에 저장 및 캐싱하는 함수 반환
   - `useMutation` Hook: 특정 함수(주로 POST API 호출 함수) 실행 및 캐시 내 최신화가 필요한 데이터들을 삭제하는 함수 반환

### API 호출 횟수 최적화

> [`useDebounce`](https://github.com/KingDonggyu/clinicaltrials-search/blob/main/src/hooks/useDebounce.ts) 커스텀 Hook 구현

- 특정 시간 동안 연이어 호출되는 함수들 중 마지막 함수만 호출하도록 하는 디바운스 적용

### 키보드만으로 추천 검색어 이동 가능하도록 구현

> [`useUpDownKeyboardNavigation`](https://github.com/KingDonggyu/clinicaltrials-search/blob/main/src/hooks/useUpDownKeyboardNavigation.ts) 커스텀 Hook 구현

- 위 방향키를 누르면 이전 항목(`index - 1`)으로, 아래 방향키를 누르면 다음 항목(`index + 1`)으로 이동하도록 `index` 상태 설정
- 설정된 `index`를 갖는 추천 검색 요소에 배경색 표시

## Demo

![demo](https://github.com/KingDonggyu/clinicaltrials-search/assets/33220404/701fc01a-82cf-408d-80c1-897f4a35fff2)
