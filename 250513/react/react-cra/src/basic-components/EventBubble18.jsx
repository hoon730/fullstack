function Button({ onClick, children }) {
  return (
    <div>
      <button
        onClick={(e) => {
          //전파중기
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    </div>
  );
}

export default function EventBubble18() {
  return (
    <div className="bubble" onClick={() => alert("나 부모모")}>
      <h2>이벤트 버블링</h2>
      <button onClick={() => alert("play")}>play</button>
      <button onClick={() => alert("stop")}>stop</button>
    </div>
  );
}
