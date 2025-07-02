/*  alias: 별칭  */


//type(큰 것, 함수), interface(짜잘짜잘, 객체..)

type User1 = {   // 타입에 별칭을 지정할 때는 무조건 앞에를 대문자로 작성한다
  id:number;
  name: string;
  auth: string;
  isPaid :boolean;
}

type User2 = User1 & {address:string};

const user1:User1 = {
  id: 1,
  name: 'tiger',
  auth: 'admin',
  isPaid : true
}

const user2:User1 & {address:string} = {
  id: 2,
  name: 'beom',
  auth: 'user',
  isPaid : false,
  address:'남양주시'
}



type Fn = (a:string) => void;

interface _Fn {
  (a:string):void
}


interface User3 {   // interface는 동일한 식별자를 쓰면 병합해줌 하지만 하면 안됨....
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

// interface User3 {
//  address:string;
// }


interface User4 extends User3 {
  address:string
}

// const user3:User3 & {address:string} = {
const user3:User4 = {
  id:3,
  name: 'sun',
  auth: 'user',
  isPaid : true,
  address: '남양주시'
}


// 객체의 키가 동적으로 결정될 때 유용하게 사용할 수 있는 
/* index signature */
type Person = {
  name: string;
  age: number;
  email: string;
  [key:string]:string | number;
}



const person:Person = {
  name: 'tiger',
  age: 30,
  email: 'tiger@gmail.com',
  gender:'male',
  phone:123123132
}