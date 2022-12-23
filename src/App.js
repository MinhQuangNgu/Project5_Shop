import "./App.css";
import { publicRouter } from "./router/Router";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app_container">
                <Routes>
                    {publicRouter.map((item) => {
                        const Page = item.element;
                        return item?.defaultLayout ? (
                            <Route
                                key={item.path + "Router"}
                                element={
                                    <item.defaultLayout>
                                        <Page />
                                    </item.defaultLayout>
                                }
                                path={item.path}
                            />
                        ) : (
                            <Route path="/" element={<Page />} />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
