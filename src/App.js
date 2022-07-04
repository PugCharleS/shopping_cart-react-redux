import "./App.css";
import Cart from "./components/Cart/Cart";
import { ContextProvider } from "./context/context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="payment">
          <Cart />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
