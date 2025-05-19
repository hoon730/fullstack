type EventSend = {
  onClick: () => void;
  children: React.ReactNode;
};

function Button({ onClick, children }: EventSend) {
  return (
    <div>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    </div>
  );
}

export default function EventChild17() {
  return (
    <div className="bubble" onClick={() => alert("나 부모")}>
      <Button onClick={() => alert("play")}>play</Button>
      <Button onClick={() => alert("stop")}>stop</Button>
    </div>
  );
}
