import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h3>Using Connect Function</h3>
                <CakeContainer />
                <hr />
                <h3>Using Hooks</h3>
                <HooksCakeContainer />
            </div>
        </Provider>
    );
}

export default App;
