import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

import { Provider } from "react-redux";
import { store } from "./store";

import "./assets/style/index.scss";

const App = () => {
    return (
        <div className="app dark-theme">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export { App };
