import { Component } from "react";

class ComConditionClass extends Component {
  // 상태변수 저장
  constructor(props) {
    super(props);
    this.state = { isToggle: true };
  }
  // 메서드
  handleToggle = () => {
    this.setState((state) => ({
      isToggele: !state.isToggle,
    }));
  };
  // 화면에 보여질 부분
  render() {
    return (
      <div>
        <button onClick={() => this.handleToggle()}>
          {this.state.isToggle ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default ComConditionClass;
