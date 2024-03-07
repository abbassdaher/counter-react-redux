
import "./App.css";
import ButtonComponent from "../button/ButtonComponent";
import Counter from "../counter/Counter";
import { Provider } from "react-redux";
import store from "../../store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
