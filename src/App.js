import { Provider } from "react-redux";
import Auth from "./components/Auth";
import Calculator from "./components/Calculator";
import { store } from "./store";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Calculator />
      <Auth />
    </Provider>
  );
}

export default App;
