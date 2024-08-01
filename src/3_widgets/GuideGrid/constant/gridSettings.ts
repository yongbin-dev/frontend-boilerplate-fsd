export const GridSettings = {
  language: {
    localeCode: "ko", // localeCode : 언어 설정 (en, ko)
    data: {
      display: {
        noData: "검색 결과가 없습니다.", // noData : 빈 값일 때 표시하는 형식
      },
    },
  },
  theme: {
    presetName: "clean", // presetName : 기본 테마 설정 (default, striped, clean)

    // <<커스텀 옵션설정>>
    extOptions: {
      // [ outline ] : 그리드 바깥 선 설정
      outline: {
        border: "#bbbbbb", //  border : 색깔
        showVerticalBorder: true, //  showVerticalBorder : 바깥 세로 선 여부(boolean)
      },
      // [ selection ] : 행, 열의 헤더를 선택하면 해당 부분이 선택되며 나오는 색상 설정
      selection: {
        background: "#1eed11", //  background : 바탕색
        border: "#bbbbbb", //  border : 선 색
      },
      // [ scrollbar ] : 스크롤바
      scrollbar: {
        border: "rgb(205,205,205)", //  border : 선 색
        background: "rgb(248,248,248)", //  background : 바탕 색
        emptySpace: "rgb(240,240,240)", //  emptySpace : 스크롤 빈 부분 색상
        thumb: "rgb(205,205,205)", //  thumb : 스크롤 부분 색상
        active: "rgb(70,70,70)", //  active : 마우스오버, 클릭할 때 색깔
      },
      // [ frozenBorder ] : 고정 컬럼
      frozenBorder: {
        border: "rgb(233,233,233)", //  border : 선 색
      },
      // [area] : 검색 후 표시된 열을 제외한 부분 ( 표의 높이 - 열의 높이 = area )
      area: {
        header: {
          background: "rgb(233, 233, 233)", //  header : 컬럼이 없는 헤더의 색상을 나타낸다.
          border: "#bbbbbb", //  **border : [ cell ] - header 와 맞추는 것이 좋다. 현재는 오버되어 색상이 표기된다.
        },
        //  body : 빈 열 값의 부분 색상
        body: {
          background: "#ffffff",
        },
      },
      // [ row ] : 열
      row: {
        // hover : 마우스 오버시
        hover: {
          background: "#e9f8e8",
        },
        // dummy : 비활성 시
        dummy: {
          background: "#f5d1ba",
        },
      },
      // [ cell ] : 각 셀의 색상 지정
      cell: {
        normal: {
          border: "#bbbbbb",
          text: "black",
          showVerticalBorder: true,
          showHorizontalBorder: true,
        },
        //  header : 상단 제목 열
        header: {
          background: "rgb(233, 233, 233)",
          border: "#bbbbbb",
          text: "black",
          showVerticalBorder: true,
          showHorizontalBorder: true,
        },
        //  selectedHeader : 선택한 제목 색상
        selectedHeader: {
          background: "rgb(233, 233, 233)",
        },
        //  rowHeader : 좌측 제목 행
        rowHeader: {
          background: "rgb(233, 233, 233)",
          border: "#bbbbbb",
          text: "black",
          showVerticalBorder: true,
          showHorizontalBorder: true,
        },
        //  selectedRowHeader : 선택한 열 색상
        selectedRowHeader: {
          background: "rgb(233, 233, 233)",
        },
        //  focused : 선택한 셀 색상
        focused: {
          background: "#f5d1ba",
          border: "#bbbbbb",
        },
        //  focusedInactive : 선택 후 표 바깥을 선택하면 나타나는 색상
        focusedInactive: {
          border: "#bbbbbb",
        },
        //  summary : 요약 열에 사용할 색상
        summary: {
          background: "#f1f5ff",
          border: "#bbbbbb",
          text: "black",
          showVerticalBorder: true,
          showHorizontalBorder: true,
        },
      },
    },
  },
  // << options >>
  defaultOptions: {
    // [ header ] : 헤더의 속성 설정
    header: {
      height: 28, // height : 기본 높이 설정(px;num)
      align: "center" as "left" | "center" | "right", // align을 AlignType으로 지정
      valign: "middle" as "top" | "middle" | "bottom", // valign : 세로정렬
    },
    minRowHeight: 25, // rowHeight : 열의 최소높이(px)    ==> **25px이하로 설정하게 되면 스타일이 틀어지기 때문에 낮은 숫자로 변경되는 것을 권장하지 않습니다.
    rowHeight: 25, // rowHeight : 열의 높이(px)        ==> **25px이하로 설정하게 되면 스타일이 틀어지기 때문에 낮은 숫자로 변경되는 것을 권장하지 않습니다.
    minBodyHeight: 50, // minBodyHeight : 표의 최소 크기
    bodyHeight: 300, // bodyHeight : 표의 크기
    // width: "auto", // width : 너비
    heightResizable: false, // heightResizable : 높이 마우스 조절
    usageStatistics: false, // usageStatistics : hostname전송 여부 설정
    scrollX: true, // scrollX : 가로 축 이동 추가 여부(boolean)
    scrollY: true, // scrollY : 세로 축 이동 추가 여부(boolean)
    // [ copyOptions ] : 복사할 때 사용할 값 지정
    copyOptions: {
      useFormattedValue: true, //  useFormattedValue : 포멧된 값을 복사 혹은 원본 데이터 복사
    },
    // [ columnOptions ]
    columnOptions: {
      minWidth: 50, //  minWidth : 최소 너비 사이즈
      resizable: true, //  resizable : 컬럼의 고정 폭을 조정 여부(boolean).
      frozenCount: 0, //  frozenCount : 고정 컬럼의 개수
      frozenBorderWidth: 1, //  frozenBorderWidth : 고정 컬럼의 경계선 너비(px)
    },
  },
};
