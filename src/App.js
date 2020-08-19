import React from "react";
import PropTypes from "prop-types";

//App_legacy_200819는 legacy,legacy는 함수형 컴포넌트 -> 클래스형 컴포넌트
class App extends React.Component {
  state = {
    count: 0,
  };

  plus = () => {
     this.setState(current => ({count : current.count+1}))
     console.log("plus");
  }

  minus = () => {
    this.setState(current =>({count : current.count-1}))
      console.log("minus");
  }

  render() {
    return (
      <div>
        <h1>The count is {this.state.count}</h1>
        <button onClick = {this.plus}>plus</button>
        <button onClick ={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
