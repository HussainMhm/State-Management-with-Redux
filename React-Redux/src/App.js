import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h3>Using Connect Function</h3>
                <CakeContainer />
                <hr />
                <h3>Using Hooks</h3>
                <HooksCakeContainer />
                <hr />
                <h3>Ice Creams</h3>
                <IceCreamContainer />
                <hr />
                <h3>Buy Cake with Input</h3>
                <NewCakeContainer />
            </div>
        </Provider>
    );
}

export default App;
