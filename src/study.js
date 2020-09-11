//map 함수
/** 
let test=["용휘","남은","훈","도담","노프","준경"];
//array의 각 아이템에 함수를 걸 수 있다. map을 사용하면!
test =test.map(function(item){
    return item+"1";
})
//이런식의 사용도 가능!
test=test.map(item => item+"ss")


console.log(test);
*/

const friends = ["zz","aa","ss"];

// var a = friends.map(function(current){
//     console.log(current);
//     return current + "@";
// });go

var a =friends.map(item => {return 10;});


console.log(a);

// var a =friends.map(function(item){
// console.log(item);
// }
// );
// console.log(a);
