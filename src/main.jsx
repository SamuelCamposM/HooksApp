import ReactDOM from "react-dom/client";
import "./index.css";
import { Padre } from "./07-tarea-memo/Padre";
// import HooksApp from "./HooksApp";
// import CounterApp from "./01-useState/CounterApp";
// import CounterWithCustomHook from "./01-useState/CounterWithCustomHook";
// import SimpleForm from "./02-useEffect/SimpleForm";
// import SimpleFormWithCustomHook from "./02-useEffect/SimpleFormWithCustomHook";
// import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import Layout from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import "./08-useReducer/intro-reducer"
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>
);