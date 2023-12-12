import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/cake/store";

import CakeContainer from "./components/CakeContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <CakeContainer />
            </div>
        </Provider>
    );
}

export default App;
