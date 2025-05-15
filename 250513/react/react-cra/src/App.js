import logo from "./logo.svg";
import "./App.css";
import FunCom1 from "./basic-components/FunCom1";
import FunComImg2 from "./basic-components/FunComImg2";
import ClassCom3 from "./basic-components/ClassCom3";
import FunComProps4 from "./basic-components/FunComProps4";
import ClassFunCom5 from "./basic-components/ClassFunCom5";
import FunComProps6 from "./basic-components/FunComProps6";
import ComCombine7 from "./basic-components/ComCombine7";

const user = {
  name: "전우진",
  age: 13,
  imgUrl: "./images/411.png",
  imgSize: 90,
};

function App() {
  const age = 20;

  return (
    <div className="App">
      <FunCom1 />
      <FunComImg2 />
      <ClassCom3 />
      <FunComProps4 name="전우진" userAge={13} />
      <ClassFunCom5 day="목" hours={12} />
      <FunComProps6
        name={user.name}
        age={user.age}
        imgUrl={user.imgUrl}
        imgSize={user.imgSize}
      />
      <ComCombine7 />
    </div>
  );
}

export default App;
