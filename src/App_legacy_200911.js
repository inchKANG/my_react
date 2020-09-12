import React from "react";
import PropTypes from "prop-types";


//App_legacy_200819는 legacy,legacy는 함수형 컴포넌트 -> 클래스형 컴포넌트
class App extends React.Component {

  state = {
    count: 0,
  };

  //setstate를 쓰는 이유, render 매소드에 변경되었다는 것을 알려주기 위해서.,state를 직접 변경하면 안됨. 
  //setstate를 사용하지 않으면, 새 state와 함께, render function이 호출되지 않음.
  //변경된 부분만 변경시킴
  //리액트는 setstate사용할때마다 렌더펑션을 호출시킨다.
  plus = () => {
     this.setState((state) => ({count : state.count+1}))
     console.log("plus");
  }

  minus = () => {
    this.setState((state) =>({count : state.count-1}))
      console.log("minus");
  }
  /*
  주로 사용되는 생명주기들.
  componentDidMount(){

  }
  render(){

  }
  componentDidUpdate(){

  }
  componentWillUnmount(){

  }
*/
  //클래스형일 때는 return 매소드가 없고 render 매소드가 있다. class는 함수가 아니기 떄문인다.
  //렌더는 부모인 React.component 에서 상속받은 매서드이다.
  //리액트는 자동으로 클래스 컴포넌트 안에 있는 렌더를 실행한다.
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
