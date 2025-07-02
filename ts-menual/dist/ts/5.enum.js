/* enumerable type - 열거가능한 */
/* 진짜 진짜 진짜 찐 상수를 사용할 경우 enum을 사용함 */
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
const direction = {
    up: Direction.UP,
    down: Direction.DOWN,
    left: Direction.LEFT,
    right: Direction.RIGHT,
};
var End_point;
(function (End_point) {
    End_point["USER"] = "https://jsonplaceholder.typicode.com/";
    End_point["POKEMON"] = "https://pokeapi/api.v2.pokemo/";
    End_point["IMAGE"] = "https://randomImage.com/200X200";
})(End_point || (End_point = {}));
const END_POINT = {
    user: End_point.USER
};
export {};
