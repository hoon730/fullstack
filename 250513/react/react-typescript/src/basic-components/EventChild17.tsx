type EventSend = {
  children: React.ReactNode;
  onSend: () => void;
};

function Button({ onSend, children }: EventSend) {
  return (
    <div>
      <button onClick={onSend}>{children}</button>
    </div>
  );
}

export default function EventChild17() {
  return (
    <div>
      <Button onSend={() => alert("play")}>play</Button>
      <Button onSend={() => alert("stop")}>stop</Button>
    </div>
  );
}
