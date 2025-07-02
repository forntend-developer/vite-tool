let arr = [1, 2, 3];
// arr = [100,1000,'a']
let str = 'a,b,c'.split(',');
// str = [1,2,3]
/* generic type 타입 변수 */
let _arr = [1, 2, 3];
let _str = ['a', 'b', 'c'];
/* 유니온 타입 union type + array type */
let multi = ['hello', 10, true];
multi = [100, 'hi', false];
// 자리 정하면 안되나?
// 빼먹으면 안되는거 아닌가?
/* tuple type */
let tupleA = [1, 2, 3];
// tupleA = [10,100]
let tupleB = ['tiger', 30];
//tupleB = [30, 'name']
/* 다차원 배열 */
const user = [
    ['심선범', 30],
    ['신선범', 30],
    ['신석범', 30]
];
export {};
