
# 기능 분할 설계 (Feature-Sliced Design, FSD)
- 레이어(layer), 슬라이스(slice), 세그먼트(segment)의 세가지 개념을 구분합니다.

## layer

![layer](./images/layer.png)

app: 애플리케이션 로직이 초기화되는 곳. Provider, Router, 전역 스타일, 전역 타입 선언 등이 정의 되며, 애플리케이션 진입점 역할을 합니다.

~~processes: 이 레이어는 여러 단계로 이루어진 등록과 같이 여러 페이지에 걸쳐 있는 프로세스를 처리합니다. 이 레이어는 더 이상 사용되지 않는것으로 간주되지만 여전히 가끔 마주할 수 있으며, 선택적 레이어 입니다..~~

pages: 이 레이어에는 애플리케이션의 페이지가 포함됩니다.

widgets: 페이지에 사용되는 독립적인 ui 컴포넌트 입니다.

features: 이 레이어는 비즈니스 가치를 전달하는 사용자 시나리오와 기능을 다룹니다. (ex. 사진리뷰, 좋아요 등) 선택적 레이어 입니다.

entities: 이 레이어는 비즈니스 엔티티를 나타냅니다. 엔티티에는 사용자, 리뷰, 댓글 등이 포함될 수 있습니다. 선택적 레이어입니다.

shared: 이 레이어에는 특정 비즈니스 로직에 종속되지 않는 재사용 가능한 컴포넌트와 유틸리티가 포함되어 있습니다. 여기에는 UI 키트, axios설정, 애플리케이션 설정, 비즈니스 로직에 묶이지 않은 헬퍼 등이 포함됩니다.

 
 
 ### 참고 링크
 - https://emewjin.github.io/feature-sliced-design/
 - https://github.com/yurisldk/realworld-react-fsd/tree/master/src/widgets