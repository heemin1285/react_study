function Detail({boardTitle, setBoardTitle, titleIndex}) {
  return (
    <div className="detail">
      <button
        onClick={() => {
          let _boardTitle = [...boardTitle];
          _boardTitle[titleIndex] = "ABCD";
          setBoardTitle(_boardTitle);
        }}
      >
        제목바꿔주는 버튼
      </button>
      <h4>제목: {boardTitle[titleIndex]}</h4>
      <p>날짜</p>
      <p>내용</p>
    </div>
  );
}

export default Detail;

// 컴포넌트끼리 필요한 정보들을 주고받을 수 있음
// 정보 : state, 함수, 값, 등등

// 단, 부모컴포넌트에서 자식컴포넌트로만 보낼 수 있음
// 부모에서 손자쪽으로 보내고 싶으면 직접은 불가능하고
// 부모 -> 자식 / 자식 -> 손자 이 방식으로 보내야 한다
