
import "./App.css";
import ButtonComponent from "../button/ButtonComponent";
import Counter from "../counter/Counter";

import store from "../../store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
