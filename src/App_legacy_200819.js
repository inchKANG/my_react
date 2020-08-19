import React from "react";
import PropTypes from "prop-types"

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

//api에서 이런 정보가 왔다고 가정한다면, 이 정보를 map 함수를 쓰면 동적으로 그려줄 수 있다.
const foodILike = [
  {
    id: 1,
    name: "김치",
    image: "https://image.auction.co.kr/itemimage/1b/45/1c/1b451c3fa6.jpg",
    rating: "4"  ,
  },
  {
    id: 2,
    name: "파자",
    image:
      "https://lh3.googleusercontent.com/proxy/Rjf-7X-Yz7SRaD7qgoZUrPpLT5I9b3iDvUlXsP3Gpb_0QSJbeiJ_7ehuq9KVGpRnY9Mc312A6EqT0ypVYf4nK7-NBnXLbPqcLBP9apLWIKyYNw5QVoQ",
    rating: "1",
  },
  {
    id: 3,
    name: "불고기",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
    rating: "2",
  },
  {
    id: 4,
    name: "라면",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP9G0JlLBaPoAmqkSVMamYAs_C1ciPaqP6jw&usqp=CAU",
    rating: "2",
  },
  {
    id: 5,
    name: "감자튀김",
    image:
      "data:image/jpeg;base64,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",
    rating: "3",
  },
  {
    id: 6,
    name: "햄버거",
    image: "https://img.hankyung.com/photo/201908/01.20330262.1.jpg",
    rating: "4",
  },
];

// //이와 같이 함수에 담아서 사용할 수도 있다.
// function renderFood(food) {
//   return <Food name={food.name} />;
// }

//리액트의  probs에는 key 가 필수이다. 없어도 문제는 없음. 하지만 에러가 난다.
function App() {
  return (
    <div>
      {/* {food.map(renderFood)} */}
      {foodILike.map((item) => (
        <Food key={item.id} name={item.name} image ={item.image} rating = {item.rating} />
      ))}
    </div>
  );
}

function Food({name,image,rating}) {
  return (
    <div>
      <h2>i like {name}</h2>
      <h3>{rating}/5.0</h3>
      <img src={image} alt={name} />
    </div>
  );
}
Food.propTypes={
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.string.isRequired
};

// function Food({name}){
//   return(
//   <h1>i like {name}</h1>
//   );
// }

export default App;
