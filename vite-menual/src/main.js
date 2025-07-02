import "@/style.css";
import { getNode, insertLast } from "kind-tiger";
import logo from "@/assets/js.svg"; //default 내보내기로 이름을 받고싶은걸로 받을 수 있음
import logo_8b from "@/assets/8b.jpg"; // 이미지를 동적으로 만들어줘야 빌드했을때 보임
import classes from "@/style.module.css";

console.log(classes);

const app = getNode("#app");

const template = `
  <figure class="figure">
    <img src="${logo}" />
    <figcaption>자바스크립트 로고</figcaption>
  </figure>

  <figure class="${classes.figure}">
    <img width="100px" src="${logo_8b}" />
    <figcaption>studio 로고</figcaption>
  </figure>
`;

insertLast(app, template);
console.log(app);
