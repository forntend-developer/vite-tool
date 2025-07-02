import '/src/style.css';
import { Header } from "./components/Header";
import { router } from '/src/router';

function defineElenments() {
  customElements.define("c-header", Header);
}

defineElenments();


window.addEventListener('DOMContentLoaded', router);