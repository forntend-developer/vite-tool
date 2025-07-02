/* enumerable type - 열거가능한 */ 

/* 진짜 진짜 진짜 찐 상수를 사용할 경우 enum을 사용함 */

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}


const direction = {
  up:Direction.UP,
  down:Direction.DOWN,
  left:Direction.LEFT,
  right:Direction.RIGHT,
}


enum End_point {
  USER = 'https://jsonplaceholder.typicode.com/',
  POKEMON = 'https://pokeapi/api.v2.pokemo/',
  IMAGE = 'https://randomImage.com/200X200',
}

const END_POINT = {
  user: End_point.USER
}