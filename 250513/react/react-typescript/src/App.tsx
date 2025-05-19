import "./App.css";
import FunComProps4 from "./basic-components/FunComProps4";
import ClassComProps5 from "./basic-components/ClassComProps5";
import FunComProps6 from "./basic-components/FunComProps6";
import ComCombine7 from "./basic-components/ComCombine7";
import Event16 from "./basic-components/Event16";
import EventChild17 from "./basic-components/EventChild17";
interface User {
  name: string;
  age: number;
  imgUrl: string;
  imgSize: number;
}

const user: User = {
  name: "전우진",
  age: 13,
  imgUrl: "./images/7.png",
  imgSize: 100,
};

function App() {
  return (
    <>
      <h1>props</h1>
      <FunComProps4 uname="전우진" uage={13} />
      {/* <ClassComProps5 day="금요일" num={2} />
      <FunComProps6 name={user.name} age={user.age} imgUrl={user.imgUrl} imgSize={user.imgSize} />
      <ComCombine7 /> */}
      <Event16 />
      <EventChild17 />
    </>
  );
}

export default App;
