const user:{
  id?:number;  // Optional property
  name:string;
  age:number;
} = {
  name: 'tiger',
  age: 30
}


user.id = 123123;
//user.address = '서울시';


// [1,2,3].forEach(()=>{

// })


const config:{
  readonly apiKey:string;
} = {
  apiKey: 'asd!0_2345346lkjdfgl'
}

//config.apiKey = 'aaa'