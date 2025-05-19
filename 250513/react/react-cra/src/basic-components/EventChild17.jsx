function Button({ onSend, children }) {
  return (
    <div>
      <button onClick={onSend}>{children}</button>
    </div>
  );
}

export default function EventChild17() {
  return (
    <div>
      <Button onSend={() => alert("play")} />
      <Button onSend={() => alert("stop")} />
      <Button />
    </div>
  );
}
