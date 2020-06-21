import React from 'react';


//리액트 앱은 오직 하나의 컴포넌트만을 렌딩해야 한다. 
//따라서 다른 컴포넌트 작성시 여기다 임포트 해줘야만 한다.
//컴포넌트 함수를 작성할 때는 대문자로 작성해야만 한다.


/*
probs를 전달하기 위해서는 <Food fav = "kimchi"/> 와 같이 키값과 그 안의 값을 입력해 주면 된다.
그 후 
function Food({fav}){
  return(
  <h1>i like {fav}</h1>
  );
}
와 같이 {fav} 와 같이 입력해 주면 그냥 fav를 입력할 때는 object 형태로 {"fav":"kimchi"} 의 형태로 가지만
//저렇게 입력해 준다면 kimchi 만 가게 된다.
//이후 html 태그 안에서 사용하기 위해 {fav} 와 같이 입력해 준 것이다.
probs 를 그대로 보낸 다음에 probs.fav와 같이 해도 된다.
*/
let food = [{"name":"김치"},{"name":"피자"},{"name":"햄버거"}];

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      {food.map(item => <Food name={item.name} />)}
    </div>
  );
}



function Food({name}){
  return(
  <h1>i like {name}</h1>
  );
}

export default App;
